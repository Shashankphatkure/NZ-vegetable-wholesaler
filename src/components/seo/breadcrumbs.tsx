import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  className,
  tone = "soil",
}: {
  items: { name: string; path: string }[];
  className?: string;
  tone?: "soil" | "cream";
}) {
  const muted = tone === "cream" ? "text-cream/60" : "text-soil/50";
  const strong = tone === "cream" ? "text-cream" : "text-soil";
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...items])} />
      <nav aria-label="Breadcrumb" className={cn("font-label text-[12px] tracking-[0.08em] uppercase", className)}>
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className={cn(muted, "hover:underline")}>
              Home
            </Link>
          </li>
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                <ChevronRight className={cn("h-3 w-3", muted)} aria-hidden="true" />
                {last ? (
                  <span className={strong} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className={cn(muted, "hover:underline")}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
