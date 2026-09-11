"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/products/product-card";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";
import type { CategorySlug, Product } from "@/lib/types";

// The product list is passed in from the server page and rendered on the
// first paint, so the full catalogue is in the HTML for crawlers. The search
// box is a progressive enhancement on top of that. Category filtering is a
// real navigation to /shop/category/[slug] (each is its own indexable page)
// rather than client state.
export function ShopGrid({
  products,
  activeCategory = "all",
}: {
  products: Product[];
  activeCategory?: CategorySlug | "all";
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return products;
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q),
    );
  }, [query, products]);

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

      <nav className="mt-6 flex flex-wrap gap-2.5" aria-label="Browse by category">
        <FilterChip href="/shop" active={activeCategory === "all"}>
          All
        </FilterChip>
        {categories.map((category) => (
          <FilterChip
            key={category.slug}
            href={`/shop/category/${category.slug}`}
            active={activeCategory === category.slug}
          >
            {category.name}
          </FilterChip>
        ))}
      </nav>

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
            Try a different term, or browse a category above.
          </p>
        </div>
      )}
    </Container>
  );
}

function FilterChip({
  active,
  href,
  children,
}: {
  active: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "font-label rounded-full border px-4 py-2 text-[12px] tracking-[0.08em] uppercase transition-colors",
        active
          ? "border-forest bg-forest text-cream"
          : "border-soil/15 bg-white text-soil/60 hover:border-forest/40 hover:text-forest",
      )}
    >
      {children}
    </Link>
  );
}
