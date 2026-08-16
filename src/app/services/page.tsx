import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceDetail } from "@/components/services/service-detail";
import { ProcessSection } from "@/components/services/process-section";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wholesale supply, bulk orders, business delivery and a reliable supply network for New Zealand food businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A dependable produce partner for your business."
        imageKey="heroServices"
      />
      <ServiceDetail />
      <ProcessSection />
      <CtaBanner
        title="Ready to simplify your produce supply?"
        supporting="Tell us what your kitchen needs and we'll take it from there."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Our Produce"
        secondaryHref="/shop"
      />
    </>
  );
}
