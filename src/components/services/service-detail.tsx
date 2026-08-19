import { Boxes, Package, Truck, Network } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp } from "@/components/ui/fade-up";

const services = [
  {
    icon: Boxes,
    title: "Wholesale Supply",
    body: "Fresh produce supply for restaurants, cafes, food businesses and commercial kitchens.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    body: "Support for larger produce requirements and suitable packaging quantities.",
  },
  {
    icon: Truck,
    title: "Business Delivery",
    body: "Local delivery and coordinated freight solutions where applicable.",
  },
  {
    icon: Network,
    title: "Supply Network",
    body: "Reliable sourcing and distribution supported by practical New Zealand agricultural experience.",
  },
];

export function ServiceDetail() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="A dependable produce partner"
          supporting="Four ways we support restaurants, cafes and food businesses across New Zealand."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeUp
              key={service.title}
              delay={i * 0.07}
              className="rounded-2xl border border-soil/10 bg-white p-8 lg:p-10"
            >
              <service.icon className="h-8 w-8 text-forest" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-[21px] font-bold text-soil">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-soil/65 lg:text-[16px]">
                {service.body}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
