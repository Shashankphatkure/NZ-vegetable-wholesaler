// Customer testimonials.
//
// The entries below are PLACEHOLDERS written to fill the section until the
// client supplies real quotes. `placeholder: true` keeps Review /
// AggregateRating schema switched off, so Google never sees invented ratings
// as structured data (that's a rich-results penalty). When real testimonials
// arrive, replace these and set `placeholder: false` (or omit it).
//
// TODO(client): supply 3–6 short quotes from restaurant/cafe customers, with
// permission to use their name and business.

export interface Testimonial {
  quote: string;
  author: string;
  /** Business name and suburb, e.g. "Owner, Spice Garden — Papatoetoe". */
  role: string;
  /** 1–5. Omit if the customer didn't give a star rating. */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** ISO date the review was given. */
  date?: string;
  /** True while the quote is a stand-in — suppresses schema output. */
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We switched our onions, garlic and ginger to VegieFresh and the difference in freshness was obvious in the first week. The 20kg sacks turn up every Tuesday before we open, and Satwant answers the phone himself.",
    author: "Harpreet",
    role: "Owner, Indian restaurant — Papatoetoe",
    rating: 5,
    date: "2026-06-14",
    placeholder: true,
  },
  {
    quote:
      "Our Agria comes from a grower about ten minutes from their depot. Chips have been consistent all winter, which is more than I could say for our last supplier.",
    author: "Dan",
    role: "Head chef, gastropub — Hamilton East",
    rating: 5,
    date: "2026-07-02",
    placeholder: true,
  },
  {
    quote:
      "Small cafe, small orders — a couple of 5kg packs and herbs twice a week. Never made to feel like we're too small an account. Coriander actually lasts the week now.",
    author: "Mel",
    role: "Cafe owner — Mt Eden",
    rating: 5,
    date: "2026-07-21",
    placeholder: true,
  },
  {
    quote:
      "We do event catering across South Auckland and volumes swing a lot week to week. VegieFresh has handled a same-day top-up more than once. Reliable, straightforward, fair pricing.",
    author: "Sione",
    role: "Catering manager — Manukau",
    rating: 5,
    date: "2026-08-05",
    placeholder: true,
  },
  {
    quote:
      "Weekly price list arrives Sunday night, order goes in Monday, truck's here Tuesday morning. That rhythm has made ordering the easiest part of my week.",
    author: "Priya",
    role: "Owner, takeaway — Manurewa",
    rating: 4,
    date: "2026-08-19",
    placeholder: true,
  },
  {
    quote:
      "Brassicas and greens arrive cold and tight, not wilted from sitting in a market overnight. For a Hamilton kitchen that's been the biggest change.",
    author: "James",
    role: "Chef-owner, bistro — Hamilton Central",
    rating: 5,
    date: "2026-08-28",
    placeholder: true,
  },
];
