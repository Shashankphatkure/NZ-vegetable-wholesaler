import { Container } from "@/components/ui/container";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export function LegalContent({
  lastUpdated,
  sections,
}: {
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <p className="font-label text-[12px] tracking-[0.14em] text-soil/50 uppercase">
          Last updated {lastUpdated}
        </p>

        <div className="mt-8 flex min-w-0 flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading} className="min-w-0">
              <h2 className="font-display text-[21px] font-bold text-soil">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-4 text-[15px] leading-relaxed break-words text-soil/75">
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-2 pl-5">
                    {section.list.map((item, i) => (
                      <li key={i} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
