import { supabase } from "@/integrations/supabase/client";

/**
 * Known UTM source aliases -> normalized source label used in analytics.
 * Add more mappings here as new campaign links are created.
 */
const SOURCE_ALIASES: Record<string, string> = {
  linkedin: "LinkedIn",
  li: "LinkedIn",
  whatsapp: "WhatsApp",
  wa: "WhatsApp",
  instagram: "Instagram",
  ig: "Instagram",
  facebook: "Facebook",
  fb: "Facebook",
  twitter: "Twitter/X",
  x: "Twitter/X",
  google: "Google",
  newsletter: "Newsletter",
  email: "Email",
};

function normalizeSource(raw: string | null): string {
  if (!raw) return "";
  const key = raw.trim().toLowerCase();
  return SOURCE_ALIASES[key] || raw;
}

function detectDeviceType(): string {
  const ua = navigator.userAgent;
  if (/tablet|ipad/i.test(ua)) return "tablet";
  if (/mobile|iphone|android/i.test(ua)) return "mobile";
  return "desktop";
}

function sourceFromReferrer(referrer: string): string {
  if (!referrer) return "";
  try {
    const host = new URL(referrer).hostname.replace("www.", "");
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("whatsapp") || host.includes("wa.me")) return "WhatsApp";
    if (host.includes("instagram")) return "Instagram";
    if (host.includes("facebook")) return "Facebook";
    if (host.includes("twitter") || host.includes("x.com")) return "Twitter/X";
    if (host.includes("google")) return "Google";
    return host;
  } catch {
    return "";
  }
}

interface GeoResult {
  country?: string;
  region?: string;
  city?: string;
}

async function lookupGeo(): Promise<GeoResult> {
  try {
    // Free, no-key IP geolocation lookup. Best-effort only — failures are silent.
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return {};
    const data = await res.json();
    return {
      country: data.country_name || undefined,
      region: data.region || undefined,
      city: data.city || undefined,
    };
  } catch {
    return {};
  }
}

/**
 * Logs a single blog page view to Supabase, capturing UTM source,
 * referrer-derived source, approximate location, and device type.
 * Fails silently — analytics should never break the page for readers.
 */
export async function trackBlogView(blogId: string, blogSlug: string): Promise<void> {
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = normalizeSource(params.get("utm_source"));
    const utmMedium = params.get("utm_medium") || undefined;
    const utmCampaign = params.get("utm_campaign") || undefined;
    const referrer = document.referrer || "";

    const resolvedSource = utmSource || sourceFromReferrer(referrer) || "Direct";
    const geo = await lookupGeo();

    await supabase.from("blog_analytics").insert({
      blog_id: blogId,
      blog_slug: blogSlug,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      utm_source: resolvedSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      referrer: referrer || null,
      device_type: detectDeviceType(),
      user_agent: navigator.userAgent,
    });
  } catch {
    // Analytics must never break the reading experience.
  }
}
