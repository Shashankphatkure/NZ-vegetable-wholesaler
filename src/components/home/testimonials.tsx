import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { testimonials } from "@/lib/data/testimonials";
import { ORG_ID } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

// Renders nothing until testimonials exist (see testimonials.ts). Review /
// AggregateRating schema is only emitted once every entry is a real,
// non-placeholder quote.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  const allReal = testimonials.every((t) => !t.placeholder);
  const rated = testimonials.filter((t) => t.rating);
  const avg =
    rated.length > 0
      ? rated.reduce((sum, t) => sum + (t.rating ?? 0), 0) / rated.length
      : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: siteConfig.name,
    ...(avg
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avg.toFixed(1),
            reviewCount: rated.length,
            bestRating: 5,
          },
        }
      : {}),
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.author },
      ...(t.rating
        ? { reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 } }
        : {}),
      ...(t.date ? { datePublished: t.date } : {}),
    })),
  };

  return (
    <section className="bg-cream-2 py-20 lg:py-28">
      {allReal && <JsonLd data={schema} />}
      <Container>
        <SectionHeading
          eyebrow="What Customers Say"
          title="Trusted by kitchens across Auckland and Hamilton"
          align="center"
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author + t.quote.slice(0, 20)} className="flex flex-col rounded-2xl border border-soil/10 bg-white p-7">
              <Quote className="h-6 w-6 text-kiwi" aria-hidden="true" />
              {t.rating && (
                <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < (t.rating ?? 0) ? "fill-gold text-gold" : "text-soil/20"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}
              <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-soil/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-soil/10 pt-4">
                <p className="font-display text-[14px] font-bold text-soil">{t.author}</p>
                <p className="text-[13px] text-soil/55">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
