import { Sprout, ShieldCheck, Handshake, MapPinned } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp } from "@/components/ui/fade-up";

const points = [
  {
    icon: Sprout,
    title: "Experience",
    body: "Over a decade of hands-on agricultural and food-industry experience.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    body: "Built around dependable supply and communication.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    body: "Careful handling and attention to produce quality.",
  },
  {
    icon: MapPinned,
    title: "Local Knowledge",
    body: "Deep understanding of New Zealand's agricultural and supply environment.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(45% 60% at 90% 10%, rgb(215 168 61 / 0.14), transparent 65%)",
        }}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Grounded in real industry experience"
          align="center"
          tone="cream"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <FadeUp
              key={point.title}
              delay={i * 0.08}
              className="rounded-xl border border-cream/10 bg-cream/[0.04] p-7 transition-colors duration-300 hover:bg-cream/[0.07]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <point.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[18px] font-bold text-cream">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-cream/65">
                {point.body}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
