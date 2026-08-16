import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "forest",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "forest" | "cream" | "leaf";
}) {
  const toneClasses = {
    forest: "text-forest",
    cream: "text-cream",
    leaf: "text-leaf",
  } as const;

  return (
    <span
      className={cn(
        "stamp font-label text-[12px] tracking-[0.16em] uppercase",
        toneClasses[tone],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
