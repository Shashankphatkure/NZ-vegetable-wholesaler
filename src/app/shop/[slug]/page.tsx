import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, MapPin, CalendarDays, Thermometer, ChefHat } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProduceImage } from "@/components/ui/produce-image";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { ProductCard } from "@/components/products/product-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqList } from "@/components/faq/faq-list";
import { products, getProduct, getProductsByCategory } from "@/lib/data/products";
import { getProductDetails } from "@/lib/data/product-details";
import { getCategory } from "@/lib/data/categories";
import { productSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const packs =
    product.packSizes.length > 0 ? ` (${product.packSizes.join(", ")})` : "";
  return buildMetadata({
    title: `${product.name} — Wholesale Supply Auckland & Hamilton`,
    description: `Wholesale ${product.name.toLowerCase()}${packs} supplied fresh from Pukekohe to restaurants, cafes and food businesses across Auckland and Hamilton. ${product.description.split(". ")[0]}.`,
    path: `/shop/${product.slug}`,
    keywords: [
      `wholesale ${product.name.toLowerCase()} Auckland`,
      `${product.name.toLowerCase()} supplier NZ`,
      `buy ${product.name.toLowerCase()} bulk restaurant`,
    ],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const details = getProductDetails(product.slug);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const packSummary =
    product.packSizes.length > 0
      ? `Available in ${product.packSizes.join(", ")} packs.`
      : "Pack sizes are confirmed on enquiry to suit your volumes.";

  return (
    <>
      <JsonLd data={productSchema(product, details)} />
      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Shop", path: "/shop" },
            ...(category
              ? [{ name: category.name, path: `/shop/category/${category.slug}` }]
              : []),
            { name: product.name, path: `/shop/${product.slug}` },
          ]}
        />
        <Link
          href={category ? `/shop/category/${category.slug}` : "/shop"}
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest/80 hover:text-forest"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to {category ? category.name.toLowerCase() : "all produce"}
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <ProduceImage imageKey={product.imageKey} priority sizes="(min-width: 1024px) min(45vw, 570px), 100vw" />
            </div>
          </div>

          <div>
            {category && <Eyebrow>{category.name}</Eyebrow>}
            <h1 className="mt-5 text-[34px] leading-[1.08] font-extrabold text-soil sm:text-[42px]">
              {product.name}
            </h1>
            {/* Direct-answer summary: who / where / what, in one quotable line. */}
            <p className="mt-4 text-[15px] font-semibold text-forest">
              Wholesale {product.name.toLowerCase()} supplied by {siteConfig.name} from
              Pukekohe to restaurants, cafes and food businesses across{" "}
              {siteConfig.regions.join(" and ")}. {packSummary}
            </p>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-soil/70">
              {product.description}
            </p>

            <div className="mt-7">
              <p className="font-label mb-2.5 text-[12px] tracking-[0.14em] text-soil/50 uppercase">
                Pack sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.length > 0 ? (
                  product.packSizes.map((size) => (
                    <span
                      key={size}
                      className="font-label rounded-full border border-forest/25 bg-forest/5 px-3.5 py-1.5 text-[13px] tracking-wide text-forest"
                    >
                      {size}
                    </span>
                  ))
                ) : (
                  <span className="text-[14px] text-soil/55">
                    Packed to order — tell us your weekly volume
                  </span>
                )}
              </div>
            </div>

            {details && (
              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <DetailCard icon={MapPin} label="Origin" value={details.origin} />
                <DetailCard icon={CalendarDays} label="Season" value={details.season} />
                <DetailCard icon={Thermometer} label="Storage" value={details.storage} className="sm:col-span-2" />
              </dl>
            )}

            <div className="mt-10 rounded-2xl border border-soil/10 bg-cream-2 p-6 sm:p-8">
              <h2 className="font-display text-[19px] font-bold text-soil">
                Enquire About This Product
              </h2>
              <p className="mt-1.5 text-[14px] text-soil/60">
                Send us the details and we&apos;ll get back to you with pricing and a delivery day.
              </p>
              <EnquiryForm
                productName={product.name}
                productFieldLabel="Product"
                submitLabel="Enquire About This Product"
                className="mt-6"
              />
            </div>
          </div>
        </div>

        {details && (
          <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="flex items-center gap-3 font-display text-[26px] font-bold text-soil">
                <ChefHat className="h-6 w-6 text-leaf" aria-hidden="true" />
                How chefs use {product.name.toLowerCase()}
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {details.chefUses.map((use) => (
                  <li
                    key={use}
                    className="rounded-xl border border-soil/10 bg-white px-5 py-4 text-[15px] leading-snug text-soil/80"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[26px] font-bold text-soil">
                Ordering {product.name.toLowerCase()} from {siteConfig.name}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-soil/70">
                {siteConfig.name} supplies {product.name.toLowerCase()} to food
                businesses across Auckland and Hamilton on regular delivery runs
                from our base in Pukekohe. {packSummary} Call{" "}
                <a href={siteConfig.phoneHref} className="font-semibold text-forest">
                  {siteConfig.phoneInternational}
                </a>
                , email, or use the form above — we confirm pricing against the
                current NZ produce market and slot you onto a delivery day.
              </p>
              {details.faqs && details.faqs.length > 0 && (
                <FaqList faqs={details.faqs} className="mt-8" />
              )}
            </div>
          </section>
        )}

        {related.length > 0 && category && (
          <section className="mt-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-[26px] font-bold text-soil">
                More {category.name.toLowerCase()}
              </h2>
              <Link
                href={`/shop/category/${category.slug}`}
                className="text-[14px] font-semibold text-forest hover:underline"
              >
                View all {category.name.toLowerCase()}
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}

function DetailCard({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-soil/10 bg-white p-5 ${className ?? ""}`}>
      <dt className="flex items-center gap-2 font-label text-[11px] tracking-[0.14em] text-soil/50 uppercase">
        <Icon className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
        {label}
      </dt>
      <dd className="mt-2 text-[14px] leading-relaxed text-soil/80">{value}</dd>
    </div>
  );
}
