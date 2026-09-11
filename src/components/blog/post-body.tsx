import { Button } from "@/components/ui/button";
import type { PostBlock } from "@/lib/types";

// Renders the structured article body. Plain semantic HTML — headings, lists
// and short paragraphs — is the format search engines and AI answer engines
// extract from most reliably, so there's no custom markup here on purpose.
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="prose-produce">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 font-display text-[26px] leading-tight font-bold text-soil sm:text-[30px]">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 font-display text-[20px] font-bold text-soil">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mt-5 text-[17px] leading-relaxed text-soil/80">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 flex flex-col gap-2.5 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-soil/80">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 flex flex-col gap-3">
                {block.items.map((item, n) => (
                  <li key={item} className="flex gap-4 text-[16px] leading-relaxed text-soil/80">
                    <span className="font-label mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/8 text-[12px] font-bold text-forest">
                      {n + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="mt-8 border-l-4 border-kiwi pl-6 font-accent text-[20px] italic text-soil/80">
                {block.text}
              </blockquote>
            );
          case "cta":
            return (
              <aside
                key={i}
                className="mt-12 flex flex-col gap-5 rounded-2xl bg-forest p-7 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <p className="max-w-md text-[16px] leading-relaxed text-cream/85">{block.text}</p>
                <Button href={block.href} className="shrink-0 bg-gold text-soil hover:bg-cream">
                  {block.label}
                </Button>
              </aside>
            );
        }
      })}
    </div>
  );
}
