// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://techpivot.in";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().split("T")[0];

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/contact", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/careers", changefreq: "weekly", priority: "0.7", lastmod: today },
  { path: "/technologies", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/capabilities", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/capabilities/advanced-defense-intelligence", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/capabilities/algorithmic-infrastructure-optimization", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/capabilities/custom-algorithm-development", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/capabilities/cybersecurity-advisory-services", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/capabilities/sales-business-development", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/faq", changefreq: "monthly", priority: "0.6", lastmod: today },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: today },
  { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3", lastmod: today },
  { path: "/blogs", changefreq: "weekly", priority: "0.8", lastmod: today },
  { path: "/products/concept", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/products/solution", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/products/custom-dev", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/agentic-ai", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/generative-ai", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/saas-platform", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/web-development", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/mobile-app", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/cloud-security", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/custom-software", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/staff-augmentation", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/iot", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/services/consultancy", changefreq: "monthly", priority: "0.8", lastmod: today },
];

async function fetchBlogEntries(): Promise<SitemapEntry[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn("Skipping blog sitemap entries — Supabase env vars not set.");
    return [];
  }
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data, error } = await supabase
      .from("blogs")
      .select("slug, publish_date, updated_at")
      .eq("status", "published")
      .lte("publish_date", new Date().toISOString());
    if (error || !data) {
      console.warn("Could not fetch blogs for sitemap:", error?.message);
      return [];
    }
    return data
      .filter((b: any) => b.slug)
      .map((b: any) => ({
        path: `/blogs/${b.slug}`,
        lastmod: (b.updated_at || b.publish_date || today).split("T")[0],
        changefreq: "monthly" as const,
        priority: "0.7",
      }));
  } catch (e) {
    console.warn("Blog fetch failed:", (e as Error).message);
    return [];
  }
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const blogEntries = await fetchBlogEntries();
  const entries = [...staticEntries, ...blogEntries];
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
  console.log(`sitemap.xml written (${entries.length} entries)`);
})();
