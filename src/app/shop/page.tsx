import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ShopGrid } from "@/components/shop/shop-grid";
import { Container } from "@/components/ui/container";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqList } from "@/components/faq/faq-list";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { allFaqs } from "@/lib/data/faqs";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Wholesale Vegetables & Fresh Produce Catalogue",
  description:
    "Browse our wholesale fresh produce range: potatoes, onions, tomatoes, roots, greens, herbs and more. Supplied from Pukekohe to restaurants and cafes across Auckland and Hamilton.",
  path: "/shop",
  keywords: [
    "wholesale vegetables Auckland",
    "fresh produce catalogue NZ",
    "restaurant vegetable supplier",
  ],
});

const shopFaqs = allFaqs.filter((f) =>
  [
    "What vegetables does VegieFresh supply?",
    "What pack sizes do you offer for potatoes?",
    "Can you source produce that is not on your website?",
    "Is there a minimum order for delivery?",
  ].includes(f.question),
);

export default function ShopPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "VegieFresh wholesale produce catalogue",
          products.map((p) => ({ name: p.name, path: `/shop/${p.slug}` })),
        )}
      />
      <PageHero
        eyebrow="Shop"
        title="Our Produce"
        supporting="Quality fresh vegetables supplied for restaurants, cafes, food businesses and commercial kitchens across Auckland and Hamilton."
        imageKey="heroShop"
      />

      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Shop", path: "/shop" }]} />
        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-[24px] font-bold text-soil sm:text-[28px]">
            Wholesale fresh produce from Pukekohe
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-soil/70">
            Every line below is sourced for commercial kitchens and packed in
            trade sizes. Browse the full catalogue or jump into a category —{" "}
            {categories.map((c, i) => (
              <span key={c.slug}>
                <a href={`/shop/category/${c.slug}`} className="font-semibold text-forest underline-offset-2 hover:underline">
                  {c.name.toLowerCase()}
                </a>
                {i < categories.length - 2 ? ", " : i === categories.length - 2 ? " and " : ""}
              </span>
            ))}
            . Pricing follows the NZ produce market and is confirmed on
            enquiry.
          </p>
        </div>
      </Container>

      <ShopGrid products={products} />

      <section className="bg-cream-2 py-20">
        <Container className="max-w-4xl">
          <h2 className="font-display text-[28px] font-bold text-soil sm:text-[34px]">
            Ordering questions
          </h2>
          <FaqList faqs={shopFaqs} className="mt-8" />
        </Container>
      </section>

      <CtaBanner
        title="Need something that isn't listed?"
        supporting="We source from a network of NZ growers. Tell us what your menu needs."
        primaryLabel="Ask Us"
        primaryHref="/contact"
      />
    </>
  );
}
