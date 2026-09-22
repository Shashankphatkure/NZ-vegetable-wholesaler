import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { FaqList } from "@/components/faq/faq-list";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/shared/cta-banner";
import { faqGroups, allFaqs } from "@/lib/data/faqs";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Primary intent: "fresh produce delivery Auckland". The delivery how-it-works
// blog post was moved off this term so the two stop competing.
export const metadata: Metadata = buildMetadata({
  title: "Fresh Produce Delivery FAQ — Auckland & Hamilton",
  description:
    "Answers about VegieFresh wholesale produce: delivery areas, pack sizes, vegetables, ordering, sourcing and supply for Auckland and Hamilton businesses.",
  path: "/faq",
  keywords: [
    "fresh produce delivery Auckland",
    "wholesale produce FAQ",
    "vegetable delivery Hamilton questions",
    "wholesale vegetable pack sizes",
  ],
});

export default function FaqPage() {
  return (
    <>
      {/* One FAQPage block for the whole page (per-group lists skip their own). */}
      <JsonLd data={faqSchema(allFaqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Fresh Produce Supplier FAQs"
        supporting="Delivery areas, pack sizes, pricing and how ordering works — answered plainly."
      />
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
        <div className="mt-10 flex flex-col gap-14">
          {faqGroups.map((group) => (
            <section key={group.title} id={group.title.toLowerCase().replace(/[^a-z]+/g, "-")}>
              <h2 className="font-display text-[26px] font-bold text-soil sm:text-[30px]">
                {group.title}
              </h2>
              <FaqList faqs={group.faqs} schema={false} className="mt-6" />
            </section>
          ))}
        </div>
      </Container>
      <CtaBanner
        title="Didn't find your answer?"
        supporting="Call, email or send an enquiry — we reply directly."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
