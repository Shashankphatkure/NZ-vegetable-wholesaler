"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <>
      <div className="h-14 lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-soil/10 bg-cream/95 backdrop-blur lg:hidden">
        <a
          href={siteConfig.phoneHref}
          className={cn(
            "flex items-center justify-center gap-2 py-3.5 text-[15px] font-semibold text-forest",
          )}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Us
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 border-l border-soil/10 bg-forest py-3.5 text-[15px] font-semibold text-cream"
        >
          <MessageSquareText className="h-4 w-4" aria-hidden="true" />
          Enquire
        </a>
      </div>
    </>
  );
}
