import { Boxes, Package, Truck, Network } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/fade-up";

const services = [
  { icon: Boxes, title: "Wholesale Supply" },
  { icon: Package, title: "Bulk Orders" },
  { icon: Truck, title: "Business Delivery" },
  { icon: Network, title: "Supply Support" },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="Built around your kitchen's supply needs"
          />
          <Button href="/services" variant="ghost" className="shrink-0">
            Explore Our Services
          </Button>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-soil/10 bg-soil/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeUp
              key={service.title}
              delay={i * 0.06}
              className="flex flex-col gap-4 bg-white p-8"
            >
              <service.icon className="h-6 w-6 text-forest" strokeWidth={1.75} />
              <h3 className="font-display text-[17px] font-bold text-soil">
                {service.title}
              </h3>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
