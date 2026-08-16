import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProduceImage } from "@/components/ui/produce-image";
import { FadeUp } from "@/components/ui/fade-up";

export function NzSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/6]">
        <ProduceImage
          imageKey="nzLandscape"
          sizes="100vw"
          className="brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil/70 via-soil/10 to-transparent" />

        <Container className="relative flex h-full items-end pb-12 lg:items-center lg:pb-0">
          <FadeUp className="max-w-xl">
            <Eyebrow tone="cream">New Zealand Grown Network</Eyebrow>
            <h2 className="mt-5 text-[30px] leading-[1.1] font-extrabold text-cream sm:text-[40px] lg:text-[46px]">
              Proudly supplying fresh produce from New Zealand
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-cream/80">
              From Pukekohe&apos;s growing land to commercial kitchens
              across Auckland and Hamilton — with freight coordinated for
              bulk produce further afield.
            </p>
          </FadeUp>
        </Container>
      </div>
    </section>
  );
}
