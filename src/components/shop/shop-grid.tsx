"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/lib/types";

export function ShopGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategorySlug | null;

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    initialCategory && categories.some((c) => c.slug === initialCategory)
      ? initialCategory
      : "all",
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <Container className="py-16 lg:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-soil/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search produce…"
            aria-label="Search produce"
            className="w-full rounded-lg border border-soil/15 bg-white py-3 pr-4 pl-11 text-[15px] text-soil placeholder:text-soil/40 focus-visible:outline-2 focus-visible:outline-leaf"
          />
        </div>
        <p className="font-label text-[12px] tracking-[0.12em] text-soil/45 uppercase">
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5" role="group" aria-label="Filter by category">
        <FilterChip
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        >
          All
        </FilterChip>
        {categories.map((category) => (
          <FilterChip
            key={category.slug}
            active={activeCategory === category.slug}
            onClick={() => setActiveCategory(category.slug)}
          >
            {category.name}
          </FilterChip>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-lg font-bold text-soil">
            No produce matches that search
          </p>
          <p className="text-[15px] text-soil/60">
            Try a different term, or clear the category filter.
          </p>
        </div>
      )}
    </Container>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "font-label rounded-full border px-4 py-2 text-[12px] tracking-[0.08em] uppercase transition-colors",
        active
          ? "border-forest bg-forest text-cream"
          : "border-soil/15 bg-white text-soil/60 hover:border-forest/40 hover:text-forest",
      )}
    >
      {children}
    </button>
  );
}
