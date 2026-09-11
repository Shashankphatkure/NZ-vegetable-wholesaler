import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { posts } from "@/lib/data/posts";
import { areas } from "@/lib/data/areas";

// Stable lastModified dates (not `new Date()` at build time) so Google isn't
// told every page changed on every deploy — that trains it to ignore the
// signal. Bump SITE_UPDATED when site-wide content changes.
const SITE_UPDATED = new Date("2026-09-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`;

  const core: MetadataRoute.Sitemap = [
    { url: url(""), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: url("/shop"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/services"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/faq"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/areas"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/blog"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/contact"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/privacy"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: url(`/shop/category/${c.slug}`),
    lastModified: SITE_UPDATED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((a) => ({
    url: url(`/areas/${a.slug}`),
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: url(`/shop/${p.slug}`),
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...core, ...areaRoutes, ...categoryRoutes, ...productRoutes, ...postRoutes];
}
