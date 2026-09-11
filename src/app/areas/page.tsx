import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ProduceImage } from "@/components/ui/produce-image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { areas } from "@/lib/data/areas";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Delivery Areas — Auckland, Hamilton & Waikato",
  description:
    "Where VegieFresh delivers fresh wholesale vegetables: Auckland, South Auckland, Manukau, Pukekohe & Franklin, Hamilton and the Waikato. Scheduled runs from our Pukekohe depot.",
  path: "/areas",
  keywords: ["vegetable delivery areas Auckland", "produce supplier Hamilton", "wholesale vegetables Waikato"],
});

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "VegieFresh delivery areas",
          areas.map((a) => ({ name: a.name, path: `/areas/${a.slug}` })),
        )}
      />
      <PageHero
        eyebrow="Delivery Areas"
        title="Where we deliver"
        supporting="Scheduled produce runs from Pukekohe across Auckland, Hamilton and the Waikato — with our own fleet."
        imageKey="nzLandscape"
      />
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ name: "Delivery Areas", path: "/areas" }]} />
        <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-soil/75">
          {siteConfig.name} is based in Pukekohe, roughly halfway between Auckland and
          Hamilton, which is why both cities sit on regular runs rather than
          occasional freight. Pick your area below for suburbs covered, drive
          time from the depot and local ordering questions.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-soil/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-18px_rgba(23,60,44,0.32)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ProduceImage
                  imageKey={area.imageKey}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="transition-transform duration-500 ease-[var(--ease-produce)] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h2 className="font-display text-[20px] font-bold text-soil group-hover:text-forest">
                  {area.name}
                </h2>
                <p className="inline-flex items-center gap-1.5 text-[13px] text-soil/55">
                  <Route className="h-3.5 w-3.5" aria-hidden="true" />
                  {area.distanceKm === 0 ? "Home base" : `~${area.distanceKm}km · ${area.driveTime} from depot`}
                </p>
                <p className="text-[14px] leading-relaxed text-soil/65">
                  {area.suburbs.slice(0, 5).join(", ")} and more.
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] font-semibold text-forest">
                  View area
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <CtaBanner
        title="Outside these areas?"
        supporting="For bulk orders elsewhere in New Zealand we coordinate freight. Tell us where you are."
        primaryLabel="Ask About Delivery"
        primaryHref="/contact"
      />
    </>
  );
}
