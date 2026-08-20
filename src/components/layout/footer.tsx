import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { siteConfig, navLinks } from "@/lib/site-config";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-forest text-cream">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="cream" />
            <p className="mt-5 text-[15px] leading-relaxed text-cream/70">
              Fresh produce supplied with experience, care and reliability
              across New Zealand.
            </p>
          </div>

          <div>
            <h3 className="font-label text-[12px] tracking-[0.16em] text-cream/50 uppercase">
              Navigate
            </h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-[15px] text-cream/85 transition-colors hover:text-kiwi"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-label text-[12px] tracking-[0.16em] text-cream/50 uppercase">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] text-cream/85">
              <li className="min-w-0">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex min-w-0 max-w-full items-center gap-2.5 transition-colors hover:text-kiwi"
                >
                  <Phone className="h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                  <span className="min-w-0 break-words">{siteConfig.phone}</span>
                </a>
              </li>
              <li className="min-w-0">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-w-0 max-w-full items-center gap-2.5 transition-colors hover:text-kiwi"
                >
                  <Mail className="h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                  <span className="min-w-0 truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li className="inline-flex min-w-0 items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                <span className="min-w-0">Pukekohe, New Zealand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="tear-line mt-14 flex flex-col gap-4 pt-8 text-[13px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-kiwi">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-kiwi">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
