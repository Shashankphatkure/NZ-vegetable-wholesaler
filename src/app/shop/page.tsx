import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { ShopGrid } from "@/components/shop/shop-grid";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Quality fresh vegetables supplied for restaurants, cafes, food businesses and commercial kitchens.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Our Produce"
        supporting="Quality fresh vegetables supplied for restaurants, cafes, food businesses and commercial kitchens."
        imageKey="heroShop"
      />
      <Suspense>
        <ShopGrid />
      </Suspense>
    </>
  );
}
