import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { format, subDays, parseISO, startOfDay } from "date-fns";
import { LayoutDashboard, Eye, Globe2, MapPin, Smartphone, Loader2, ArrowLeft } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

interface AnalyticsRow {
  id: string;
  blog_slug: string;
  viewed_at: string;
  country: string | null;
  region: string | null;
  city: string | null;
  utm_source: string | null;
  referrer: string | null;
  device_type: string | null;
}

interface BlogTitleMap {
  [slug: string]: string;
}

const RANGE_OPTIONS = [
  { label: "Last 7 days", value: "7" },
  { label: "Last 30 days", value: "30" },
  { label: "Last 90 days", value: "90" },
  { label: "All time", value: "all" },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444", "#06b6d4", "#ec4899"];

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [rows, setRows] = useState<AnalyticsRow[]>([]);
  const [blogTitles, setBlogTitles] = useState<BlogTitleMap>({});
  const [range, setRange] = useState("30");
  const [blogFilter, setBlogFilter] = useState("all");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authorized) fetchAnalytics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized, range]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }

    const { data: roleData, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (error || !roleData) {
      await supabase.auth.signOut();
      navigate("/admin/login");
      return;
    }

    setAuthorized(true);
  };

  const fetchAnalytics = async () => {
    setLoading(true);

    let query = supabase
      .from("blog_analytics")
      .select("id, blog_slug, viewed_at, country, region, city, utm_source, referrer, device_type")
      .order("viewed_at", { ascending: false });

    if (range !== "all") {
      const since = subDays(new Date(), parseInt(range, 10)).toISOString();
      query = query.gte("viewed_at", since);
    }

    const { data, error } = await query;

    if (!error && data) {
      setRows(data as AnalyticsRow[]);

      const slugs = Array.from(new Set(data.map((r) => r.blog_slug)));
      if (slugs.length > 0) {
        const { data: blogs } = await supabase
          .from("blogs")
          .select("slug, title")
          .in("slug", slugs);
        if (blogs) {
          const map: BlogTitleMap = {};
          blogs.forEach((b) => { map[b.slug] = b.title; });
          setBlogTitles(map);
        }
      }
    }
    setLoading(false);
  };

  const filteredRows = useMemo(
    () => (blogFilter === "all" ? rows : rows.filter((r) => r.blog_slug === blogFilter)),
    [rows, blogFilter]
  );

  const totalViews = filteredRows.length;

  const viewsByBlog = useMemo(() => {
    const counts: Record<string, number> = {};
    rows.forEach((r) => {
      counts[r.blog_slug] = (counts[r.blog_slug] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([slug, count]) => ({ slug, title: blogTitles[slug] || slug, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [rows, blogTitles]);

  const viewsOverTime = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredRows.forEach((r) => {
      const day = format(startOfDay(parseISO(r.viewed_at)), "MMM d");
      counts[day] = (counts[day] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([date, count]) => ({ date, count }))
      .reverse();
  }, [filteredRows]);

  const bySource = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredRows.forEach((r) => {
      const src = r.utm_source || "Direct";
      counts[src] = (counts[src] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [filteredRows]);

  const byCity = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredRows.forEach((r) => {
      const label = [r.city, r.region].filter(Boolean).join(", ") || "Unknown";
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [filteredRows]);

  const byCountry = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredRows.forEach((r) => {
      const label = r.country || "Unknown";
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  }, [filteredRows]);

  const byDevice = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredRows.forEach((r) => {
      const label = r.device_type || "unknown";
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredRows]);

  if (!authorized || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog Analytics | TechPivot Admin</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoDark} alt="TechPivot" className="h-8" />
              <span className="text-sm text-muted-foreground">Blog Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="container px-6 py-8 space-y-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <Select value={range} onValueChange={setRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {RANGE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={blogFilter} onValueChange={setBlogFilter}>
              <SelectTrigger className="w-[260px]">
                <SelectValue placeholder="All blogs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All blogs</SelectItem>
                {Object.entries(blogTitles).map(([slug, title]) => (
                  <SelectItem key={slug} value={slug}>{title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* KPI cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <Eye className="w-4 h-4" /> Total Views
              </div>
              <p className="text-3xl font-bold text-foreground">{totalViews}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <Globe2 className="w-4 h-4" /> Countries Reached
              </div>
              <p className="text-3xl font-bold text-foreground">{byCountry.length}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin className="w-4 h-4" /> Cities Reached
              </div>
              <p className="text-3xl font-bold text-foreground">{byCity.length}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <LayoutDashboard className="w-4 h-4" /> Top Source
              </div>
              <p className="text-3xl font-bold text-foreground">{bySource[0]?.name || "—"}</p>
            </div>
          </div>

          {/* Views over time */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Views Over Time</h3>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={viewsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top blogs */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Most Viewed Blogs</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={viewsByBlog} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" fontSize={12} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
                  <YAxis
                    type="category"
                    dataKey="title"
                    width={160}
                    fontSize={11}
                    stroke="hsl(var(--muted-foreground))"
                    tickFormatter={(v: string) => (v.length > 22 ? v.slice(0, 22) + "…" : v)}
                  />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                  <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Traffic source */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Traffic by Source</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={bySource} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={(e) => `${e.name} (${e.value})`}>
                    {bySource.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground mt-2">
                Sourced from UTM parameters (utm_source) on shared links, falling back to referrer domain, then "Direct".
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top cities/regions */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Top Cities / Regions</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={byCity} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" fontSize={12} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
                  <YAxis type="category" dataKey="name" width={140} fontSize={11} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                  <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground mt-2">
                Approximate location based on visitor IP address at time of view.
              </p>
            </div>

            {/* Device breakdown */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Device Breakdown
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={byDevice} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={(e) => `${e.name} (${e.value})`}>
                    {byDevice.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {totalViews === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              No blog views recorded yet for this range. Views will start appearing here once readers visit your blog posts.
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default AdminAnalytics;
