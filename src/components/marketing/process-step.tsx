import type { LucideIcon } from "lucide-react";

export function ProcessStep({
  icon: Icon,
  index,
  title,
  description,
  isLast,
}: {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex flex-1 flex-col gap-4">
      {!isLast && (
        <div
          className="crate-divider absolute top-7 left-[calc(50%+2.75rem)] hidden w-[calc(100%-5.5rem)] text-forest/40 lg:block"
          aria-hidden="true"
        />
      )}
      <div className="flex items-center gap-3 lg:flex-col lg:items-center">
        <span className="font-label relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest/25 bg-cream text-forest">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-label text-[11px] tracking-[0.16em] text-leaf uppercase lg:hidden">
          Step {index}
        </span>
      </div>
      <div className="lg:text-center">
        <span className="font-label hidden text-[11px] tracking-[0.16em] text-leaf uppercase lg:inline-block">
          Step {index}
        </span>
        <h3 className="font-display mt-1 text-lg font-bold text-soil">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-soil/70">{description}</p>
      </div>
    </div>
  );
}
