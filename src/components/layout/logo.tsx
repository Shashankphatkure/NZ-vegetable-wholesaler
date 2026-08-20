import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Logo({ tone = "forest" }: { tone?: "forest" | "cream" }) {
  if (tone === "cream") {
    return (
      <Link href="/" className="inline-flex min-w-0 shrink-0 items-center gap-2.5">
        <Image
          src="/images/logo-icon.png"
          alt=""
          width={339}
          height={318}
          className="h-8 w-auto shrink-0 sm:h-9"
        />
        <span className="truncate font-display text-[20px] font-bold tracking-tight text-cream sm:text-[22px]">
          {siteConfig.name}
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex min-w-0 shrink-0 items-center")}>
      <Image
        src="/images/logo.png"
        alt={siteConfig.name}
        width={1142}
        height={330}
        priority
        className="h-8 w-auto sm:h-10"
      />
    </Link>
  );
}
