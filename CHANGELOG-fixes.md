# Production Readiness Fixes — Summary

All items below were verified against the real repo source and confirmed with a
passing `npm run build`.

## SEO & Branding
- Removed dead `cdn.gpteng.co` preconnect from `index.html`
- Replaced Lovable/gpt-engineer-hosted `og:image`/`twitter:image` with self-hosted `techpivot.in/favicon.png`
- Replaced leaked Lovable system-prompt `README.md` with real project documentation
- Added `/portfolio` and `/leadership` to `scripts/generate-sitemap.ts` and regenerated `public/sitemap.xml` (30 URLs, all real routes covered)
- Cleaned up stray `TODO:` scaffold comments in `index.html`

## Performance
- `favicon.png`: 1.3MB → split into `favicon-32.png` (1.1KB), `apple-touch-icon.png` (9KB), and an optimized 512px `favicon.png` (59KB)
- `logo-light.webp` / `logo-dark.webp`: were 1920×675px PNGs (~200KB each) displayed at 200×70px — resized to 500px wide + WebP (~18KB each, 91% smaller), loaded on every page via Header
- 27 hero/background/team JPEGs converted to WebP (~39% smaller overall)
- 7 Portfolio screenshots converted to WebP (~55% smaller overall)
- Added `<link rel="preload" as="image" fetchPriority="high">` for the homepage hero, Careers hero, and every page using `ServicePageLayout` with a background image (21+ pages) — improves LCP
- `ChatBot` (741 lines) changed from eager to lazy-loaded with its own Suspense boundary
- Added vendor chunk splitting (`react-vendor`, `animation-vendor`) in `vite.config.ts` for better long-term caching
- Added `public/_headers` for Netlify: 1-year immutable cache on hashed assets, sane caching on images/sitemap/robots

## Mobile Responsiveness
- **Homepage hero heading was clipped on mobile**: `AnimatedHeadingLine` forced `whitespace-nowrap` on every line at all screen sizes, causing horizontal overflow at mobile font sizes. Now wraps normally below `md:`.
- **CTA button overlapped WhatsApp/Chat buttons on mobile**: hero section forced `min-h-[102vh]` with vertical centering at all screen sizes. Once the heading correctly wraps to multiple lines, that centering pushed the CTA into the same screen area as the fixed-position floating buttons. Now only applies full-height centering from `md:` up; on mobile the hero sizes naturally to its content.
- **Portfolio page had excessive dead space** between section headings and the first card below them: `mb-16` (64px) was flat across all screen sizes, stacking on top of an already 2–3 line wrapped heading/description on mobile. Changed to `mb-10 md:mb-16`, and tightened section padding to `py-14 md:py-20 lg:py-28`.
- Audited every other page for the same two bug patterns (forced nowrap headlines, forced-height hero centering) — no other instances found.

## Known limitation — not fixable in code
- A Netlify-injected `<meta>` tag (AI-deploy badge, `utm_campaign=ai-legible`) appears on the live site but is not present anywhere in this source. It's added by Netlify's platform for sites created via their AI/prompt flow — check your Netlify site settings if you want it removed.

## Chatbot backend migrated off Lovable's AI gateway
`supabase/functions/chat/index.ts` previously routed every TechBot message through `ai.gateway.lovable.dev` using a `LOVABLE_API_KEY` secret — a hidden dependency on Lovable's platform and billing staying active. It now calls the Gemini API directly (`generativelanguage.googleapis.com`) using a `GEMINI_API_KEY` secret you control. Gemini's native streaming format is translated to the OpenAI-compatible format on the server, so `ChatBot.tsx` required zero changes.

**Action required before this works in production:** set a `GEMINI_API_KEY` Supabase Edge Function secret (get one at aistudio.google.com/apikey), then redeploy the function with `supabase functions deploy chat`. See `README.md` for details.

## Verified
- `npm install && npm run build` completes with zero errors (validated multiple times after each round of changes)
- No `techpivot.com`, "Lovable", or `gpteng` references remain anywhere in `src/`, `public/`, `index.html`, or `README.md`
- All canonical URLs consistently use `https://techpivot.in`

## Job application flow added
`Careers.tsx`'s "Apply Now" buttons previously redirected to the generic Contact form with no job-specific context. This is now a full application flow:

- **`src/data/jobs.ts`** — single source of truth for all 5 job postings, with full JD content (summary, responsibilities, requirements, nice-to-haves). Both the Careers list and detail pages read from this file.
- **`/careers/:slug`** (`src/pages/JobDetail.tsx`) — a dedicated page per role showing the full JD plus an application form (name, email, phone, cover note, required resume upload — PDF/Word, max 10MB). Invalid slugs redirect back to `/careers`.
- **`supabase/functions/send-job-application/index.ts`** — new Edge Function, modeled on the existing `send-contact-email` pattern (same SMTP setup, rate limiting, HTML-escaping). On submit, sends two emails:
  1. To `info@techpivot.in` — subject `New Job Application: {role} — {name}`, with the resume attached
  2. To the applicant — confirmation that their application was received
- All 5 job detail pages were added to `scripts/generate-sitemap.ts` and `public/sitemap.xml`.
- Reuses the existing `GMAIL_APP_PASSWORD` secret — no new secret needed for this feature.

**Note:** I used `info@techpivot.in` (matching every other email reference already in the codebase) rather than `techpivot.com` as mentioned in the request — flagged this at the time in case `.com` was intentional.
