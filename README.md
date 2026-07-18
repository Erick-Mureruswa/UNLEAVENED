# UNLEAVENED Co.

> Authenticity cannot be manufactured.

The official website for UNLEAVENED Co., a premium minimalist streetwear label.
Built as a digital fashion publication that happens to sell clothing.

## Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **Framer Motion** (slow, restrained reveals only)

## Typography

| Role | Spec font | Implemented with (Google Fonts) |
| --- | --- | --- |
| Headlines / wordmark | Neue Haas Grotesk | Archivo |
| Editorial serif | Canela | Cormorant Garamond |
| Body | Inter | Inter |
| Product codes | IBM Plex Mono | IBM Plex Mono |

To use the licensed Neue Haas Grotesk / Söhne / Canela files later, swap the
`next/font/google` imports in `app/layout.tsx` for `next/font/local` and keep
the same CSS variables.

## Structure

```
app/                 Routes (home, collection, journal, about, studio, archive)
components/
  layout/            Header, Footer, IntroLoader
  editorial/         Reveal, SectionHeading
  sections/          Homepage sections
  store/             ProductCard
lib/                 products.ts, journal.ts, site.ts (data + config)
public/images/       Product photography
```

Product and journal content live in `lib/products.ts` and `lib/journal.ts`,
structured to migrate cleanly to Sanity CMS later.

## Development

```bash
npm install
npm run dev
```

## Supabase (product catalog)

The catalog is served from Supabase when configured, and falls back to the
local data in `lib/products.ts` when it is not, so the site always works.

1. Create a project at [supabase.com](https://supabase.com).
2. Open SQL Editor, paste the contents of `supabase/setup.sql`, and run it.
   This creates the `products` table (public read-only via RLS) and seeds the
   six FW26 garments.
3. Copy `.env.example` to `.env.local` and fill in the project URL and anon
   key from Project Settings > API.
4. Restart the dev server.

Products edited in the Supabase table appear on the deployed site within
10 minutes (`revalidate = 600`).

## WhatsApp checkout

The cart checkout opens WhatsApp with the order pre-written. Set the number
in `.env.local` (international format, no plus sign or spaces):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=263771234567
```

Without it, a placeholder number from `lib/site.ts` is used. Replace it
before launch.

## Principles

Luxury is restraint. Whitespace is a design element. Every animation is
600–1200ms on `cubic-bezier(.22,1,.36,1)`. If a UI element doesn't improve
clarity, remove it.

Remain Unaltered.
