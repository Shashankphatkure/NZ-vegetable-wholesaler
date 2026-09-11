// Renders one or more Schema.org objects as a JSON-LD script tag. Server
// component — the output is in the initial HTML, which is what crawlers and
// AI engines read.
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON-LD must be raw JSON; escape "<" so a stray "</script>" in
          // content can't break out of the tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\u003c"),
          }}
        />
      ))}
    </>
  );
}
