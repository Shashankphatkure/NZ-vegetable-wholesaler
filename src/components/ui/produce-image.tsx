import Image from "next/image";
import { getImage } from "@/lib/images";
import { cn } from "@/lib/utils";

interface ProduceImageProps {
  imageKey: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProduceImage({
  imageKey,
  className,
  sizes = "100vw",
  priority,
}: ProduceImageProps) {
  const asset = getImage(imageKey);

  if (!asset.url) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden bg-[repeating-linear-gradient(115deg,var(--color-cream-2)_0px,var(--color-cream-2)_13px,rgba(23,34,28,0.05)_13px,rgba(23,34,28,0.05)_14px)]",
          className,
        )}
        role="img"
        aria-label={asset.alt}
      >
        <svg width="34" height="34" viewBox="0 0 38 38" fill="none" className="text-forest/35">
          <circle cx="19" cy="19" r="17.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
        </svg>
        <span className="font-label rounded-full border border-forest/25 bg-cream/70 px-4 py-1.5 text-[11px] tracking-[0.18em] text-forest/60 uppercase">
          Photography pending
        </span>
      </div>
    );
  }

  return (
    <Image
      src={asset.url}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
