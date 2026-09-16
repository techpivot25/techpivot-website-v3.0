# TechPivot Website

Official marketing website for **TechPivot Technologies & Consulting** — built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui, with Supabase powering the blog backend and admin dashboard.

## Tech Stack

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, Radix primitives
- **Animation:** Framer Motion, GSAP
- **Backend:** Supabase (blog content, auth, admin dashboard)
- **i18n:** English, French, Spanish (`src/i18n`)
- **Deployment:** Netlify

## Development

Requires Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone git@github.com:techpivot25/techpivot-website-v3.0.git
cd techpivot-website-v3.0
npm i
npm run dev
```

## Build

```sh
npm run build
```

The `prebuild`/`predev` hooks automatically regenerate `public/sitemap.xml` via `scripts/generate-sitemap.ts`, pulling in static routes plus any published blog posts from Supabase.

## Environment Variables

Set these for local development and in your deployment environment:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY` (or `VITE_SUPABASE_ANON_KEY`)

Set this as a **Supabase Edge Function secret** (Project Settings → Edge Functions → Secrets), not a `VITE_` variable — it's used server-side only, in `supabase/functions/chat/index.ts`:

- `GEMINI_API_KEY` — a Google AI Studio / Gemini API key, powers the TechBot chat widget. Get one at [aistudio.google.com/apikey](https://aistudio.google.com/apikey). Without this set, the chatbot returns "Service temporarily unavailable."
- `GMAIL_APP_PASSWORD` — a Gmail App Password for `techpivot25@gmail.com`, used by `send-contact-email` and `send-job-application` to send notification/confirmation emails via SMTP.

## Project Structure

- `src/pages/` — top-level routed pages
- `src/pages/services/`, `src/pages/capabilities/`, `src/pages/products/` — service/capability/product sub-pages, most using the shared `ServicePageLayout`
- `src/pages/admin/` — Supabase-authenticated blog admin (login, dashboard, editor, analytics)
- `src/data/jobs.ts` — single source of truth for job postings (full JD content), used by both `Careers.tsx` and `JobDetail.tsx`. Add a new posting here and it automatically appears on the Careers list, gets its own `/careers/:slug` page, and is added to the sitemap.
- `src/components/` — shared UI (Header, Footer, Hero, ChatBot, etc.) and `src/components/ui/` shadcn primitives
- `src/assets/` — images (WebP for photos/backgrounds, PNG only where transparency at small size is needed)
- `public/` — static assets, `robots.txt`, `sitemap.xml`, `_headers` (Netlify cache-control)
- `scripts/generate-sitemap.ts` — sitemap generator, run pre-dev and pre-build
- `supabase/` — database migrations and edge functions. After editing `supabase/functions/chat/index.ts`, redeploy it with `supabase functions deploy chat`.

## Notes for contributors

- Several pages (`Portfolio1.tsx`–`Portfolio4.tsx`, `Index1.tsx`, `Header1.tsx`, `Footer1.tsx`, `App1.tsx`) are earlier draft variants kept for reference. Only `Portfolio.tsx`, `Index.tsx`, `Header.tsx`, `Footer.tsx`, and `App.tsx` are actually routed — check `src/App.tsx` before assuming a `*1`/`*2`/etc. file is live.
- Hero/background images are WebP; keep new large photographic assets in WebP too. Logos (`logo-light`/`logo-dark`) are capped at 500px wide since they only render at ~200px — don't reintroduce full-resolution source files.
