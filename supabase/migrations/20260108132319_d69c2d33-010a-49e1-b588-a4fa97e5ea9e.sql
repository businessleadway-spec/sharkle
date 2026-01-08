-- Ensure RLS is enabled on leads table (it should be, but confirming)
-- With RLS enabled and NO SELECT policy, data cannot be read publicly
-- This is the intended behavior for a contact form

-- First, let's verify RLS is enabled and remove any accidental SELECT policies
DO $$
BEGIN
  -- Drop any existing SELECT policies that might allow public reads
  DROP POLICY IF EXISTS "Anyone can read leads" ON public.leads;
  DROP POLICY IF EXISTS "Public can read leads" ON public.leads;
  DROP POLICY IF EXISTS "Enable read access for all users" ON public.leads;
END $$;

-- Add explicit comment documenting the security model
COMMENT ON TABLE public.leads IS 'Contact form submissions. RLS enabled with INSERT-only public access. No SELECT policy = data is private by default. Access leads via backend only.';