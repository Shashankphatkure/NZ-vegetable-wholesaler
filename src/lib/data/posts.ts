import type { Post } from "@/lib/types";
import { localPosts } from "@/lib/data/posts-local";

// Blog / resource articles. Each post opens with a `keyTakeaway` — a short,
// self-contained answer that AI engines and featured snippets can quote —
// then expands with H2/H3 sections. Dates are ISO; keep `updatedAt` current
// when content changes so the sitemap and Article schema reflect it.

const topicalPosts: Post[] = [
  {
    slug: "how-to-choose-a-produce-supplier-for-your-restaurant-auckland",
    title: "How to Choose a Fresh Produce Supplier for Your Restaurant in Auckland",
    excerpt:
      "What to check before you sign up with a vegetable wholesaler in Auckland or Hamilton: delivery reliability, sourcing, pack sizes, pricing and communication.",
    publishedAt: "2026-09-01",
    category: "Buying Guides",
    imageKey: "heroHome",
    readingMinutes: 6,
    keywords: [
      "how to choose a wholesale vegetable supplier",
      "restaurant vegetable supplier NZ",
      "wholesale vegetable supplier Auckland",
    ],
    keyTakeaway:
      "The best fresh produce supplier for a restaurant is the one that delivers consistently on the days you need, sources from NZ growers close to your region, packs in sizes that match your volume, and picks up the phone when something goes wrong. In Auckland and Hamilton, a Pukekohe-based supplier has a natural advantage on freshness because the produce is grown minutes from the depot.",
    body: [
      {
        type: "p",
        text: "Most kitchens don't switch produce suppliers because of price. They switch because a delivery didn't turn up on a Friday, a case of tomatoes came in soft, or nobody answered the phone. Choosing a supplier is really about choosing who you trust to show up every week. Here is what to check.",
      },
      { type: "h2", text: "1. Delivery days and coverage" },
      {
        type: "p",
        text: "Ask exactly which days the supplier runs to your suburb, what the cut-off time is for next-day delivery, and whether they run their own trucks or subcontract. A supplier with its own fleet has direct control over timing. Confirm coverage for your specific location — 'Auckland' can mean the CBD only, or it can mean everything from Pukekohe to Albany. If you are in Hamilton or the Waikato, ask whether that's a regular run or an ad-hoc freight job.",
      },
      { type: "h2", text: "2. Where the produce is actually grown" },
      {
        type: "p",
        text: "New Zealand's biggest vegetable-growing area for potatoes, onions and brassicas is Pukekohe and the wider Franklin district, south of Auckland. Glasshouse tomatoes, cucumbers and capsicums are mostly grown around Auckland and the Waikato. A supplier that sources from these growers directly and is based in the region will typically deliver produce that was harvested one to two days earlier. Ask the question plainly: 'Where do your potatoes come from?' A good supplier will tell you the district, and often the grower.",
      },
      { type: "h2", text: "3. Pack sizes that match your volume" },
      {
        type: "p",
        text: "A busy restaurant going through 60kg of potatoes a week wants 20kg cases. A cafe using 8kg wants 5kg or 10kg packs so nothing sits in the store going green. Check that the supplier offers the pack sizes you need across the lines you use most — usually potatoes, onions, tomatoes and leafy greens — rather than forcing everything into one case size.",
      },
      { type: "h2", text: "4. Pricing transparency" },
      {
        type: "p",
        text: "Fresh produce prices move every week with the season and weather. What matters is not the lowest price on one line this week but whether the supplier sends a clear weekly price list, explains sudden jumps (for example, tomatoes in mid-winter), and doesn't quietly substitute a lower grade. Ask for a sample price list before committing.",
      },
      { type: "h2", text: "5. Quality handling and cold chain" },
      {
        type: "ul",
        items: [
          "Are leafy greens and herbs kept chilled between grower and your door?",
          "Are potatoes and onions stored dry and dark, not in a walk-in chiller?",
          "What happens if a case arrives below standard — credit, replacement, or an argument?",
          "Does the driver hand over the delivery or leave it at the back door in the sun?",
        ],
      },
      { type: "h2", text: "6. Communication" },
      {
        type: "p",
        text: "The single best predictor of a good supplier relationship is whether the owner or manager answers the phone. Small, owner-operated wholesalers often win here: the person who takes your order is the person loading the truck. Test it — call at 6am on a weekday and see what happens.",
      },
      { type: "h2", text: "A simple checklist" },
      {
        type: "ol",
        items: [
          "Confirm delivery days, cut-off times and your exact address is covered.",
          "Ask where the potatoes, onions and tomatoes are grown.",
          "Match pack sizes to your weekly usage.",
          "Request a sample price list and ask how substitutions are handled.",
          "Ask what happens when a case is rejected.",
          "Start with a two-week trial order before moving your whole account.",
        ],
      },
      {
        type: "cta",
        text: "VegieFresh is a Pukekohe-based wholesale supplier delivering to restaurants and cafes across Auckland and Hamilton with our own fleet.",
        href: "/contact",
        label: "Request a price list",
      },
    ],
    faqs: [
      {
        question: "Should a restaurant use one produce supplier or several?",
        answer:
          "Most restaurants run one primary supplier for the bulk of their vegetables and a backup for specialty lines. One primary account gives you better pricing, a consistent delivery day and one person to call — but keep a second contact so a missed delivery never stops service.",
      },
      {
        question: "What is a reasonable minimum order for produce delivery in Auckland?",
        answer:
          "It varies by supplier. Many wholesalers set a minimum for one-off deliveries but waive it for customers on a regular weekly run. VegieFresh works with businesses of all sizes and confirms any minimum when you enquire.",
      },
    ],
    relatedProducts: ["agria-potato", "red-onion", "tomato"],
  },
  {
    slug: "nz-seasonal-vegetable-guide-for-chefs",
    title: "New Zealand Seasonal Vegetable Guide for Chefs and Cafe Owners",
    excerpt:
      "A month-by-month guide to what's in season in New Zealand — potatoes, onions, brassicas, tomatoes, herbs and roots — and how to plan menus and ordering around it.",
    publishedAt: "2026-09-03",
    category: "Seasonal Guides",
    imageKey: "nzLandscape",
    readingMinutes: 7,
    keywords: [
      "NZ seasonal vegetables",
      "what vegetables are in season New Zealand",
      "seasonal produce guide chefs",
    ],
    keyTakeaway:
      "In New Zealand, brassicas (broccoli, cauliflower, cabbage), kale, silverbeet and carrots are at their best and cheapest from autumn through spring (April–October). Glasshouse tomatoes, cucumbers and capsicums peak in value from December to April. New-season Pukekohe potatoes and onions arrive from late summer and are stored to supply kitchens year-round.",
    body: [
      {
        type: "p",
        text: "Seasonality in New Zealand is gentler than in colder countries — thanks to glasshouse growing and the mild Auckland climate, most core vegetables are available all year. But price and quality still swing with the seasons. Ordering with the calendar in mind keeps food costs down and produce at its best. This guide covers the lines a typical restaurant or cafe runs through every week.",
      },
      { type: "h2", text: "Summer (December – February)" },
      {
        type: "ul",
        items: [
          "Tomatoes and cherry tomatoes: peak flavour and best pricing. Put them on the menu.",
          "Cucumber and capsicum: abundant and good value from glasshouse growers.",
          "Herbs: coriander, mint, parsley and spring onion are plentiful.",
          "Potatoes: new-season crop begins arriving from Pukekohe growers in late summer.",
          "Onions: new-season NZ onions are harvested from January onward.",
          "Brassicas: available but at their most expensive — summer heat makes broccoli and cauliflower harder to grow well.",
        ],
      },
      { type: "h2", text: "Autumn (March – May)" },
      {
        type: "ul",
        items: [
          "Potatoes and onions: freshly harvested and cured — the best time of year for Agria and Pukekohe onions.",
          "Tomatoes and capsicum: still good value through March and April.",
          "Broccoli, cauliflower and cabbage: quality improves as temperatures fall.",
          "Carrots: sweeten as the weather cools.",
          "Daikon: coming into its best season.",
        ],
      },
      { type: "h2", text: "Winter (June – August)" },
      {
        type: "ul",
        items: [
          "Brassicas: peak season. Broccoli, cauliflower and cabbage are tight, sweet and cheap.",
          "Kale (curly and black), silverbeet and spinach: abundant and at their most tender.",
          "Carrots and daikon: firm, sweet and well priced.",
          "Tomatoes and cucumbers: available from heated glasshouses, but prices rise noticeably. Plan menus that lean on cooked tomato and stored lines.",
          "Potatoes and onions: from cured storage — quality is stable, pricing is steady.",
          "Herbs: supply tightens in the coldest weeks; coriander in particular can be short.",
        ],
      },
      { type: "h2", text: "Spring (September – November)" },
      {
        type: "ul",
        items: [
          "Spinach and leafy greens: excellent quality.",
          "Broccoli and cauliflower: still strong through early spring, pricing starts to lift by November.",
          "Herbs: recover quickly as days lengthen.",
          "Tomatoes: glasshouse pricing eases from October as light levels improve.",
          "Potatoes and onions: stored crop is at the end of its cycle — quality is checked case by case until the new season lands.",
        ],
      },
      { type: "h2", text: "How to use this when ordering" },
      {
        type: "ol",
        items: [
          "Build specials around what's peaking — winter brassica dishes, summer tomato plates.",
          "Move tomato-heavy items to cooked applications in winter, where the price premium matters less.",
          "Ask your supplier for the weekly price list and read it: a sudden jump usually means weather, not the supplier.",
          "Lock in standing orders for stored lines (potatoes, onions) — they're predictable all year.",
        ],
      },
      {
        type: "cta",
        text: "Want a weekly price list that reflects what's in season? VegieFresh sends one to every regular customer.",
        href: "/contact",
        label: "Get on the list",
      },
    ],
    faqs: [
      {
        question: "Are tomatoes available in New Zealand in winter?",
        answer:
          "Yes. New Zealand tomatoes are grown in glasshouses year-round, mainly around Auckland and the Waikato. Winter supply is reliable but priced higher because of heating and lower light, so many kitchens shift to cooked tomato dishes in the colder months.",
      },
      {
        question: "When are Pukekohe potatoes harvested?",
        answer:
          "Main-crop potatoes in the Pukekohe region are harvested from late summer through autumn. They are then cured and stored in cool, dark conditions to supply kitchens for the rest of the year.",
      },
    ],
    relatedProducts: ["broccoli", "tomato", "agria-potato", "curly-kale"],
  },
  {
    slug: "agria-vs-moonlight-potatoes-which-to-order",
    title: "Agria vs Moonlight Potatoes: Which Should Your Kitchen Order?",
    excerpt:
      "Agria is floury and made for chips, roasting and mash. Moonlight is waxy and holds its shape for salads and boiling. Here's how to choose, and which pack size to order.",
    publishedAt: "2026-09-05",
    category: "Buying Guides",
    imageKey: "prodAgriaPotato",
    readingMinutes: 5,
    keywords: [
      "Agria vs Moonlight potatoes",
      "best potato for chips NZ",
      "Agria potatoes restaurant",
    ],
    keyTakeaway:
      "Order Agria potatoes for chips, fries, roasting and mash — its high dry-matter, floury flesh fries crisp and mashes smooth. Order Moonlight potatoes for potato salad, boiling, gratins and anything where slices need to hold together. Most restaurants run both: Agria in 10kg or 20kg cases for the fryer, Moonlight in 10kg for cold prep.",
    body: [
      {
        type: "p",
        text: "Agria and Moonlight are the two potato varieties we supply most to Auckland and Hamilton kitchens, and they do very different jobs. Getting the choice right is the difference between a crisp golden chip and a limp one, or a potato salad that holds together versus one that turns to mush.",
      },
      { type: "h2", text: "Agria: the floury all-rounder" },
      {
        type: "p",
        text: "Agria is New Zealand's most widely grown potato and the default in most commercial kitchens. It has yellow flesh, a high dry-matter content and a floury texture. That dryness is what makes it fry so well — less water means a crisper shell and a fluffier centre — and mash so smoothly without going gluey.",
      },
      { type: "h3", text: "Use Agria for" },
      {
        type: "ul",
        items: [
          "Hand-cut chips, fries and wedges",
          "Roast potatoes",
          "Mash, purée and duchesse",
          "Gnocchi, rösti and hash browns",
          "Baked and jacket potatoes",
        ],
      },
      { type: "h2", text: "Moonlight: the waxy workhorse" },
      {
        type: "p",
        text: "Moonlight is a smooth-skinned, oval potato with pale yellow flesh and a waxy, firmer texture. It holds its shape through boiling and steaming, so slices and dice stay intact. It is less suited to frying — the higher moisture gives a paler, softer chip.",
      },
      { type: "h3", text: "Use Moonlight for" },
      {
        type: "ul",
        items: [
          "Potato salad and niçoise",
          "Boiled and steamed sides",
          "Gratins, dauphinoise and layered bakes",
          "Casseroles, stews and curries",
          "Skin-on wedges where you want a firmer bite",
        ],
      },
      { type: "h2", text: "Which pack size?" },
      {
        type: "p",
        text: "We pack Agria in 5kg, 10kg and 20kg, Moonlight in 10kg, and Moonlight Large in 20kg cases graded for fast peeling. As a rough guide: a cafe doing breakfast hash and a lunch salad usually takes a 10kg Agria and a 10kg Moonlight each week. A restaurant with chips on the menu will run through 20kg Agria cases, often several a week. If you're peeling by hand at volume, Moonlight Large saves real prep time — bigger tubers, fewer of them.",
      },
      { type: "h2", text: "Storing potatoes in a commercial kitchen" },
      {
        type: "p",
        text: "Both varieties want the same thing: cool (7–10°C), dark and dry, with airflow around the bag. Never store potatoes in the walk-in chiller — cold converts starch to sugar, which makes chips brown too fast and taste faintly sweet. Keep them out of light to prevent greening, and away from onions, which release moisture.",
      },
      {
        type: "cta",
        text: "VegieFresh supplies Agria and Moonlight potatoes from Pukekohe-region growers to kitchens across Auckland and Hamilton.",
        href: "/shop/category/potatoes",
        label: "See our potatoes",
      },
    ],
    faqs: [
      {
        question: "What is the best potato for chips in New Zealand?",
        answer:
          "Agria is the standard choice for chips and fries in New Zealand kitchens. Its high dry-matter, floury flesh fries to a crisp golden shell with a fluffy centre and holds colour well.",
      },
      {
        question: "Can I use Agria for potato salad?",
        answer:
          "You can, but it tends to break up when boiled and dressed. A waxy variety like Moonlight holds its shape far better for potato salad, niçoise and layered gratins.",
      },
    ],
    relatedProducts: ["agria-potato", "moonlight-potato", "moonlight-large-potato"],
  },
  {
    slug: "storing-fresh-vegetables-in-a-commercial-kitchen",
    title: "How to Store Fresh Vegetables in a Commercial Kitchen (and Cut Waste)",
    excerpt:
      "Which vegetables go in the chiller, which stay out, and the storage temperatures and shelf lives for potatoes, onions, tomatoes, greens, herbs and roots.",
    publishedAt: "2026-09-07",
    category: "Kitchen Practice",
    imageKey: "heroShop",
    readingMinutes: 6,
    keywords: [
      "storing vegetables commercial kitchen",
      "vegetable storage temperature",
      "reduce produce waste restaurant",
    ],
    keyTakeaway:
      "Keep leafy greens, herbs, brassicas and carrots in the chiller at 0–4°C. Keep potatoes, onions and whole garlic out of the chiller in a cool (7–10°C), dark, dry store. Keep tomatoes, cucumbers and capsicums at 10–13°C if you can — a standard chiller is too cold and damages flavour and texture. Most produce waste in restaurants comes from storing the wrong thing at the wrong temperature.",
    body: [
      {
        type: "p",
        text: "Produce waste is rarely about buying too much. It's usually about one case being stored in the wrong place: tomatoes in the walk-in going mealy, potatoes under a fluorescent light turning green, coriander wilting in a plastic bag. Here is the storage guide we give to new customers.",
      },
      { type: "h2", text: "Chiller (0–4°C)" },
      {
        type: "ul",
        items: [
          "Broccoli, cauliflower, cabbage: 5–7 days for broccoli, 2–3 weeks for whole cabbage. Keep loosely covered.",
          "Spinach, silverbeet, kale: 3–7 days. Store dry, unwashed, in a breathable bag or lined crate.",
          "Carrots and daikon: 2–3 weeks. Remove green tops; keep in a bag or covered crate to hold moisture.",
          "Herbs (coriander, parsley, mint): stems in a little water with a bag over the leaves, or wrapped in damp paper. 4–7 days.",
          "Spring onion: wrapped or bagged. 5–7 days.",
          "Cut onions, peeled garlic, cut ginger: covered, use within 2–7 days.",
        ],
      },
      { type: "h2", text: "Cool, dark dry store (7–10°C) — not the chiller" },
      {
        type: "ul",
        items: [
          "Potatoes: 2–4 weeks. Cold storage converts starch to sugar (dark chips, sweet taste). Light causes greening. Keep bags closed and off the floor.",
          "Onions: several weeks when cured. Keep in the mesh sack, ventilated, and away from potatoes.",
          "Whole garlic: room temperature, dry and ventilated. Refrigeration triggers sprouting.",
        ],
      },
      { type: "h2", text: "Cellar temperature (10–13°C) if you have it" },
      {
        type: "p",
        text: "Tomatoes, cherry tomatoes, cucumbers and capsicums are all chill-sensitive. Below about 10°C, tomatoes lose aroma and go mealy; cucumbers pit and go watery. If you don't have a cool room at this temperature, store tomatoes at room temperature and buy for 3–4 days at a time rather than a week. Capsicums tolerate the chiller better than the others — use within 1–2 weeks.",
      },
      { type: "h2", text: "Ginger" },
      {
        type: "p",
        text: "Whole ginger keeps 3–4 weeks in the chiller, unwrapped in the crisper or in a paper bag. Once cut, cover and use within a week.",
      },
      { type: "h2", text: "Five habits that cut produce waste" },
      {
        type: "ol",
        items: [
          "Label every case with the delivery date on arrival and rotate first-in, first-out.",
          "Separate potatoes and onions — onions absorb moisture from potatoes and both spoil faster together.",
          "Don't wash greens until you use them; surface water accelerates rot.",
          "Order tomatoes and herbs twice a week rather than once, in smaller quantities.",
          "Check the chiller thermometer weekly. A chiller running at 6–8°C halves the life of leafy greens.",
        ],
      },
      {
        type: "cta",
        text: "Twice-weekly delivery runs across Auckland and Hamilton mean you can order fresh lines in smaller quantities.",
        href: "/services",
        label: "See our delivery service",
      },
    ],
    faqs: [
      {
        question: "Should potatoes be stored in the fridge?",
        answer:
          "No. Refrigerating potatoes converts their starch to sugar, which makes chips brown too quickly and taste sweet. Store potatoes in a cool (7–10°C), dark, dry place with airflow.",
      },
      {
        question: "How long does broccoli last in a commercial chiller?",
        answer:
          "Broccoli keeps 4–6 days at 0–4°C when stored unwashed in a breathable bag or crate. It yellows quickly if the chiller runs warm, so check the temperature if heads are turning within a few days.",
      },
    ],
    relatedProducts: ["tomato", "fresh-coriander", "broccoli", "agria-potato"],
  },
  {
    slug: "why-pukekohe-grows-new-zealands-best-vegetables",
    title: "Why Pukekohe Grows Some of New Zealand's Best Vegetables",
    excerpt:
      "Pukekohe's volcanic soils, mild climate and generations of growers make it NZ's vegetable heartland — and why that matters for the produce arriving at your restaurant.",
    publishedAt: "2026-09-09",
    category: "Seasonal Guides",
    imageKey: "storySection",
    readingMinutes: 5,
    keywords: [
      "Pukekohe vegetables",
      "Pukekohe growing region",
      "where are NZ potatoes and onions grown",
    ],
    keyTakeaway:
      "Pukekohe, 50km south of Auckland, is New Zealand's most important vegetable-growing district. Its free-draining volcanic soils and mild, frost-light climate allow year-round growing of potatoes, onions and brassicas, and it produces a large share of the fresh vegetables eaten in Auckland. A supplier based in Pukekohe is buying from growers minutes away.",
    body: [
      {
        type: "p",
        text: "If you have eaten an onion or a potato in Auckland, there is a good chance it came out of the ground within a few kilometres of Pukekohe. This small town at the southern edge of Auckland sits on some of the most productive horticultural land in the country. Here's why, and what it means for your kitchen.",
      },
      { type: "h2", text: "Volcanic soils" },
      {
        type: "p",
        text: "The Pukekohe and Bombay hills are built on old volcanic material that has weathered into deep, free-draining, iron-rich soils — the reddish-brown earth you see on every paddock in the district. These soils warm quickly in spring, drain well through wet winters and hold nutrients well, which is exactly what root crops and brassicas want.",
      },
      { type: "h2", text: "A mild, near frost-free climate" },
      {
        type: "p",
        text: "Pukekohe's proximity to the coast and the Manukau Harbour keeps winters mild. Frosts are light and rare compared with inland growing areas, so growers can plant and harvest brassicas, lettuce, spring onions and other short-cycle crops through the winter months when much of the country cannot. That's why Auckland kitchens get local broccoli and cabbage all year.",
      },
      { type: "h2", text: "Potatoes and onions" },
      {
        type: "p",
        text: "Pukekohe is the traditional heart of New Zealand's onion industry and one of its main potato districts. Main-crop potatoes such as Agria are harvested from late summer through autumn, cured and stored to supply the country through winter and spring. Onions are lifted from January, cured in the field and stored for months. Both crops travel a very short distance to reach a Pukekohe-based wholesaler.",
      },
      { type: "h2", text: "Generations of growers" },
      {
        type: "p",
        text: "Many growing families in the district have been on the same land for three or four generations, including a strong Indian and Chinese market-gardening heritage that goes back a century. That accumulated knowledge — which paddock to plant when, how to cure an onion so it keeps until spring — is as much a part of Pukekohe's produce quality as the soil.",
      },
      { type: "h2", text: "What it means for your restaurant" },
      {
        type: "ul",
        items: [
          "Freshness: produce sourced in Pukekohe and delivered to Auckland or Hamilton the next morning has spent a day or two out of the ground, not a week.",
          "Consistency: year-round local supply of core lines means fewer substitutions.",
          "Provenance: 'Pukekohe potatoes' or 'Pukekohe onions' on a menu is a real, recognised origin story.",
        ],
      },
      {
        type: "cta",
        text: "VegieFresh is based in Pukekohe and sources potatoes, onions and greens from growers in the district.",
        href: "/about",
        label: "Read our story",
      },
    ],
    faqs: [
      {
        question: "What vegetables are grown in Pukekohe?",
        answer:
          "Pukekohe is best known for potatoes and onions, and also grows large volumes of brassicas (broccoli, cauliflower, cabbage), lettuce, spring onions, carrots and other field vegetables. Nearby glasshouses also produce tomatoes, cucumbers and capsicums.",
      },
      {
        question: "How far is Pukekohe from Auckland and Hamilton?",
        answer:
          "Pukekohe is about 50km south of central Auckland (roughly 45–60 minutes by road) and about 75km north of Hamilton (around an hour). That central position is why it works well as a base for produce delivery to both cities.",
      },
    ],
    relatedProducts: ["agria-potato", "white-onion", "cabbage", "spring-onion"],
  },
  {
    slug: "produce-delivery-auckland-hamilton-how-it-works",
    title: "Fresh Produce Delivery for Auckland and Hamilton Food Businesses: How It Works",
    excerpt:
      "How VegieFresh's delivery service works for restaurants, cafes and caterers — areas covered, ordering cut-offs, delivery days, bulk orders and freight to the rest of NZ.",
    publishedAt: "2026-09-10",
    category: "Delivery & Service",
    imageKey: "heroServices",
    readingMinutes: 4,
    keywords: [
      "restaurant vegetable delivery",
      "vegetable delivery Hamilton restaurants",
      "wholesale vegetable delivery NZ",
    ],
    keyTakeaway:
      "VegieFresh delivers fresh vegetables to restaurants, cafes, takeaways and caterers across Auckland and Hamilton using our own delivery fleet from Pukekohe. Orders placed by phone or email are delivered on the next scheduled run for your area, usually the next business day. For bulk produce orders elsewhere in New Zealand, we coordinate freight.",
    body: [
      {
        type: "p",
        text: "One of the first questions we get from a new kitchen is simply: 'How does delivery work?' This article answers that in one place — where we go, how to order, and what to expect on the day.",
      },
      { type: "h2", text: "Areas we deliver to" },
      {
        type: "p",
        text: "Our regular runs cover Auckland — from Pukekohe and the Franklin district through South Auckland and Manukau to the central city and beyond — and Hamilton and the surrounding Waikato. Because we're based in Pukekohe, roughly halfway between the two, both cities are a short run from the depot. If you're outside these areas and ordering bulk produce, we can coordinate freight; contact us with your location.",
      },
      { type: "h2", text: "How to order" },
      {
        type: "ol",
        items: [
          "Get in touch by phone, email or the enquiry form on this site.",
          "We confirm the lines you need, pack sizes, and set a regular delivery day for your area.",
          "You receive a weekly price list reflecting the current NZ produce market.",
          "Place your order by phone or email before the cut-off for your delivery day.",
          "Your order is packed at the depot and delivered on the next run.",
        ],
      },
      { type: "h2", text: "Delivery days and timing" },
      {
        type: "p",
        text: "Most customers are on a fixed weekly or twice-weekly delivery day. We deliver in the morning wherever possible so produce is in your chiller before service. If you need a different rhythm — daily for a high-volume kitchen, or fortnightly for a small cafe with stored lines — tell us and we'll work it into the run.",
      },
      { type: "h2", text: "Bulk and standing orders" },
      {
        type: "p",
        text: "For central kitchens, caterers and multi-site operators, we set up standing orders for the predictable lines (potatoes, onions, carrots) and adjust the fresh lines week to week. Bulk pack sizes — 20kg potato cases and 20kg onion sacks — are held for these customers.",
      },
      { type: "h2", text: "What happens if something isn't right" },
      {
        type: "p",
        text: "Check your delivery on arrival. If a case is below the standard you expect, call us the same day and we'll sort it — a replacement on the next run or a credit. The owner manages the fleet personally, so you're talking to the person who can fix it.",
      },
      {
        type: "cta",
        text: "Ready to get on a delivery run? Tell us your location and what you go through each week.",
        href: "/contact",
        label: "Set up delivery",
      },
    ],
    faqs: [
      {
        question: "Does VegieFresh deliver to Hamilton?",
        answer:
          "Yes. Hamilton and the wider Waikato are covered by regular delivery runs from our Pukekohe base, alongside Auckland.",
      },
      {
        question: "Can I get produce delivered outside Auckland and Hamilton?",
        answer:
          "For bulk orders, yes — we coordinate freight for produce going elsewhere in New Zealand. Contact us with your location and volumes for a quote.",
      },
    ],
    relatedProducts: ["agria-potato", "white-jumbo-onion", "carrot"],
  },
];

export const posts: Post[] = [...topicalPosts, ...localPosts];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getLatestPosts(n = 3) {
  return getSortedPosts().slice(0, n);
}
