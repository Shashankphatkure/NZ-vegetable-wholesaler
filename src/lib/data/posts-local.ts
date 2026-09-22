import type { Post } from "@/lib/types";

// Location-focused articles — the local-SEO half of the blog. Each targets a
// "<produce/supplier> + <place>" query and links to the matching /areas page.

export const localPosts: Post[] = [
  {
    slug: "fresh-produce-suppliers-hamilton-what-waikato-restaurants-should-look-for",
    title: "Fresh Produce Suppliers in Hamilton: What Waikato Restaurants Should Look For",
    excerpt:
      "How produce reaches Hamilton kitchens, why much of it takes the long way round via Auckland, and what to ask a vegetable supplier before you sign up in the Waikato.",
    publishedAt: "2026-09-11",
    category: "Delivery & Service",
    imageKey: "heroServices",
    readingMinutes: 5,
    keywords: [
      "choosing a produce supplier Hamilton",
      "Waikato restaurant produce buying guide",
      "fresh vegetable delivery Hamilton restaurants",
    ],
    keyTakeaway:
      "Hamilton restaurants and cafes should look for a produce supplier that sources directly from the Pukekohe and Waikato growing districts and runs a scheduled delivery to Hamilton, rather than one that buys through the Auckland markets and freights it down. Pukekohe is about an hour up the Waikato Expressway, so direct delivery means produce harvested one day is in a Hamilton chiller the next.",
    body: [
      {
        type: "p",
        text: "Hamilton sits in the middle of one of New Zealand's most productive farming regions, but a surprising amount of the fresh produce in its restaurants has travelled north to the Auckland wholesale markets and back down again before it reaches the kitchen. That round trip adds a day or two, an extra set of hands, and a margin. Here's what Waikato food businesses should look for instead.",
      },
      { type: "h2", text: "Where Hamilton's vegetables actually come from" },
      {
        type: "p",
        text: "The bulk of the potatoes, onions and brassicas eaten in Hamilton are grown in two places: the Pukekohe district at the top of the Waikato, and the market gardens around the Waikato itself — Ohaupo, Te Awamutu, Matamata and the river flats. Glasshouse tomatoes, cucumbers and capsicums come from growers around Auckland and the northern Waikato. All of it is within 90 minutes of Hamilton's CBD.",
      },
      { type: "h2", text: "The Auckland-markets detour" },
      {
        type: "p",
        text: "Many produce wholesalers serving Hamilton buy at the Auckland wholesale markets in Mt Wellington, consolidate, and truck south. It works, but it means Pukekohe-grown onions travel 50km north, sit in a market, then travel 125km south to reach you. A supplier based in Pukekohe with its own Hamilton run skips the detour entirely — the truck heads straight down the Expressway.",
      },
      { type: "h2", text: "Five questions to ask a Hamilton produce supplier" },
      {
        type: "ol",
        items: [
          "Is Hamilton a scheduled run or an ad-hoc freight job? You want a fixed day.",
          "Where are your potatoes and onions grown, and do you buy direct from the grower?",
          "What time does the truck reach Hamilton? Morning delivery matters for lunch service.",
          "Do you cover Cambridge, Te Awamutu or Huntly if we open a second site?",
          "What happens if a case is rejected — credit, replacement, and who do I call?",
        ],
      },
      { type: "h2", text: "What a good Hamilton delivery looks like" },
      {
        type: "ul",
        items: [
          "Produce leaves the depot and reaches Hamilton the same morning.",
          "Leafy greens and herbs stay chilled in transit; potatoes and onions stay dry.",
          "A weekly price list arrives before you order, reflecting the NZ market.",
          "One phone number, answered by the person who packed the truck.",
        ],
      },
      {
        type: "cta",
        text: "VegieFresh runs a scheduled delivery from Pukekohe to Hamilton, with Cambridge, Te Awamutu and Huntly available for regular accounts.",
        href: "/areas/hamilton",
        label: "Hamilton delivery details",
      },
    ],
    faqs: [
      {
        question: "Is there a wholesale vegetable supplier that delivers to Hamilton from Pukekohe?",
        answer:
          "Yes. VegieFresh is based in Pukekohe and runs a regular scheduled delivery to Hamilton restaurants, cafes and caterers, about an hour down the Waikato Expressway.",
      },
      {
        question: "How often can a Hamilton restaurant get produce delivered?",
        answer:
          "Most Hamilton customers are on a weekly or twice-weekly delivery day. Higher-volume kitchens can be scheduled more often on request.",
      },
    ],
    relatedProducts: ["agria-potato", "red-onion", "broccoli"],
  },
  {
    slug: "where-do-auckland-restaurants-get-their-vegetables",
    title: "Where Do Auckland Restaurants Get Their Vegetables? South Auckland's Growing Belt Explained",
    excerpt:
      "Most of the vegetables on Auckland menus are grown 30–60km south of the city in Pukekohe, Bombay and the Franklin district. Here's how the supply chain works and how to shorten it.",
    publishedAt: "2026-09-11",
    category: "Buying Guides",
    imageKey: "catPotatoes",
    readingMinutes: 5,
    keywords: [
      "Auckland restaurant vegetable supplier",
      "where are Auckland vegetables grown",
      "Pukekohe produce Auckland restaurants",
    ],
    keyTakeaway:
      "Most of the potatoes, onions, brassicas and leafy greens served in Auckland restaurants are grown in the Pukekohe and Franklin district, 30–60km south of the city, along with glasshouse tomatoes and cucumbers from the same area. They typically reach kitchens via the Auckland wholesale markets or via a produce wholesaler. Buying from a supplier based in the growing district removes a step and a day.",
    body: [
      {
        type: "p",
        text: "Ask most Auckland chefs where their vegetables come from and the answer is 'the supplier'. Ask the supplier and the answer is usually 'the markets'. Keep pulling on the thread and you almost always end up in the same place: the red volcanic soils around Pukekohe, half an hour south of Manukau.",
      },
      { type: "h2", text: "The growing belt south of the city" },
      {
        type: "p",
        text: "Pukekohe, Bombay, Patumahoe, Buckland and Tuakau form a horticultural belt that supplies a large share of New Zealand's field vegetables — potatoes, onions, cabbage, cauliflower, broccoli, lettuce, spring onions, carrots. The soils drain well, frosts are light, and growers can plant and harvest through winter. Nearby glasshouses grow tomatoes, cucumbers and capsicums year-round. It's the reason Auckland has fresh local brassicas in July.",
      },
      { type: "h2", text: "The usual route to your kitchen" },
      {
        type: "ol",
        items: [
          "Grower harvests, grades and packs in the Franklin district.",
          "Produce is trucked north to the Auckland wholesale markets or a wholesaler's depot.",
          "A wholesaler buys, re-sorts and consolidates orders overnight.",
          "Delivery trucks fan out across the city the next morning.",
        ],
      },
      {
        type: "p",
        text: "That's two to three days from harvest to your chiller in a good week. Every step is a handling point, and every handling point costs freshness on soft lines like herbs, spinach and tomatoes.",
      },
      { type: "h2", text: "The shorter route" },
      {
        type: "p",
        text: "A wholesaler based in Pukekohe buys directly from growers in the district — often the same day the crop is packed — and delivers into Auckland the next morning. For South Auckland and Manukau that's a 20–35 minute run; for the CBD and central suburbs, under an hour. Fewer handling points, fresher produce, and a supplier who can tell you which grower your onions came from.",
      },
      { type: "h2", text: "What to ask your current supplier" },
      {
        type: "ul",
        items: [
          "Which district are your potatoes and onions from?",
          "Do you buy direct from growers or through the markets?",
          "How many days between harvest and delivery on leafy greens?",
          "Where is your depot, and how long is the run to my suburb?",
        ],
      },
      {
        type: "cta",
        text: "VegieFresh is based in Pukekohe, buys from Franklin-district growers and delivers across Auckland with its own fleet.",
        href: "/areas/auckland",
        label: "Auckland delivery details",
      },
    ],
    faqs: [
      {
        question: "Which area grows most of Auckland's vegetables?",
        answer:
          "The Pukekohe and Franklin district, 30–60km south of central Auckland, grows most of the city's field vegetables — potatoes, onions, brassicas, lettuce and spring onions — with glasshouse tomatoes, cucumbers and capsicums grown nearby.",
      },
      {
        question: "Can Auckland restaurants buy vegetables direct from Pukekohe?",
        answer:
          "Most growers sell in bulk to wholesalers rather than to individual restaurants. The practical route is a Pukekohe-based wholesaler such as VegieFresh, which buys from local growers and delivers trade pack sizes into Auckland kitchens.",
      },
    ],
    relatedProducts: ["agria-potato", "white-onion", "cabbage", "spring-onion"],
  },
  {
    slug: "produce-supplier-south-auckland-manukau-papatoetoe-restaurants",
    title: "Finding a Produce Supplier in South Auckland: A Guide for Manukau, Papatoetoe and Manurewa Kitchens",
    excerpt:
      "South Auckland's food scene runs on onions, garlic, ginger, coriander and potatoes in volume. Here's what local restaurants, takeaways and caterers should look for in a vegetable supplier.",
    publishedAt: "2026-09-11",
    category: "Buying Guides",
    imageKey: "catRoots",
    readingMinutes: 5,
    keywords: [
      "choosing a produce supplier South Auckland",
      "restaurant vegetable delivery Papatoetoe",
      "wholesale onions garlic ginger Manurewa",
    ],
    keyTakeaway:
      "South Auckland kitchens — Manukau, Papatoetoe, Otahuhu, Mangere, Manurewa and Papakura — are 20–35 minutes from the Pukekohe growing district, so a Pukekohe-based supplier can deliver next-day and often same-day top-ups. Look for a supplier that stocks the high-volume lines the area's Indian, Chinese, Pacific and takeaway kitchens actually use: onions in 20kg sacks, fresh garlic and ginger, coriander, cabbage, daikon and potatoes.",
    body: [
      {
        type: "p",
        text: "South Auckland is one of the busiest and most diverse food regions in the country, and it sits right next door to where much of New Zealand's produce is grown. That should make sourcing easy — but a lot of local kitchens still get their vegetables via a depot on the other side of the city. Here's how to do better.",
      },
      { type: "h2", text: "What South Auckland kitchens actually order" },
      {
        type: "p",
        text: "The order sheets in Manukau and Papatoetoe look different from Ponsonby's. Volume lines are onions (often 20kg sacks), garlic and ginger, coriander and spring onion, cabbage, daikon, capsicum, and potatoes for takeaways. A supplier whose catalogue is built around cafe brunch lines won't hold enough of these — ask specifically about jumbo onions, bulk garlic and ginger, and bunched herbs.",
      },
      { type: "h2", text: "Why depot location matters here" },
      {
        type: "p",
        text: "Manukau is about 28km from Pukekohe; Papakura about 15km. That means a Pukekohe-based supplier reaches South Auckland first thing in the morning and can come back the same day for a top-up if a Friday goes bigger than expected. Suppliers based on the North Shore or west of the city can't offer that flexibility to South Auckland without a second truck.",
      },
      { type: "h2", text: "Suburbs on a typical South Auckland run" },
      {
        type: "ul",
        items: [
          "Manukau, Wiri and East Tamaki",
          "Papatoetoe, Otara and Otahuhu",
          "Mangere and Mangere Bridge",
          "Manurewa, Clendon and Wattle Downs",
          "Takanini, Papakura, Drury and Karaka",
        ],
      },
      { type: "h2", text: "Checklist for South Auckland food businesses" },
      {
        type: "ol",
        items: [
          "Confirm they stock 20kg onion sacks and bulk garlic and ginger.",
          "Ask where the depot is and what time the truck reaches your suburb.",
          "Ask whether same-day top-ups are possible for regular accounts.",
          "Request a weekly price list and compare it on the lines you use most, not the whole sheet.",
          "Start with a two-week trial before moving the account.",
        ],
      },
      {
        type: "cta",
        text: "VegieFresh's South Auckland run is our closest and most frequent — Manukau, Papatoetoe, Manurewa and Papakura are all on it.",
        href: "/areas/south-auckland",
        label: "South Auckland delivery details",
      },
    ],
    faqs: [
      {
        question: "Is there a vegetable supplier that delivers to Manukau and Papatoetoe daily?",
        answer:
          "VegieFresh delivers to Manukau, Papatoetoe and the rest of South Auckland on regular runs from Pukekohe, 20–35 minutes away. Daily delivery can be arranged for high-volume kitchens, and same-day top-ups are often possible for regular accounts.",
      },
      {
        question: "Do you supply bulk onions, garlic and ginger to Indian restaurants in South Auckland?",
        answer:
          "Yes. Onions in 5kg, 10kg and 20kg sacks plus fresh garlic, ginger, coriander and daikon are core lines supplied to Indian, Sri Lankan and Fijian-Indian kitchens across South Auckland every week.",
      },
    ],
    relatedProducts: ["white-jumbo-onion", "garlic", "ginger", "fresh-coriander"],
  },
];
