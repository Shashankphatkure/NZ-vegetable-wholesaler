# Fresh Produce Supplier — Website (V1)

Marketing site + product catalogue + enquiry experience for the Pukekohe-based
fresh-produce supply business. No backend, accounts, cart or payments in V1 —
enquiries are sent via `mailto:` links. Built with Next.js (App Router),
TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/lib/site-config.ts` — business name, contact details, nav links. Single
  source of truth for anything shown in the header/footer/contact page.
- `src/lib/data/products.ts` / `src/lib/data/categories.ts` — the product
  catalogue. Shaped so a future Supabase integration can replace these
  static arrays without touching any component.
- `src/lib/images.ts` — every photo on the site, keyed by name (`heroHome`,
  `catPotatoes`, `prodAgriaPotato`, etc). Swap the `url` field to replace a
  photo; leave it blank and the site falls back to a branded "Photography
  pending" placeholder instead of a broken image.
- `src/components/ui/` — design-system primitives (Button, Container,
  Eyebrow, SectionHeading, FadeUp, ProduceImage).
- `src/components/{home,about,services,shop,contact}` and friends — page
  sections, grouped by the page that uses them; `shared/` holds cross-page
  pieces (PageHero, CtaBanner).

## Still needs client input before launch

- Official trading/brand name and logo — currently `[Business Name]` in
  `siteConfig.name`, used everywhere via that one constant.
- Real photography — see `src/lib/images.ts`.
- `siteConfig.url` is a placeholder (`https://example.com`) — update once a
  domain is chosen (used for metadata, sitemap and robots.txt).

## Deploying

This is a static-friendly Next.js app — Vercel is the easiest target
(`vercel deploy`), but any Node.js host works.
