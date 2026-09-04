-- Blog analytics: records one row per blog page view
create table if not exists public.blog_analytics (
  id uuid primary key default gen_random_uuid(),
  blog_id uuid references public.blogs(id) on delete cascade,
  blog_slug text not null,
  viewed_at timestamptz not null default now(),

  -- Location (best-effort, from IP geolocation lookup done client-side)
  country text,
  region text,
  city text,

  -- Source / campaign tracking
  utm_source text,       -- e.g. linkedin, whatsapp, instagram
  utm_medium text,
  utm_campaign text,
  referrer text,          -- raw document.referrer if no UTM present

  -- Device
  device_type text,       -- mobile | tablet | desktop
  user_agent text
);

create index if not exists blog_analytics_blog_slug_idx on public.blog_analytics (blog_slug);
create index if not exists blog_analytics_viewed_at_idx on public.blog_analytics (viewed_at);
create index if not exists blog_analytics_utm_source_idx on public.blog_analytics (utm_source);

alter table public.blog_analytics enable row level security;

-- Anyone (including anonymous blog readers) can insert a view record
create policy "Anyone can log a blog view"
  on public.blog_analytics
  for insert
  to anon, authenticated
  with check (true);

-- Only authenticated admin users can read analytics
create policy "Authenticated users can read blog analytics"
  on public.blog_analytics
  for select
  to authenticated
  using (true);

grant insert on public.blog_analytics to anon;
grant select, insert on public.blog_analytics to authenticated;
grant all on public.blog_analytics to service_role;
