import { Sprout, Package, HandHelping, Truck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessStep } from "@/components/marketing/process-step";

const steps = [
  { icon: Sprout, title: "Source", description: "Produce sourced through a practical New Zealand agricultural network." },
  { icon: Package, title: "Pack", description: "Packed in trade-ready sizes suited to commercial kitchens." },
  { icon: HandHelping, title: "Handle", description: "Handled carefully, with attention to quality at every step." },
  { icon: Truck, title: "Deliver", description: "Delivered locally, with freight coordinated for bulk orders further afield." },
];

export function ProcessSection() {
  return (
    <section className="bg-cream-2 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Source, pack, handle, deliver"
          align="center"
        />
        <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:gap-6">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.title}
              index={String(i + 1).padStart(2, "0")}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
