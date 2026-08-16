import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProduceImage } from "@/components/ui/produce-image";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { products, getProduct } from "@/lib/data/products";
import { getCategory } from "@/lib/data/categories";

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
  return {
    title: product.name,
    description: product.description,
  };
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

  return (
    <Container className="py-12 lg:py-16">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest/80 hover:text-forest"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to all produce
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <ProduceImage imageKey={product.imageKey} priority sizes="(min-width: 1024px) min(45vw, 570px), 100vw" />
          </div>
        </div>

        <div>
          {category && <Eyebrow>{category.name}</Eyebrow>}
          <h1 className="mt-5 text-[34px] leading-[1.08] font-extrabold text-soil sm:text-[42px]">
            {product.name}
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-soil/70">
            {product.description}
          </p>

          <div className="mt-7">
            <p className="font-label mb-2.5 text-[12px] tracking-[0.14em] text-soil/50 uppercase">
              Available
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
                  Pack sizes available on enquiry
                </span>
              )}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-soil/10 bg-cream-2 p-6 sm:p-8">
            <h2 className="font-display text-[19px] font-bold text-soil">
              Enquire About This Product
            </h2>
            <p className="mt-1.5 text-[14px] text-soil/60">
              Send us the details and we&apos;ll get back to you.
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
    </Container>
  );
}
