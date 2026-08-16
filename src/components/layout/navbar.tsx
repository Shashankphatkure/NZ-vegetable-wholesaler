"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-cream/95 backdrop-blur transition-shadow duration-300",
        scrolled && "border-soil/10 shadow-[0_1px_0_rgba(23,34,28,0.06)]",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-[15px] font-medium text-soil/75 transition-colors hover:text-forest",
                  active && "text-forest",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-[1px] h-[2px] scale-x-0 bg-leaf transition-transform duration-300",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-forest lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-cream transition-[grid-template-rows] duration-300 ease-[var(--ease-produce)] lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 border-t border-soil/10 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-soil hover:bg-soil/5"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 w-full justify-center"
            >
              Request a Quote
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
