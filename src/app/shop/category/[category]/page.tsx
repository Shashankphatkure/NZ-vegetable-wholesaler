import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { ShopGrid } from "@/components/shop/shop-grid";
import { Container } from "@/components/ui/container";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { categories, getCategory } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

// One statically generated landing page per category — each targets its own
// "wholesale <category> supplier Auckland" query instead of hiding behind a
// ?category= filter that crawlers never render.
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  // Each category owns one product-level commercial query from the audit's
  // master keyword map, so title/H1/keywords are authored per category rather
  // than generated from the display name.
  return buildMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/shop/category/${category.slug}`,
    keywords: category.keywords,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <>
      <JsonLd
        data={itemListSchema(
          `${category.name} — ${siteConfig.name}`,
          items.map((p) => ({ name: p.name, path: `/shop/${p.slug}` })),
        )}
      />
      <PageHero
        eyebrow="Shop"
        title={category.h1}
        supporting={category.blurb}
        imageKey={category.imageKey}
      />

      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "Shop", path: "/shop" },
            { name: category.name, path: `/shop/category/${category.slug}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-[24px] font-bold text-soil sm:text-[28px]">
            {category.h1} for restaurants, cafes and commercial kitchens
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-soil/70">
            {category.intro}
          </p>
        </div>
      </Container>

      <ShopGrid products={items} activeCategory={category.slug} />

      <CtaBanner
        title={`Order ${category.name.toLowerCase()} for your kitchen`}
        supporting="Tell us your volumes and delivery day — we'll confirm pricing and get you on a run."
        primaryLabel="Request a Price List"
        primaryHref="/contact"
        secondaryLabel="View All Produce"
        secondaryHref="/shop"
      />
    </>
  );
}
