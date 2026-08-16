import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/fade-up";

export function CtaBanner({
  title,
  supporting,
  primaryLabel = "Enquire Now",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  supporting?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <FadeUp className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,var(--color-forest)_0%,var(--color-forest-2)_60%,var(--color-soil)_100%)] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(50% 60% at 85% 0%, rgb(215 168 61 / 0.25), transparent 65%), radial-gradient(45% 55% at 5% 100%, rgb(141 191 82 / 0.2), transparent 60%)",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-[32px] leading-[1.12] font-extrabold text-cream sm:text-[42px]">
              {title}
            </h2>
            {supporting && (
              <p className="max-w-md text-[16px] leading-relaxed text-cream/70">
                {supporting}
              </p>
            )}
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Button
                href={primaryHref}
                className="shadow-gold-soft bg-gold text-soil hover:bg-cream"
              >
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  className="border-cream/30 text-cream hover:bg-cream hover:text-soil"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
