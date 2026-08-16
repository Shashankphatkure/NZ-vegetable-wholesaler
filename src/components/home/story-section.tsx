import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ProduceImage } from "@/components/ui/produce-image";
import { FadeUp } from "@/components/ui/fade-up";

export function StorySection() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:order-2">
          <ProduceImage
            imageKey="storySection"
            sizes="(min-width: 1024px) min(45vw, 570px), 100vw"
          />
        </FadeUp>

        <FadeUp className="lg:order-1">
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-6 text-[34px] leading-[1.1] font-extrabold text-soil sm:text-[42px] lg:text-[48px]">
            From the Soil Up
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-soil/70 lg:text-lg">
            Built on more than a decade of hands-on experience in New
            Zealand&apos;s agricultural and food industry.
          </p>

          <ul className="mt-8 space-y-5 border-l-2 border-leaf/30 pl-6">
            <StoryPoint year="2011" text="Arrived in New Zealand and began working in the primary sector — kiwifruit orchards, onion and potato packhouses." />
            <StoryPoint year="8+ years" text="Hands-on experience across produce handling, grading, packing and New Zealand's food industry." />
            <StoryPoint year="2022" text="Founded the business to solve everyday sourcing problems for restaurants, cafes and food businesses." />
            <StoryPoint year="Today" text="A growing supply network across Auckland and Hamilton, run with the same practical, hands-on approach." />
          </ul>

          <Button href="/about" variant="ghost" className="mt-8">
            Read Our Story
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}

function StoryPoint({ year, text }: { year: string; text: string }) {
  return (
    <li className="relative">
      <span className="font-label absolute top-1 -left-[29px] h-2.5 w-2.5 rounded-full bg-leaf" />
      <span className="font-label block text-[13px] tracking-[0.1em] text-forest uppercase">
        {year}
      </span>
      <span className="mt-1 block text-[15px] leading-relaxed text-soil/70">
        {text}
      </span>
    </li>
  );
}
