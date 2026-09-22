export type CategorySlug =
  | "potatoes"
  | "onions"
  | "tomatoes"
  | "roots"
  | "greens"
  | "herbs"
  | "other-vegetables";

export interface Category {
  slug: CategorySlug;
  name: string;
  imageKey: string;
  blurb: string;
  /**
   * The single commercial query this page is built to win. Per the Sept 2026
   * SEO audit, exactly one page may claim a given primary keyword — check the
   * area pages and blog posts before reusing one here.
   */
  primaryKeyword: string;
  /** Title tag body. The root layout template appends "| VegieFresh". */
  seoTitle: string;
  /** Page H1 — deliberately not always `name` (e.g. Roots → Root Vegetables). */
  h1: string;
  /** Supporting terms for this page only, primary keyword first. */
  keywords: string[];
  /** Longer SEO intro rendered on the category landing page. */
  intro: string;
  /** Meta description for the category landing page. */
  seoDescription: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  packSizes: string[];
  description: string;
  imageKey: string;
  featured?: boolean;
}

/** Rich, SEO-facing content for a product page — keyed by product slug. */
export interface ProductDetails {
  /** Where the produce is typically grown / sourced from. */
  origin: string;
  /** Plain-language seasonality note for NZ. */
  season: string;
  /** Commercial-kitchen storage guidance. */
  storage: string;
  /** Short chef-facing use cases, one per bullet. */
  chefUses: string[];
  /** Product-specific buyer questions (rendered + FAQPage schema). */
  faqs?: Faq[];
}

export interface Faq {
  question: string;
  answer: string;
}

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export type PostCategory =
  | "Seasonal Guides"
  | "Buying Guides"
  | "Kitchen Practice"
  | "Delivery & Service";

export interface Post {
  slug: string;
  title: string;
  /** Meta description + card summary (<= 160 chars ideally). */
  excerpt: string;
  /** ISO date, e.g. "2026-09-01". */
  publishedAt: string;
  updatedAt?: string;
  category: PostCategory;
  imageKey: string;
  readingMinutes: number;
  keywords: string[];
  /** Short direct-answer paragraph AI engines can quote (rendered first). */
  keyTakeaway: string;
  body: PostBlock[];
  faqs?: Faq[];
  /** Product slugs to cross-link at the end of the article. */
  relatedProducts?: string[];
}
