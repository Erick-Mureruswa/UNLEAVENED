-- UNLEAVENED Co. backend schema
-- Applied to the live project as migrations (create_products, create_articles,
-- create_orders_and_subscribers). Kept here so a fresh project can be
-- bootstrapped from one file. Safe to re-run: DDL is idempotent and seed
-- inserts are skipped on conflict.

create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  slug text unique not null,
  name text not null,
  colorway text not null,
  fit text not null,
  fabric text not null,
  weight text not null,
  finish text not null,
  price integer not null check (price >= 0),
  sizes text[] not null default array[]::text[],
  images jsonb not null default '[]'::jsonb,
  story text not null default '',
  construction text[] not null default array[]::text[],
  care text[] not null default array[]::text[],
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

-- Public catalog: anyone may read, nobody may write through the anon key.
alter table public.products enable row level security;

drop policy if exists "Public read access" on public.products;
create policy "Public read access"
  on public.products for select
  using (true);

-- Seed: FW26 Foundation Capsule

insert into public.products
  (code, slug, name, colorway, fit, fabric, weight, finish, price, sizes, images, story, construction, care, featured)
values
(
  'UC-001',
  'uc-001-heavyweight-tee-bone',
  'Heavyweight Tee',
  'Bone',
  'Boxy. Dropped shoulder.',
  '100% Combed Cotton',
  '300 GSM',
  'Garment Washed',
  70,
  array['XS','S','M','L','XL'],
  '[{"src":"/images/products/uc-001-bone-front.png","alt":"UC-001 Heavyweight Tee in Bone, hung against cast concrete architecture"}]'::jsonb,
  'The foundation stone. A tee built to disappear into your wardrobe and remain there for years: heavyweight cotton, a silhouette that improves through wear, and no branding beyond the neck. Nothing added. Nothing exaggerated.',
  array['Cover-stitched collar and hem','Wide ribbed collar','Side-seamed body','Neck print only, no chest logo','Small woven hem tag'],
  array['Machine wash cold, inside out','Hang dry in shade','Do not bleach','Warm iron on reverse if needed'],
  true
),
(
  'UC-002',
  'uc-002-doorway-tee-olive-moss',
  'Doorway Tee',
  'Olive Moss',
  'Boxy. Dropped shoulder.',
  '100% Combed Cotton',
  '300 GSM',
  'Stone Wash Texture',
  85,
  array['XS','S','M','L','XL'],
  '[{"src":"/images/products/uc-002-olive-doorway.png","alt":"UC-002 Doorway Tee in Olive Moss with architectural doorway back print"}]'::jsonb,
  'The doorway is our only symbol: an unbroken threshold, drawn in blueprint. It stands for choosing integrity over imitation. Printed tonal on stone-washed olive, framed by the values it was built on: craftsmanship, discipline, longevity, quiet confidence.',
  array['Water-based back print in Bone ink','Architectural blueprint artwork','Cover-stitched collar and hem','Stone-washed for depth of tone','Neck label only'],
  array['Machine wash cold, inside out','Hang dry in shade','Do not tumble dry','Do not iron directly on print'],
  true
),
(
  'UC-003',
  'uc-003-doorway-tee-black',
  'Doorway Tee',
  'Jet Black',
  'Boxy. Dropped shoulder.',
  '100% Combed Cotton',
  '300 GSM',
  'Garment Washed',
  85,
  array['XS','S','M','L','XL'],
  '[{"src":"/images/products/uc-003-black-doorway.png","alt":"UC-003 Doorway Tee in Jet Black with monochrome doorway front print"}]'::jsonb,
  'The threshold rendered in its purest contrast: Bone ink on Jet Black. A stone-textured doorway framed by interlocked monograms, carrying the manifesto in full: authenticity cannot be manufactured. Remain unaltered.',
  array['Front print in Bone ink with stone texture','Manifesto typeset in grotesk and mono','Cover-stitched collar and hem','Garment washed for a soft, broken-in hand','Woven hem tag'],
  array['Machine wash cold, inside out','Hang dry in shade','Do not tumble dry','Do not iron directly on print'],
  false
),
(
  'UC-004',
  'uc-004-doorway-tee-charcoal',
  'Doorway Tee',
  'Charcoal',
  'Boxy. Dropped shoulder.',
  'Heavyweight Cotton Fleece',
  '300 GSM',
  'Stonewashed',
  85,
  array['XS','S','M','L','XL'],
  '[{"src":"/images/products/uc-004-charcoal-doorway.png","alt":"UC-004 Doorway Tee in Charcoal with illustrated ruin doorway back print"}]'::jsonb,
  'A doorway standing inside a structure still being built. Illustrated in muted stone and burnished copper, the rare accent used sparingly. What endures is never accidental.',
  array['Back print with burnished copper accents','Illustrated architectural artwork','Premium ribbing at collar and cuff','Stonewashed texture','Tonal sleeve embroidery'],
  array['Machine wash cold, inside out','Hang dry in shade','Do not tumble dry','Do not iron directly on print'],
  false
),
(
  'UC-005',
  'uc-005-illustrated-tee-black',
  'Illustrated Tee',
  'Jet Black',
  'Oversize. Dropped shoulder.',
  '100% Combed Cotton',
  '300 GSM',
  'Garment Washed',
  95,
  array['XS','S','M','L','XL'],
  '[{"src":"/images/products/uc-005-black-illustrated.png","alt":"UC-005 Illustrated Tee in Jet Black with muted anime-style back illustration"},{"src":"/images/products/uc-005-black-illustrated-alt.png","alt":"UC-005 Illustrated Tee in Jet Black, alternate view with stencil doorway details"}]'::jsonb,
  'A figure standing firm inside an unfinished structure, drawn in a muted palette and printed heavy on black. The loudest piece we make, and it still refuses to shout.',
  array['Full back illustration, muted palette','Water-based inks, soft hand feel','Cover-stitched collar and hem','Oversize blocked silhouette','Woven hem tag'],
  array['Machine wash cold, inside out','Hang dry in shade','Do not tumble dry','Do not iron directly on print'],
  true
),
(
  'UC-006',
  'uc-006-illustrated-tee-charcoal',
  'Illustrated Tee',
  'Charcoal',
  'Oversize. Dropped shoulder.',
  'Heavyweight Cotton Fleece',
  '300 GSM',
  'Garment Dyed',
  95,
  array['XS','S','M','L','XL'],
  '[{"src":"/images/products/uc-006-charcoal-illustrated.png","alt":"UC-006 Illustrated Tee in Charcoal with muted anime-style back illustration"}]'::jsonb,
  'The same figure, the same threshold, washed in charcoal. Garment dyed so no two pieces age identically. Designed to become part of your life rather than the center of it.',
  array['Full back illustration, muted palette','Garment dyed after construction','Premium ribbing at collar and cuff','Heavyweight fleece hand','Doorway hem tag'],
  array['Machine wash cold, inside out','Hang dry in shade','Expect gentle tonal ageing','Do not iron directly on print'],
  false
)
on conflict (code) do nothing;

-- Journal articles: public may read published entries only.

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null check (category in ('Stories','Materials','Architecture','Philosophy','People','Craftsmanship')),
  date date not null,
  excerpt text not null,
  cover jsonb not null,
  body text[] not null default array[]::text[],
  published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.articles enable row level security;

drop policy if exists "Public read access" on public.articles;
create policy "Public read access"
  on public.articles for select
  using (published);

-- Order enquiries: written when a customer opens WhatsApp checkout.
-- Anon key may insert only; reading requires the service role (dashboard).

create table if not exists public.order_enquiries (
  id uuid primary key default gen_random_uuid(),
  items jsonb not null check (
    jsonb_typeof(items) = 'array'
    and jsonb_array_length(items) between 1 and 50
  ),
  subtotal integer not null check (subtotal >= 0 and subtotal <= 1000000),
  created_at timestamptz not null default now()
);

alter table public.order_enquiries enable row level security;

drop policy if exists "Anyone can create an enquiry" on public.order_enquiries;
create policy "Anyone can create an enquiry"
  on public.order_enquiries for insert
  with check (true);

-- Newsletter subscribers. Anon key may insert only.

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null check (
    email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    and char_length(email) <= 254
  ),
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "Anyone can subscribe" on public.newsletter_subscribers;
create policy "Anyone can subscribe"
  on public.newsletter_subscribers for insert
  with check (true);
