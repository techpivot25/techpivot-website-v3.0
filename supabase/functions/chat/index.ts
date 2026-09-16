import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() 
    || req.headers.get('x-real-ip') 
    || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);
  
  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  if (!existing || now > existing.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  existing.count++;
  return true;
}

// Simple validation functions (no external dependencies)
function validateMessage(msg: unknown): { role: string; content: string } | null {
  if (typeof msg !== 'object' || msg === null) return null;
  const m = msg as Record<string, unknown>;
  
  if (typeof m.role !== 'string' || !['user', 'assistant', 'system'].includes(m.role)) {
    return null;
  }
  
  if (typeof m.content !== 'string' || m.content.length === 0) {
    return null;
  }
  
  // Enforce max length of 4000 characters per message
  const content = m.content.slice(0, 4000);
  
  return { role: m.role, content };
}

function validateMessages(messages: unknown): { role: string; content: string }[] | null {
  if (!Array.isArray(messages)) return null;
  if (messages.length === 0 || messages.length > 50) return null;
  
  const validated: { role: string; content: string }[] = [];
  for (const msg of messages) {
    const validatedMsg = validateMessage(msg);
    if (!validatedMsg) return null;
    validated.push(validatedMsg);
  }
  
  return validated;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Check rate limit
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    
    // Validate input
    const validatedMessages = validateMessages(body.messages);
    if (!validatedMessages) {
      console.error("Invalid messages format received:", JSON.stringify(body.messages).slice(0, 200));
      return new Response(
        JSON.stringify({ error: "Invalid request format. Messages must be an array with valid role and content." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    
    if (!GEMINI_API_KEY) {
      console.error("Configuration error: Required API key not set");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Processing chat request from IP: ${clientIP}, messages: ${validatedMessages.length}`);

    const SYSTEM_PROMPT = `You are TechBot, the AI Assistant for TechPivot Technologies & Consulting (techpivot.in). You help visitors understand TechPivot's services, capabilities, and products, and guide them toward booking a consultation or submitting an inquiry.

## SERVICES (Offerings)
1. **Agentic AI** — Autonomous AI agents that plan, reason, and execute multi-step workflows with minimal human intervention; used for customer support automation, enterprise process automation, and intelligent search.
2. **Generative AI** — Custom generative AI solutions: content generation, LLM fine-tuning, RAG pipelines, AI copilots.
3. **SaaS Platform Development** — End-to-end design, build, and scaling of multi-tenant SaaS products.
4. **Web Development** — Modern, high-performance websites and web applications.
5. **Mobile App Development** — Native and cross-platform iOS/Android apps.
6. **Cloud & Security Solutions** — Cloud architecture, migration, and security hardening.
7. **Custom Software Development** — Bespoke, end-to-end software delivery tailored to a client's exact workflow.
8. **Staff Augmentation** — Dedicated engineers and teams embedded with a client's in-house staff.
9. **IoT Solutions** — Connected-device platforms, edge computing, and IoT data pipelines.
10. **Software Consultancy** — Technology strategy, architecture review, and digital transformation advisory.

## CAPABILITIES (deep technical practice areas, distinct from the services above)
1. **Advanced Defense & Intelligence Solutions** — Mission-critical software, secure data systems, and algorithmic decision support for defense, government, and intelligence partners.
2. **Algorithmic Infrastructure Optimization** — Advanced mathematics and kernel/transport-layer optimization that makes software run significantly faster on existing hardware, without rewriting application code.
3. **Custom Algorithm Development** — Novel mathematical models and algorithms designed from first principles for problems generic tooling can't solve.
4. **Cybersecurity Advisory Services** — Security architecture review, compliance readiness, and infrastructure hardening advisory.
5. **Sales & Business Development** — Go-to-market strategy, enterprise relationship building, and channel/partnership development for technical organizations.

## PRODUCTS
1. **Concept** — Early-stage product ideation and validation support.
2. **Solution** — A packaged, ready-to-deploy product offering.
3. **Custom Dev** — Fully custom product development engagements.

## COMPANY
TechPivot Technologies & Consulting is a technology company focused on Algorithmic Infrastructure Optimization and applied AI, helping enterprises, government, and defense partners get significantly more performance out of the infrastructure they already own. Leadership includes Praveen Bhatia (Founder & CEO), Shawn (W) James (CTO), Robert W. Sanchez (VP, Legal & Compliance), with an Advisory Board including Manishh Jaiin.

## HOW TO RESPOND
- Be friendly, concise, and helpful. Keep responses to 2-3 sentences unless the user explicitly asks for more detail.
- When a user describes a problem or need, map it to the most relevant service or capability above and briefly explain the fit.
- If a user wants pricing, a proposal, or to start a project, encourage them to share their contact details in this chat (for a callback) or visit the Contact page to book a consultation.
- If asked about something outside TechPivot's offerings (e.g. unrelated general knowledge), you may answer briefly but steer the conversation back to how TechPivot could help.
- Never invent case studies, client names, or numeric claims (pricing, team size, years of experience) that aren't stated here — if unsure, offer to connect them with the team instead of guessing.`;

    // Gemini has no "system" role in `contents` — it takes a separate
    // system_instruction field, and uses "model" instead of "assistant".
    const geminiContents = validatedMessages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    const GEMINI_MODEL = "gemini-3.6-flash";
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse`;
    const geminiRequestBody = JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: geminiContents,
    });

    // Gemini occasionally returns 503 "model overloaded" under high demand —
    // this is transient and usually clears within a couple seconds, so retry
    // a couple times with a short backoff before giving up.
    let response: Response | null = null;
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "x-goog-api-key": GEMINI_API_KEY,
          "Content-Type": "application/json",
        },
        body: geminiRequestBody,
      });

      if (response.status !== 503 || attempt === maxAttempts) break;

      console.log(`Gemini overloaded (503), retrying attempt ${attempt + 1}/${maxAttempts}...`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded from Gemini API");
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402 || response.status === 403) {
        console.error("Gemini API payment/quota issue:", response.status);
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },

        });
      }
      if (response.status === 503) {
        console.error("Gemini API still overloaded after retries");
        return new Response(JSON.stringify({ error: "Our AI assistant is experiencing high demand right now. Please try again in a moment." }), {
          status: 503,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!response.body) {
      throw new Error("No response body from Gemini API");
    }

    // Gemini's SSE chunks look like:
    //   data: {"candidates":[{"content":{"parts":[{"text":"..."}]}}]}
    // The frontend expects OpenAI-compatible chunks:
    //   data: {"choices":[{"delta":{"content":"..."}}]}
    // Translate one format to the other as the stream flows through, so the
    // client (ChatBot.tsx) needs no changes at all.
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    let buffer = "";

    const transformStream = new TransformStream({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (!jsonStr) continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (typeof text === "string" && text.length > 0) {
              const openAiChunk = { choices: [{ delta: { content: text } }] };
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(openAiChunk)}\n\n`));
            }
          } catch (_err) {
            // Skip malformed/partial JSON lines rather than failing the stream
          }
        }
      },
      flush(controller) {
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      },
    });

    return new Response(response.body.pipeThrough(transformStream), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    // Log detailed error server-side only
    console.error("Chat error:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    
    // Return generic message to client
    return new Response(
      JSON.stringify({ error: "Unable to process your request. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
