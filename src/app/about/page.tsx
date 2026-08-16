import type { Metadata } from "next";
import { Award, HardHat, Handshake, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp } from "@/components/ui/fade-up";
import { PageHero } from "@/components/shared/page-hero";
import { Timeline } from "@/components/marketing/timeline";
import { CtaBanner } from "@/components/shared/cta-banner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Built from more than a decade of hands-on New Zealand agricultural and food-industry experience.",
};

const timelineItems = [
  {
    marker: "2011",
    title: "Arrived in New Zealand",
    description:
      "Arrived as a young student with big dreams, a willingness to learn and a strong work ethic.",
  },
  {
    marker: "2011 – 2022",
    title: "Hands-on industry experience",
    description:
      "Worked across kiwifruit orchards and onion and potato packhouses, learning produce handling, grading, packing and New Zealand's food industry from the ground up.",
  },
  {
    marker: "8+ years",
    title: "Food-processing industry",
    description:
      "More than eight years developing practical knowledge of agricultural supply chains, seasonal change and quality standards.",
  },
  {
    marker: "2022",
    title: "Fresh-produce business founded",
    description:
      "Founded the business to solve the everyday sourcing problems faced by restaurants, cafes and food businesses.",
  },
  {
    marker: "Today",
    title: "A growing supply network",
    description:
      "Personally managing a local delivery fleet across Auckland and Hamilton, with freight coordinated for bulk produce elsewhere in New Zealand.",
  },
];

const values = [
  { icon: HardHat, title: "Hard Work" },
  { icon: Award, title: "Quality" },
  { icon: ShieldCheck, title: "Reliability" },
  { icon: Handshake, title: "Respect" },
  { icon: Users, title: "Long-term Relationships" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built from experience. Driven by quality."
        supporting="More than a decade of hands-on New Zealand agricultural and food-industry experience, behind every order."
        imageKey="heroAbout"
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <FadeUp>
            <SectionHeading eyebrow="Founder Story" title={siteConfig.founder} />
            <div className="mt-7 flex flex-col gap-5 text-[16px] leading-relaxed text-soil/75">
              <p>
                {siteConfig.founder} arrived in New Zealand in 2011 as a young
                student with big dreams, a willingness to learn, and a strong
                work ethic.
              </p>
              <p>
                He learned the agriculture and food industries from the
                ground up, working hands-on in New Zealand&apos;s primary
                sector. His experience included kiwifruit orchards and
                onion and potato packhouses, where he personally worked with
                cutting, grading and packing produce.
              </p>
              <p>
                He spent more than eight years in the food-processing
                industry, developing practical knowledge of produce
                handling, agricultural supply chains, seasonal changes,
                quality standards, packing and processing, and New
                Zealand&apos;s food industry.
              </p>
              <p>
                In 2022, after more than a decade of experience, he founded
                the business with a goal of solving the everyday sourcing
                problems faced by restaurants, cafes and food businesses —
                supplying quality vegetables reliably and acting as a
                dependable partner between the supply chain and commercial
                kitchens.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Timeline items={timelineItems} />
          </FadeUp>
        </Container>
      </section>

      <section className="bg-forest py-20 text-cream lg:py-28">
        <Container>
          <FadeUp>
            <SectionHeading eyebrow="What We Stand For" title="Our Values" tone="cream" align="center" className="mx-auto" />
          </FadeUp>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => (
              <FadeUp
                key={value.title}
                delay={i * 0.06}
                className="flex flex-col items-center gap-4 rounded-xl border border-cream/15 bg-cream/[0.04] p-7 text-center"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-kiwi/15 text-kiwi">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-[15px] font-bold text-cream">
                  {value.title}
                </h3>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to work with a supplier who understands produce?"
        supporting="Browse our range or get in touch to talk about your kitchen's needs."
        primaryLabel="View Our Produce"
        primaryHref="/shop"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
