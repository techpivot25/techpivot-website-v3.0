
-- 1. Create private schema (not exposed by PostgREST)
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

-- 2. Create hardened has_role in private schema
-- WARNING: SECURITY DEFINER. Any change here bypasses RLS. Keep search_path fixed and no dynamic SQL.
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 3. Recreate policies on public.blogs to use private.has_role
DROP POLICY IF EXISTS "Admins can create blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admins can delete blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admins can update blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admins can view all blogs" ON public.blogs;

CREATE POLICY "Admins can create blogs" ON public.blogs
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete blogs" ON public.blogs
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update blogs" ON public.blogs
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view all blogs" ON public.blogs
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role));

-- 4. Recreate policies on public.user_roles
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- 5. Recreate storage policies for blog-media using private.has_role
DROP POLICY IF EXISTS "Admins can delete blog media" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update blog media" ON storage.objects;
DROP POLICY IF EXISTS "Admins can upload blog media" ON storage.objects;

CREATE POLICY "Admins can upload blog media" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-media' AND private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update blog media" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-media' AND private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete blog media" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'blog-media' AND private.has_role(auth.uid(), 'admin'::app_role));

-- 6. Fix public bucket listing: remove broad SELECT policy.
-- Bucket remains public so direct object URLs still work via the CDN,
-- but clients can no longer enumerate the bucket contents.
DROP POLICY IF EXISTS "Anyone can view blog media" ON storage.objects;

-- 7. Drop the old public.has_role now that nothing references it
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
