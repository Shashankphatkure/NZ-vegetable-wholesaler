import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * No brand name or logo has been supplied by the client yet. This renders
 * an honest placeholder mark (a grading-stamp seal, echoing the founder's
 * packhouse background) plus bracketed placeholder text — both are a
 * single source of truth via siteConfig.name, ready to swap for the real
 * wordmark/logo file later.
 */
export function Logo({ tone = "forest" }: { tone?: "forest" | "cream" }) {
  const color = tone === "cream" ? "text-cream" : "text-forest";

  return (
    <Link href="/" className={cn("flex items-center gap-3", color)}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="19" cy="19" r="17.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
        <path
          d="M12.5 19.5L16.8 24L26 14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[17px] leading-tight font-bold tracking-tight">
        {siteConfig.name}
        <span className="font-label block text-[10px] font-normal tracking-[0.2em] uppercase opacity-60">
          Fresh Produce, NZ
        </span>
      </span>
    </Link>
  );
}
