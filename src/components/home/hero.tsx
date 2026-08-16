import { Sparkles, Truck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ProduceImage } from "@/components/ui/produce-image";

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden">
      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div className="relative z-10">
          <Eyebrow>Fresh Produce · New Zealand</Eyebrow>
          <h1 className="mt-6 text-[42px] leading-[1.05] font-extrabold text-soil sm:text-[56px] lg:text-[64px]">
            Fresh produce.
            <br />
            <span className="font-accent text-leaf">Delivered with confidence.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-soil/70 lg:text-lg">
            Quality vegetables supplied to restaurants, cafes and food
            businesses across New Zealand.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/shop" variant="primary" size="lg">
              View Our Produce
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-forest/25 bg-white"
            >
              Talk to Us
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-[13px] font-medium text-soil/70 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              10+ years hands-on experience
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-[13px] font-medium text-soil/70 backdrop-blur-sm">
              <Truck className="h-3.5 w-3.5 text-leaf" />
              Auckland &amp; Hamilton delivery
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-forest-soft lg:aspect-[5/6]">
          <ProduceImage imageKey="heroHome" priority sizes="(min-width: 1024px) min(45vw, 580px), 100vw" />
          <div className="stamp font-label absolute top-5 left-5 border-cream/50 bg-forest/40 text-[11px] tracking-[0.16em] text-cream/90 uppercase backdrop-blur-sm">
            Pukekohe, NZ
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf/12 text-leaf">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-[14px] font-bold text-soil">
                From the soil up
              </p>
              <p className="text-[12px] text-soil/60">
                Orchards &amp; packhouses to your kitchen
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="crate-divider absolute inset-x-0 bottom-0 text-soil/25" />
    </section>
  );
}
