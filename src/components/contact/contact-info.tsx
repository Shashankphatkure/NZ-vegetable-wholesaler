import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.address.full,
)}&output=embed`;

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <a
        href={siteConfig.phoneHref}
        className="group flex items-center gap-4 rounded-xl border border-soil/10 bg-white p-5 transition-colors hover:border-forest/30"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest/8 text-forest">
          <Phone className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="font-label text-[11px] tracking-[0.14em] text-soil/45 uppercase">
            Phone
          </p>
          <p className="font-display break-words text-[16px] font-bold text-soil group-hover:text-forest">
            {siteConfig.phone}
          </p>
        </div>
      </a>

      <a
        href={`mailto:${siteConfig.email}`}
        className="group flex items-center gap-4 rounded-xl border border-soil/10 bg-white p-5 transition-colors hover:border-forest/30"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest/8 text-forest">
          <Mail className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="font-label text-[11px] tracking-[0.14em] text-soil/45 uppercase">
            Email
          </p>
          <p className="font-display truncate text-[16px] font-bold text-soil group-hover:text-forest">
            {siteConfig.email}
          </p>
        </div>
      </a>

      <div className="flex items-start gap-4 rounded-xl border border-soil/10 bg-white p-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest/8 text-forest">
          <MapPin className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="font-label text-[11px] tracking-[0.14em] text-soil/45 uppercase">
            Address
          </p>
          <p className="font-display break-words text-[16px] font-bold text-soil">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            {siteConfig.address.line3}
          </p>
        </div>
      </div>

      <div className="relative mt-1 aspect-[4/3] overflow-hidden rounded-xl border border-soil/10 sm:aspect-video">
        <iframe
          title="Map showing our location in Pukekohe, New Zealand"
          src={mapSrc}
          className="h-full w-full grayscale-[0.2]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
