import { FadeUp } from "@/components/ui/fade-up";

type TimelineItem = {
  marker: string;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col gap-10 pl-9 sm:pl-12">
      <div
        className="absolute top-1 bottom-1 left-[9px] w-px bg-soil/15 sm:left-[13px]"
        aria-hidden="true"
      />
      {items.map((item, i) => (
        <FadeUp as="li" key={item.title} delay={i * 0.05} className="relative">
          <span
            className="absolute top-1 -left-9 h-[19px] w-[19px] rounded-full border-2 border-forest bg-cream sm:-left-12 sm:h-[27px] sm:w-[27px]"
            aria-hidden="true"
          />
          <span className="font-label text-[12px] tracking-[0.14em] text-leaf uppercase">
            {item.marker}
          </span>
          <h3 className="font-display mt-1.5 text-lg font-bold text-soil sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-soil/70">
            {item.description}
          </p>
        </FadeUp>
      ))}
    </ol>
  );
}
