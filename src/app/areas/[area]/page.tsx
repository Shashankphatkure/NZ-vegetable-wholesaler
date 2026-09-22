import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Route, Truck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/faq/faq-list";
import { CategoryCard } from "@/components/products/category-card";
import { areas, getArea } from "@/lib/data/areas";
import { categories } from "@/lib/data/categories";
import { areaServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

// One static landing page per delivery area — the page Google's local
// results want for "vegetable supplier <city>" searches.
export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  // Title, H1 and keywords come from the area record rather than a shared
  // template: Auckland, South Auckland and Manukau were the audit's biggest
  // duplicate-content risk, so each now states a distinct search intent.
  return buildMetadata({
    title: area.seoTitle,
    description: area.seoDescription,
    path: `/areas/${area.slug}`,
    keywords: area.keywords,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd data={areaServiceSchema(area)} />
      <PageHero
        eyebrow={`Delivery Area · ${area.region}`}
        title={area.h1}
        supporting={`Wholesale vegetables delivered to restaurants, cafes and food businesses across ${area.name} from our depot in Pukekohe.`}
        imageKey={area.imageKey}
      />

      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "Delivery Areas", path: "/areas" },
            { name: area.name, path: `/areas/${area.slug}` },
          ]}
        />
      </Container>

      <section className="py-14 lg:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="font-display text-[26px] leading-tight font-bold text-soil sm:text-[32px]">
              Wholesale vegetables delivered to {area.name}
            </h2>
            {/* Direct answer first — the paragraph AI engines will quote. */}
            <p className="mt-5 text-[17px] leading-relaxed font-medium text-soil">
              {area.summary}
            </p>
            {area.body.map((para) => (
              <p key={para.slice(0, 40)} className="mt-5 text-[16px] leading-relaxed text-soil/75">
                {para}
              </p>
            ))}
          </div>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <Fact icon={MapPin} label="Depot" value={`${siteConfig.address.line1}, Pukekohe`} />
            <Fact
              icon={Route}
              label={`Distance to ${area.name}`}
              value={area.distanceKm === 0 ? "Local — we're based here" : `About ${area.distanceKm}km · ${area.driveTime}`}
            />
            <Fact icon={Truck} label="Delivery" value="Scheduled runs, own fleet, morning delivery where possible" />
            <Fact icon={Users} label="We supply" value={area.customerTypes.slice(0, 3).join(" · ")} />
            <a
              href={siteConfig.phoneHref}
              className="mt-2 rounded-xl bg-forest px-5 py-4 text-center font-display text-[15px] font-bold text-cream transition-colors hover:bg-forest-2"
            >
              Call {siteConfig.phoneInternational}
            </a>
          </aside>
        </Container>
      </section>

      <section className="bg-cream-2 py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[24px] font-bold text-soil sm:text-[28px]">
              Suburbs and towns we cover in {area.name}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {area.suburbs.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-soil/15 bg-white px-3.5 py-1.5 text-[13px] text-soil/75"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-soil/60">
              Not listed? Ask — if it&apos;s near an existing run we can usually add it.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[24px] font-bold text-soil sm:text-[28px]">
              Who we supply in {area.name}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {area.customerTypes.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] text-soil/80">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Deliver"
            title={`Produce lines for ${area.name} kitchens`}
            supporting="Seven core categories, packed in trade sizes, from Pukekohe and Waikato growers."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-2 py-16 lg:py-20">
        <Container className="max-w-4xl">
          <h2 className="font-display text-[26px] font-bold text-soil sm:text-[30px]">
            {area.name} delivery questions
          </h2>
          <FaqList faqs={area.faqs} className="mt-6" />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="font-label text-[12px] tracking-[0.14em] text-soil/50 uppercase">
            Other delivery areas
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {otherAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="rounded-full border border-forest/25 px-4 py-2 text-[13px] font-semibold text-forest hover:bg-forest hover:text-cream"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        title={`Need a produce supplier in ${area.name}?`}
        supporting="Tell us your location and what you go through each week — we'll confirm pricing and a delivery day."
        primaryLabel="Get a Price List"
        primaryHref="/contact"
        secondaryLabel="View Our Produce"
        secondaryHref="/shop"
      />
    </>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-soil/10 bg-white p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest/8 text-forest">
        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-label text-[11px] tracking-[0.14em] text-soil/50 uppercase">{label}</p>
        <p className="mt-1 text-[14px] leading-snug font-semibold text-soil">{value}</p>
      </div>
    </div>
  );
}
