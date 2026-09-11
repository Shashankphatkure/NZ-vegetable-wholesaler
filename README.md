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

## SEO / AEO / GEO

Implements Phase 1–3 of the SEO action plan (Aug 2026 audit):

- **Canonical domain**: `siteConfig.url` is `https://www.thevegie.co.nz`.
  `next.config.ts` 308-redirects the `*.vercel.app` host and the bare apex
  to `www`, and Vercel preview deployments are `noindex`.
- **Per-page metadata**: every route calls `buildMetadata()` in
  `src/lib/seo.ts` → self-referencing canonical, OG/Twitter tags, keywords.
- **Structured data** (`src/lib/schema.ts`, rendered via `<JsonLd/>`):
  LocalBusiness/Organization + WebSite sitewide; Product on every product
  page; ItemList on shop/category/blog indexes; BreadcrumbList everywhere;
  FAQPage on /faq, home, shop, services, product and blog pages; BlogPosting
  on articles; Service on /services.
- **Server-rendered catalogue**: `/shop` and `/shop/category/[category]`
  render the full product grid in HTML (the old `?category=` client filter
  was invisible to crawlers and is redirected).
- **Rich product pages**: origin, season, storage and chef uses live in
  `src/lib/data/product-details.ts`, keyed by product slug.
- **Blog**: articles in `src/lib/data/posts.ts` as structured blocks; each
  opens with a quotable `keyTakeaway`. Add a post → it appears on /blog,
  the home page and the sitemap automatically.
- **FAQ**: `src/lib/data/faqs.ts` — direct, self-contained answers.
- **Sitemap**: stable `lastModified` (bump `SITE_UPDATED` in
  `src/app/sitemap.ts` on site-wide content changes).

Still manual (outside the codebase): verify the domain in Google Search
Console and submit `/sitemap.xml`; claim the Google Business Profile
("Wholesale Vegetable Supplier", Pukekohe); collect Google reviews; get
listed in NZ food-service supplier directories.

## Deploying

This is a static-friendly Next.js app — Vercel is the easiest target
(`vercel deploy`), but any Node.js host works.
