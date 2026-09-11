import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceDetail } from "@/components/services/service-detail";
import { ProcessSection } from "@/components/services/process-section";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/faq/faq-list";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { faqGroups } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Wholesale Produce Supply & Delivery — Auckland & Hamilton",
  description:
    "Wholesale vegetable supply, bulk orders and scheduled business delivery for restaurants, cafes and caterers across Auckland and Hamilton, from our Pukekohe depot.",
  path: "/services",
  keywords: [
    "wholesale produce delivery Auckland",
    "restaurant vegetable supply Hamilton",
    "bulk vegetable orders NZ",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <PageHero
        eyebrow="Services"
        title="A dependable produce partner for your business."
        supporting="Wholesale supply, bulk orders and our own delivery fleet covering Auckland and Hamilton."
        imageKey="heroServices"
      />
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      </Container>
      <ServiceDetail />
      <ProcessSection />
      <section className="bg-cream-2 py-20">
        <Container className="max-w-4xl">
          <h2 className="font-display text-[28px] font-bold text-soil sm:text-[34px]">
            Delivery questions
          </h2>
          <FaqList faqs={faqGroups[0].faqs} className="mt-8" />
        </Container>
      </section>
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
