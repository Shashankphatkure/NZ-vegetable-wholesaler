import Link from "next/link";
import { ProduceImage } from "@/components/ui/produce-image";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-18px_rgba(23,60,44,0.32)]"
    >
      <ProduceImage
        imageKey={category.imageKey}
        sizes="(min-width: 1024px) min(24vw, 290px), (min-width: 640px) 30vw, 45vw"
        className="transition-transform duration-500 ease-[var(--ease-produce)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-soil/85 via-soil/10 to-transparent" />
      <div className="relative p-4">
        <h3 className="font-display text-[17px] font-bold text-cream">
          {category.name}
        </h3>
        <p className="mt-0.5 text-[13px] text-cream/75">{category.blurb}</p>
      </div>
    </Link>
  );
}
