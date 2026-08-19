import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProduceImage } from "@/components/ui/produce-image";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-soil/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-18px_rgba(23,60,44,0.32)]"
    >
      {/* Square frame matches the square product photography exactly, so
          nothing gets cropped -- tall subjects (spring onion, kale) kept
          losing their tops in a 4:3 frame. */}
      <div className="relative aspect-square overflow-hidden">
        <ProduceImage
          imageKey={product.imageKey}
          priority={priority}
          sizes="(min-width: 1024px) min(25vw, 300px), (min-width: 640px) 33vw, 50vw"
          className="transition-transform duration-500 ease-[var(--ease-produce)] group-hover:scale-105"
        />
        {product.featured && (
          <span className="font-label absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-soil uppercase shadow-sm">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-[17px] font-bold text-soil">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {product.packSizes.length > 0 ? (
            product.packSizes.map((size) => (
              <span
                key={size}
                className="font-label rounded-full border border-soil/15 px-2.5 py-1 text-[11px] tracking-wide text-soil/60"
              >
                {size}
              </span>
            ))
          ) : (
            <span className="font-label text-[11px] tracking-wide text-soil/45 uppercase">
              Pack sizes on enquiry
            </span>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/8 px-3.5 py-1.5 text-[13px] font-semibold text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
            Enquire
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
