import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProduceImage } from "@/components/ui/produce-image";

export function PageHero({
  eyebrow,
  title,
  supporting,
  imageKey,
}: {
  eyebrow: string;
  title: string;
  supporting?: string;
  imageKey?: string;
}) {
  if (imageKey) {
    return (
      <section className="relative overflow-hidden bg-forest">
        <div className="relative aspect-[16/11] w-full sm:aspect-[16/8] lg:aspect-[16/6.5]">
          <ProduceImage imageKey={imageKey} priority sizes="100vw" className="brightness-[0.5]" />
          <div className="absolute inset-0 bg-gradient-to-t from-soil/75 via-soil/15 to-transparent" />
          <Container className="relative flex h-full items-end pb-12 lg:items-center lg:pb-0">
            <div className="max-w-2xl">
              <Eyebrow tone="cream">{eyebrow}</Eyebrow>
              <h1 className="mt-5 text-[36px] leading-[1.08] font-extrabold text-cream sm:text-[48px] lg:text-[58px]">
                {title}
              </h1>
              {supporting && (
                <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-cream/80 lg:text-lg">
                  {supporting}
                </p>
              )}
            </div>
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-soil/10 bg-cream-2 py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[36px] leading-[1.08] font-extrabold text-soil sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          {supporting && (
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-soil/70 lg:text-lg">
              {supporting}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
