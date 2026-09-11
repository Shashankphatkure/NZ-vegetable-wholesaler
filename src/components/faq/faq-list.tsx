import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

// Native <details> so every answer is in the server HTML (crawlable, no JS)
// and still collapsible for readers. Pass `schema={false}` when the page
// already emits a FAQPage block for a bigger set, to avoid duplicates.
export function FaqList({
  faqs,
  schema = true,
  className,
}: {
  faqs: Faq[];
  schema?: boolean;
  className?: string;
}) {
  return (
    <>
      {schema && <JsonLd data={faqSchema(faqs)} />}
      <div className={cn("divide-y divide-soil/10 rounded-2xl border border-soil/10 bg-white", className)}>
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-6 py-5 sm:px-8">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[17px] leading-snug font-bold text-soil group-hover:text-forest">
                {faq.question}
              </h3>
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-soil/15 text-soil/60 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-soil/70">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
