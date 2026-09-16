import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// HTML escape function to prevent template injection attacks
function escapeHtml(text: string): string {
  if (!text) return "";
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Emails are expensive — same limit as contact form

function getClientIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);

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

interface JobApplicationRequest {
  jobTitle: string;
  jobSlug: string;
  department: string;
  name: string;
  email: string;
  phone?: string;
  coverNote?: string;
  fileName?: string;
  fileContent?: string; // Base64 encoded resume
  fileType?: string;
}

async function sendEmail(
  client: SMTPClient,
  to: string,
  subject: string,
  html: string,
  attachment?: { filename: string; content: Uint8Array; contentType: string }
) {
  const emailConfig: any = {
    from: "TechPivot Careers <techpivot25@gmail.com>",
    to,
    subject,
    html,
  };

  if (attachment) {
    emailConfig.attachments = [
      {
        filename: attachment.filename,
        content: attachment.content,
        contentType: attachment.contentType,
      },
    ];
  }

  await client.send(emailConfig);
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const {
      jobTitle,
      jobSlug,
      department,
      name,
      email,
      phone,
      coverNote,
      fileName,
      fileContent,
      fileType,
    }: JobApplicationRequest = await req.json();

    console.log(`Processing job application from IP: ${clientIP}`, {
      jobTitle,
      name,
      email,
      hasResume: !!fileContent,
    });

    // Validate required fields
    if (!name || !name.trim()) {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "A valid email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!jobTitle) {
      return new Response(JSON.stringify({ error: "Job title is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!fileContent || !fileName) {
      return new Response(JSON.stringify({ error: "A resume attachment is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Decode base64 resume
    let attachment: { filename: string; content: Uint8Array; contentType: string };
    try {
      const binaryString = atob(fileContent);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      // 10MB cap, mirrors the frontend check
      if (bytes.length > 10 * 1024 * 1024) {
        return new Response(JSON.stringify({ error: "Resume file is too large (max 10MB)" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      attachment = {
        filename: fileName,
        content: bytes,
        contentType: fileType || "application/octet-stream",
      };
    } catch (e) {
      console.error("Error processing resume attachment:", e);
      return new Response(JSON.stringify({ error: "Could not process resume file" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: "techpivot25@gmail.com",
          password: Deno.env.get("GMAIL_APP_PASSWORD") || "",
        },
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "Not provided";
    const safeJobTitle = escapeHtml(jobTitle);
    const safeDepartment = escapeHtml(department || "Not specified");
    const safeCoverNote = coverNote ? escapeHtml(coverNote) : "";
    const safeFileName = escapeHtml(fileName);

    // ── Email 1: notify the hiring team ────────────────────────────────
    const adminSubject = `New Job Application: ${jobTitle} — ${name}`;
    const adminHtml = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">💼 New Job Application</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Position:</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #007bff; font-weight: bold;">${safeJobTitle}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Department:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safeDepartment}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Applicant:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safeName}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safePhone}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Resume:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">📎 ${safeFileName}</td></tr>
      </table>
      ${
        safeCoverNote
          ? `<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;"><h3 style="margin-top: 0; color: #333;">Note from applicant:</h3><p style="white-space: pre-wrap; line-height: 1.6;">${safeCoverNote}</p></div>`
          : ""
      }
      <p style="margin-top: 30px; color: #666; font-size: 12px;">This application was submitted via the TechPivot careers page.</p>
    </div>`;

    await sendEmail(client, "info@techpivot.in", adminSubject, adminHtml, attachment);
    console.log("Admin notification email sent successfully");

    // ── Email 2: confirm receipt to the applicant ──────────────────────
    const applicantSubject = `We've received your application for ${jobTitle} at TechPivot`;
    const applicantHtml = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #333; margin: 0;">TechPivot Technologies</h1>
        <p style="color: #666; font-size: 14px;">Transforming Ideas into Digital Reality</p>
      </div>
      <h2 style="color: #007bff;">Hello ${safeName}!</h2>
      <p style="color: #333; line-height: 1.8;">Thank you for applying for the <strong>${safeJobTitle}</strong> role at TechPivot. We've received your application and resume.</p>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
        <ul style="color: #555; line-height: 1.8;">
          <li>Our hiring team will review your application</li>
          <li>If it's a good fit, we'll reach out to schedule a conversation</li>
          <li>We review every application, though response times can vary with volume</li>
        </ul>
      </div>
      <p style="color: #333; line-height: 1.8;">In the meantime, feel free to explore more about us at <a href="https://techpivot.in" style="color: #007bff;">techpivot.in</a></p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 14px; margin: 0;">Best regards,<br><strong style="color: #333;">The TechPivot Team</strong></p>
        <p style="color: #999; font-size: 12px; margin-top: 10px;">info@techpivot.in<br>India &bull; USA &bull; Canada &bull; UAE</p>
      </div>
    </div>`;

    await sendEmail(client, email, applicantSubject, applicantHtml);
    console.log("Confirmation email sent to applicant:", email);

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-job-application function:", {
      message: error?.message,
      stack: error?.stack,
      timestamp: new Date().toISOString(),
    });
    return new Response(
      JSON.stringify({
        error: "Unable to submit your application. Please try again later or email your resume directly to info@techpivot.in.",
      }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
