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

const HEADER_HEIGHT = 76;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled((document.scrollingElement?.scrollTop ?? window.scrollY) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    // A plain `overflow: hidden` lock silently resets the scroll position
    // to 0 while active (the browser has nothing to report a scroll offset
    // against), so closing the menu dumps the visitor back at the top of
    // the page instead of where they were. Freezing the body in place at
    // its current offset — and restoring the real scroll position on
    // close — is the standard fix for that.
    //
    // Reading/writing via `document.scrollingElement` rather than
    // `window.scrollY`/`window.scrollTo` — it's the browser's own,
    // spec-correct way of finding whichever element actually owns page
    // scroll (html vs body), rather than assuming it's always the window.
    const scrollingEl = document.scrollingElement;
    const scrollY = scrollingEl?.scrollTop ?? window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      if (scrollingEl) {
        scrollingEl.scrollTop = scrollY;
      } else {
        window.scrollTo(0, scrollY);
      }
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent bg-cream/95 backdrop-blur transition-shadow duration-300",
          scrolled && "border-soil/10 shadow-[0_1px_0_rgba(23,34,28,0.06)]",
        )}
      >
        <Container className="flex min-h-[76px] items-center justify-between gap-3 py-2">
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
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-forest lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </header>

      {/*
        Backdrop + mobile panel are rendered as SIBLINGS of <header>, not
        children of it. <header> has backdrop-blur, and per spec an element
        with filter/backdrop-filter creates a new containing block for its
        position:fixed descendants — nesting fixed elements inside it makes
        them position relative to the (small, ~76px) header box instead of
        the viewport, which silently breaks their placement. Keeping them
        outside sidesteps that entirely.

        They're also fixed rather than an in-flow dropdown so opening the
        menu never changes the header's own height — an in-flow dropdown
        grows the header at the very top of the document, and while
        scrolled, Chrome's scroll anchoring then jumps the viewport to
        compensate, which can scroll the menu out of view while body
        scroll is still locked, leaving the page stuck.
      */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 bg-soil/40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ top: HEADER_HEIGHT }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 z-40 max-h-[calc(100dvh-76px)] overflow-y-auto bg-cream shadow-[0_16px_32px_-16px_rgba(23,34,28,0.25)] transition-transform duration-300 ease-[var(--ease-produce)] lg:hidden",
          open ? "translate-y-0" : "pointer-events-none -translate-y-[calc(100%+8px)]",
        )}
        style={{ top: HEADER_HEIGHT }}
      >
        <Container className="flex flex-col gap-1 border-t border-soil/10 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
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
    </>
  );
}
