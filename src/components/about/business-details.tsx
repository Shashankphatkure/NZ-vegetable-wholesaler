import { Building2, CalendarCheck, MapPin, Phone, Truck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

// Plain, verifiable business facts. These are the E-E-A-T signals Google and
// AI engines look for when deciding whether a business is real and local.
// TODO(client): add NZBN, food-safety registration and any certifications
// here once supplied — leave nothing invented.
const facts = [
  {
    icon: Building2,
    label: "Trading name",
    value: siteConfig.name,
  },
  {
    icon: CalendarCheck,
    label: "Established",
    value: `${siteConfig.foundedYear}, Pukekohe`,
  },
  {
    icon: Users,
    label: "Founder & owner",
    value: siteConfig.founder,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: `${siteConfig.address.line1}, ${siteConfig.address.locality}`,
  },
  {
    icon: Truck,
    label: "Delivery areas",
    value: `${siteConfig.regions.join(" and ")} — own fleet; freight coordinated elsewhere in NZ`,
  },
  {
    icon: Phone,
    label: "Contact",
    value: siteConfig.phoneInternational,
  },
];

export function BusinessDetails() {
  return (
    <section className="bg-cream-2 py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Business Details"
          title="Who you're dealing with"
          supporting="A small, owner-operated wholesale business. The person who takes your order is the person who loads the truck."
        />
        <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex gap-4 rounded-xl border border-soil/10 bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest/8 text-forest">
                <fact.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="font-label text-[11px] tracking-[0.14em] text-soil/50 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[15px] leading-snug font-semibold text-soil">
                  {fact.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
        <div className="mt-10 max-w-3xl">
          <h3 className="font-display text-[20px] font-bold text-soil">
            Who we supply
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-soil/75">
            {siteConfig.name} is a wholesale supplier to food businesses —
            restaurants, cafes, takeaways, caterers, hotels, dairies and central
            production kitchens across Auckland and Hamilton. We do not sell to
            the public at retail. Most customers are on a fixed weekly or
            twice-weekly delivery day and receive a weekly price list that
            follows the New Zealand fresh-produce market.
          </p>
        </div>
      </Container>
    </section>
  );
}
