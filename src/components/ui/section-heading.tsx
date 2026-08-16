import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  supporting,
  align = "left",
  tone = "forest",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  supporting?: React.ReactNode;
  align?: "left" | "center";
  tone?: "forest" | "cream";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone === "cream" ? "cream" : "forest"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-[34px] leading-[1.1] font-extrabold sm:text-[42px] lg:text-[48px]",
          tone === "cream" ? "text-cream" : "text-soil",
        )}
      >
        {title}
      </h2>
      {supporting && (
        <p
          className={cn(
            "mt-5 text-[17px] leading-relaxed lg:text-lg",
            tone === "cream" ? "text-cream/80" : "text-soil/70",
          )}
        >
          {supporting}
        </p>
      )}
    </div>
  );
}
