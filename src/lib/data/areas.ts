import type { Faq } from "@/lib/types";

// Service-area landing pages. One page per city / district we deliver to,
// each targeting "vegetable supplier <place>" style searches. Drive times are
// approximate from the Pukekohe depot. Delivery-day specifics are deliberately
// generic — TODO(client): confirm run days per area and we'll add them.

export interface ServiceArea {
  slug: string;
  name: string;
  /** Short qualifier for titles, e.g. "Auckland" for a suburb. */
  region: string;
  /** Approx road distance / time from the Pukekohe depot. */
  distanceKm: number;
  driveTime: string;
  imageKey: string;
  /** Meta description. */
  seoDescription: string;
  /** Direct-answer opening paragraph. */
  summary: string;
  /** Suburbs / towns covered on this run. */
  suburbs: string[];
  /** Who we typically supply here. */
  customerTypes: string[];
  /** Longer local context paragraphs. */
  body: string[];
  faqs: Faq[];
  /** Schema.org place type for areaServed. */
  placeType: "City" | "AdministrativeArea";
}

export const areas: ServiceArea[] = [
  {
    slug: "auckland",
    name: "Auckland",
    region: "Auckland",
    distanceKm: 50,
    driveTime: "45–60 minutes",
    imageKey: "heroHome",
    placeType: "City",
    seoDescription:
      "Wholesale vegetable supplier delivering to Auckland restaurants, cafes and caterers. Fresh produce from Pukekohe growers, delivered on scheduled runs across the city.",
    summary:
      "VegieFresh supplies fresh vegetables to restaurants, cafes, takeaways and caterers across Auckland, delivered with our own fleet from our depot in Pukekohe — about 50km south of the CBD. Because most of our potatoes, onions and greens are grown minutes from the depot, produce reaches Auckland kitchens a day or two out of the ground.",
    suburbs: [
      "Auckland CBD",
      "Parnell",
      "Newmarket",
      "Ponsonby",
      "Grey Lynn",
      "Mt Eden",
      "Epsom",
      "Remuera",
      "Ellerslie",
      "Penrose",
      "Onehunga",
      "Mt Wellington",
      "Panmure",
      "Howick",
      "Botany",
      "Flat Bush",
      "East Tamaki",
      "Otahuhu",
      "Mangere",
      "Papatoetoe",
      "Manukau",
      "Manurewa",
      "Takanini",
      "Papakura",
      "Drury",
      "North Shore (by arrangement)",
      "West Auckland (by arrangement)",
    ],
    customerTypes: [
      "Restaurants and bistros",
      "Cafes and brunch spots",
      "Takeaways and fish-and-chip shops",
      "Indian, Chinese, Thai and Vietnamese kitchens",
      "Caterers and event kitchens",
      "Hotels and function venues",
      "Central production kitchens",
    ],
    body: [
      "Auckland is our largest delivery area. Our runs come up from Pukekohe through Drury, Papakura and Manukau into the central isthmus and the eastern suburbs, with the CBD, Newmarket, Parnell and Ponsonby covered on the same schedule. North Shore and West Auckland are serviced by arrangement for regular accounts.",
      "Auckland kitchens typically run through the same core lines every week — Agria potatoes for chips and roasting, red and white onions, tomatoes, coriander and spring onion — and those are exactly the crops the Pukekohe district grows. Short transport distance means fewer handling steps and produce that holds up through the week.",
      "Deliveries are made in the morning wherever possible so produce is in your chiller before lunch service. Most Auckland customers are on a fixed weekly or twice-weekly day; high-volume kitchens can be scheduled more often.",
    ],
    faqs: [
      {
        question: "Which Auckland suburbs does VegieFresh deliver to?",
        answer:
          "Our regular Auckland runs cover the CBD, central suburbs (Parnell, Newmarket, Ponsonby, Mt Eden, Epsom, Remuera), the eastern suburbs (Ellerslie, Howick, Botany, East Tamaki) and all of South Auckland from Otahuhu through Manukau, Manurewa, Papakura and Drury. North Shore and West Auckland are covered by arrangement for regular accounts.",
      },
      {
        question: "How far is Pukekohe from central Auckland?",
        answer:
          "Pukekohe is about 50km south of Auckland's CBD, roughly 45–60 minutes by road via the Southern Motorway. That's close enough for morning delivery from a depot that sits in the middle of the growing district.",
      },
      {
        question: "Do you supply small cafes in Auckland or only large restaurants?",
        answer:
          "Both. We supply everything from single-site cafes taking a few 5kg and 10kg packs a week to central kitchens taking 20kg cases by the pallet. There is no fixed minimum for customers on an established delivery run.",
      },
    ],
  },
  {
    slug: "south-auckland",
    name: "South Auckland",
    region: "Auckland",
    distanceKm: 25,
    driveTime: "20–35 minutes",
    imageKey: "catOnions",
    placeType: "AdministrativeArea",
    seoDescription:
      "Fresh produce supplier for South Auckland restaurants, cafes and takeaways — Manukau, Papatoetoe, Manurewa, Papakura, Otahuhu and Mangere. Delivered from Pukekohe.",
    summary:
      "South Auckland is the closest part of the city to our Pukekohe depot, so it's our most frequent run. VegieFresh supplies restaurants, cafes, takeaways, dairies and caterers across Manukau, Papatoetoe, Manurewa, Papakura, Otahuhu, Mangere and the surrounding suburbs with fresh vegetables grown in the district next door.",
    suburbs: [
      "Manukau",
      "Papatoetoe",
      "Otara",
      "Otahuhu",
      "Mangere",
      "Mangere Bridge",
      "Favona",
      "Manurewa",
      "Wiri",
      "Clendon",
      "Takanini",
      "Papakura",
      "Drury",
      "Karaka",
      "Wattle Downs",
      "Conifer Grove",
    ],
    customerTypes: [
      "Indian, Fijian-Indian and Sri Lankan restaurants",
      "Chinese, Vietnamese and Thai kitchens",
      "Pacific Island food businesses",
      "Takeaways, dairies and bakeries",
      "Cafes and lunch bars",
      "Caterers and community kitchens",
    ],
    body: [
      "South Auckland has one of the most diverse food scenes in the country, and the produce it needs reflects that: high volumes of onions, garlic, ginger, coriander, daikon, cabbage and potatoes, often in larger pack sizes. Our catalogue is built around exactly those lines, with 20kg onion sacks and 20kg potato cases held for high-volume kitchens.",
      "Being 20–35 minutes from the depot means we can be flexible here — additional drops, top-up orders and larger standing orders are all straightforward on the South Auckland run.",
    ],
    faqs: [
      {
        question: "Do you deliver to Manukau and Papatoetoe?",
        answer:
          "Yes. Manukau, Papatoetoe, Otara, Otahuhu and Mangere are on our regular South Auckland run from Pukekohe, along with Manurewa, Takanini, Papakura and Drury.",
      },
      {
        question: "Can you supply bulk onions, garlic and ginger for Indian restaurants?",
        answer:
          "Yes. Onions in 5kg, 10kg and 20kg sacks, plus fresh garlic, ginger, coriander and daikon are core lines for us and are supplied to Indian, Sri Lankan and Fijian-Indian kitchens across South Auckland every week.",
      },
      {
        question: "How quickly can you deliver to South Auckland?",
        answer:
          "Usually next business day, and often same-day for top-ups on an existing run, because South Auckland is our closest delivery area.",
      },
    ],
  },
  {
    slug: "manukau",
    name: "Manukau",
    region: "South Auckland",
    distanceKm: 28,
    driveTime: "25–35 minutes",
    imageKey: "heroShop",
    placeType: "City",
    seoDescription:
      "Wholesale vegetable supplier in Manukau. Fresh potatoes, onions, tomatoes, greens and herbs delivered to Manukau restaurants, cafes and takeaways from Pukekohe.",
    summary:
      "VegieFresh delivers fresh wholesale vegetables to restaurants, cafes, takeaways and food-court kitchens across Manukau and the surrounding suburbs — Wiri, Papatoetoe, Otara, Flat Bush and Botany — from our depot in Pukekohe, about 25–35 minutes away.",
    suburbs: [
      "Manukau Central",
      "Wiri",
      "Papatoetoe",
      "Otara",
      "Flat Bush",
      "Botany Downs",
      "East Tamaki",
      "Clover Park",
      "Goodwood Heights",
      "Totara Heights",
    ],
    customerTypes: [
      "Food-court and mall kitchens",
      "Restaurants and takeaways",
      "Cafes and lunch bars",
      "Caterers and event venues",
      "Hotel and conference kitchens",
    ],
    body: [
      "Manukau is a major commercial hub with a dense concentration of food businesses — from the Westfield food court and Manukau's restaurant strips to the industrial kitchens and caterers in Wiri and East Tamaki. We service all of them on the same run.",
      "Because Manukau sits directly on our route north from Pukekohe, it's one of the earliest drops of the morning. Produce is typically on-site before 9am for customers who want it early.",
    ],
    faqs: [
      {
        question: "Is Manukau on a regular VegieFresh delivery run?",
        answer:
          "Yes. Manukau is on our main South Auckland run and is one of the first drops of the morning coming up from Pukekohe.",
      },
      {
        question: "Do you supply food-court and mall kitchens in Manukau?",
        answer:
          "Yes. We supply several food-court and mall-based kitchens, which typically need consistent daily volumes of onions, potatoes, capsicum, cabbage and herbs.",
      },
    ],
  },
  {
    slug: "pukekohe",
    name: "Pukekohe & Franklin",
    region: "Auckland",
    distanceKm: 0,
    driveTime: "local",
    imageKey: "storySection",
    placeType: "City",
    seoDescription:
      "Local fresh produce supplier in Pukekohe. VegieFresh supplies restaurants, cafes and takeaways across Pukekohe, Waiuku, Tuakau, Pokeno, Bombay and the Franklin district.",
    summary:
      "VegieFresh is based in Pukekohe, and we supply the cafes, restaurants, takeaways and caterers of Pukekohe and the wider Franklin district — Waiuku, Tuakau, Pokeno, Bombay, Buckland, Patumahoe and Clarks Beach — with vegetables grown, quite literally, down the road.",
    suburbs: [
      "Pukekohe",
      "Buckland",
      "Patumahoe",
      "Paerata",
      "Bombay",
      "Ramarama",
      "Waiuku",
      "Kingseat",
      "Clarks Beach",
      "Tuakau",
      "Pokeno",
      "Mercer",
    ],
    customerTypes: [
      "Cafes and bakeries",
      "Restaurants and pubs",
      "Takeaways",
      "Sports clubs and function venues",
      "Rural caterers",
      "Schools and community kitchens",
    ],
    body: [
      "Pukekohe is New Zealand's vegetable-growing heartland — the volcanic soils around the town produce a large share of the country's potatoes and onions and a year-round supply of brassicas and greens. For a local kitchen, that means produce that was in the ground yesterday and a supplier who knows the growers by name.",
      "As the home run, Franklin gets the most flexible service we offer: small orders, short-notice top-ups and pickup from the depot by arrangement.",
    ],
    faqs: [
      {
        question: "Can I pick up produce from your Pukekohe depot?",
        answer:
          "For local Franklin businesses, pickup can be arranged — contact us to set a time. Most customers prefer delivery, which is included on our regular local run.",
      },
      {
        question: "Do you deliver to Waiuku, Tuakau and Pokeno?",
        answer:
          "Yes. Waiuku, Tuakau, Pokeno, Bombay and the rest of the Franklin district are covered on our local run from Pukekohe.",
      },
    ],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Waikato",
    distanceKm: 75,
    driveTime: "about 1 hour",
    imageKey: "heroServices",
    placeType: "City",
    seoDescription:
      "Wholesale vegetable supplier delivering to Hamilton restaurants, cafes and caterers. Fresh produce from Pukekohe growers, delivered on regular runs down the Waikato Expressway.",
    summary:
      "VegieFresh delivers fresh wholesale vegetables to restaurants, cafes, takeaways and caterers across Hamilton — about 75km and an hour down the Waikato Expressway from our Pukekohe depot. Hamilton is on a regular run, not an occasional freight job, so Hamilton kitchens get the same scheduled service as Auckland.",
    suburbs: [
      "Hamilton Central",
      "Hamilton East",
      "Frankton",
      "Te Rapa",
      "Rototuna",
      "Chartwell",
      "Hillcrest",
      "Dinsdale",
      "Nawton",
      "Glenview",
      "Melville",
      "Ruakura",
      "Horsham Downs",
    ],
    customerTypes: [
      "Restaurants and bistros",
      "Cafes and brunch venues",
      "Takeaways and fish-and-chip shops",
      "Indian, Asian and Middle Eastern kitchens",
      "Caterers and event venues",
      "University and hospitality kitchens",
    ],
    body: [
      "Hamilton's food scene has grown fast, and a lot of its produce still comes via wholesale markets in Auckland with extra handling in between. Sourcing directly from Pukekohe growers and running straight down the Expressway removes a step — produce arrives in Hamilton the same day it leaves the depot.",
      "Our Hamilton run covers the central city, Hamilton East, Frankton, Te Rapa and the northern and eastern suburbs. Nearby Waikato towns — Cambridge, Te Awamutu, Huntly and Ngaruawahia — can be added to the run for regular accounts.",
      "For Hamilton customers we recommend a fixed weekly or twice-weekly delivery day so orders can be consolidated onto the run.",
    ],
    faqs: [
      {
        question: "Does VegieFresh deliver to Hamilton regularly?",
        answer:
          "Yes. Hamilton is on a regular scheduled run from Pukekohe, alongside Auckland. Restaurants and cafes in Hamilton can set up a fixed weekly or twice-weekly delivery day.",
      },
      {
        question: "How far is Pukekohe from Hamilton?",
        answer:
          "About 75km, or roughly an hour by road via the Waikato Expressway. Produce leaving the depot in the morning is in Hamilton kitchens the same day.",
      },
      {
        question: "Do you deliver to Cambridge, Te Awamutu or Huntly?",
        answer:
          "Yes, for regular accounts. Cambridge, Te Awamutu, Huntly and Ngaruawahia can be added to the Hamilton run — contact us with your location and expected volumes.",
      },
    ],
  },
  {
    slug: "waikato",
    name: "Waikato",
    region: "Waikato",
    distanceKm: 75,
    driveTime: "1–1.5 hours",
    imageKey: "nzLandscape",
    placeType: "AdministrativeArea",
    seoDescription:
      "Fresh produce supplier for Waikato food businesses — Hamilton, Cambridge, Te Awamutu, Huntly, Ngaruawahia and surrounding towns. Wholesale vegetables from Pukekohe.",
    summary:
      "VegieFresh supplies wholesale fresh vegetables to restaurants, cafes, takeaways and caterers across the Waikato — Hamilton, Cambridge, Te Awamutu, Huntly, Ngaruawahia, Morrinsville and surrounding towns — delivered from our depot in Pukekohe at the northern edge of the region.",
    suburbs: [
      "Hamilton",
      "Cambridge",
      "Te Awamutu",
      "Huntly",
      "Ngaruawahia",
      "Te Kauwhata",
      "Morrinsville",
      "Matamata (by arrangement)",
      "Raglan (by arrangement)",
    ],
    customerTypes: [
      "Restaurants, cafes and pubs",
      "Takeaways and bakeries",
      "Rural caterers and event venues",
      "Sports clubs and race-day catering",
      "Lodges and accommodation kitchens",
    ],
    body: [
      "Pukekohe sits right at the top of the Waikato, so towns along the Expressway — Pokeno, Te Kauwhata, Huntly, Ngaruawahia — are on the way to Hamilton and are easy to service. Cambridge, Te Awamutu and Morrinsville are covered as extensions of the Hamilton run.",
      "Waikato kitchens outside Hamilton often struggle to get consistent wholesale produce without paying for freight. Because these towns sit on or near an existing run, we can offer scheduled delivery rather than ad-hoc courier pricing.",
    ],
    faqs: [
      {
        question: "Which Waikato towns does VegieFresh deliver to?",
        answer:
          "Hamilton is our main Waikato run. Cambridge, Te Awamutu, Huntly, Ngaruawahia, Te Kauwhata and Morrinsville are covered as extensions of that run for regular accounts. Matamata and Raglan are by arrangement.",
      },
      {
        question: "Is there a freight charge for Waikato deliveries?",
        answer:
          "Towns on our regular Hamilton run are delivered at standard terms. For locations further afield we'll confirm any delivery charge when you enquire — it's usually well below courier freight because the truck is already heading that way.",
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
