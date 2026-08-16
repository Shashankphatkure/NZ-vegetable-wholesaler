const items = [
  "Based in Pukekohe",
  "Fresh Produce",
  "B2B Supply",
  "Reliable Service",
  "Quality Focused",
  "10+ Years Experience",
  "Auckland & Hamilton",
];

function Track() {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <li
          key={item}
          className="font-label flex items-center gap-8 text-[12px] tracking-[0.12em] text-forest/75 uppercase"
        >
          {item}
          <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function TrustStrip() {
  return (
    <div className="overflow-hidden border-y border-soil/10 bg-cream-2 py-5">
      <div className="animate-marquee hover:[animation-play-state:paused] flex w-max motion-reduce:animate-none">
        <Track />
        <div aria-hidden="true">
          <Track />
        </div>
      </div>
    </div>
  );
}
