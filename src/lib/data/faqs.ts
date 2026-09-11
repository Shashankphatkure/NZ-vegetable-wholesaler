import type { Faq } from "@/lib/types";

// Written as direct answers on purpose: this is the format Google's FAQ rich
// results, voice search and AI answer engines quote from. Keep each answer
// self-contained (name the business, place and offer in the first sentence).

export const faqGroups: { title: string; faqs: Faq[] }[] = [
  {
    title: "Delivery & Areas",
    faqs: [
      {
        question: "Where does VegieFresh deliver?",
        answer:
          "VegieFresh delivers fresh produce across Auckland and Hamilton with our own delivery fleet, based out of Pukekohe. For bulk produce orders elsewhere in New Zealand we coordinate freight — contact us with your location and volumes for a quote.",
      },
      {
        question: "Do you deliver to Hamilton?",
        answer:
          "Yes. Hamilton and the wider Waikato are on our regular delivery runs from Pukekohe, alongside Auckland. Restaurants, cafes and food businesses in Hamilton can set up a standing weekly order or order as needed.",
      },
      {
        question: "Do you deliver to Auckland restaurants and cafes?",
        answer:
          "Yes. We supply restaurants, cafes, takeaways, caterers and commercial kitchens across Auckland — from South Auckland and Manukau through to the central city and North Shore — with regular scheduled deliveries.",
      },
      {
        question: "Is there a minimum order for delivery?",
        answer:
          "We work with businesses of all sizes, from single cafes to central production kitchens. There is no fixed minimum for regular customers on an established delivery run; for one-off or out-of-area deliveries we will confirm any minimum when you enquire.",
      },
      {
        question: "How quickly can you deliver after I order?",
        answer:
          "Orders placed by phone or email are typically delivered on the next scheduled run for your area, usually the next business day. Tell us your regular ordering rhythm and we will slot you into a consistent delivery day.",
      },
    ],
  },
  {
    title: "Products & Pack Sizes",
    faqs: [
      {
        question: "What vegetables does VegieFresh supply?",
        answer:
          "We supply seven core lines: potatoes (Agria, Moonlight), onions (red, white, jumbo white), tomatoes (standard and cherry), roots (ginger, garlic, carrot, daikon), greens (broccoli, cauliflower, cabbage, spinach, silverbeet, curly kale, black kale), herbs (coriander, mint, parsley, spring onion) and other vegetables (cucumber, capsicum). If you need a line that is not listed, ask — we can usually source it.",
      },
      {
        question: "What pack sizes do you offer for onions?",
        answer:
          "Red and white onions come in 5kg and 10kg packs. White jumbo onions are packed in 20kg sacks for high-volume kitchens.",
      },
      {
        question: "What pack sizes do you offer for potatoes?",
        answer:
          "Agria potatoes are available in 5kg, 10kg and 20kg packs. Moonlight potatoes come in 10kg, and Moonlight Large in 20kg cases.",
      },
      {
        question: "Where is your produce grown?",
        answer:
          "Most of our produce is grown in New Zealand — potatoes, onions and brassicas from the Pukekohe and Waikato growing belts, and tomatoes, cucumbers, capsicums and herbs from Auckland-region glasshouse and field growers. A small number of lines such as ginger are imported when NZ supply is unavailable.",
      },
      {
        question: "Can you source produce that is not on your website?",
        answer:
          "Usually, yes. Our catalogue lists the lines we hold consistently, but we work with a network of growers and can source additional vegetables on request. Contact us with what you need and your expected volumes.",
      },
    ],
  },
  {
    title: "Working With Us",
    faqs: [
      {
        question: "Do you supply restaurants, or retail too?",
        answer:
          "VegieFresh is a wholesale supplier to food businesses: restaurants, cafes, takeaways, caterers, hotels, dairies and central production kitchens. We do not sell to the public at retail.",
      },
      {
        question: "How do I place an order or set up an account?",
        answer:
          "Call us on 021 0825 6766, email satwantbatth2@gmail.com, or send an enquiry through the contact form on this site. We will confirm pricing, delivery day and your first order — no app or online account is required.",
      },
      {
        question: "How is your produce priced?",
        answer:
          "Pricing follows the New Zealand fresh-produce market and changes with the season and supply. Regular customers receive a weekly price list; bulk and standing orders can be priced on request.",
      },
      {
        question: "Who is behind VegieFresh?",
        answer:
          "VegieFresh was founded in 2022 by Satwant Singh, who spent more than a decade working hands-on in New Zealand kiwifruit orchards, onion and potato packhouses and the food-processing industry before starting the business. He personally manages the delivery fleet across Auckland and Hamilton.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);

/** Short set for the home page. */
export const homeFaqs: Faq[] = [
  allFaqs[0],
  allFaqs[1],
  allFaqs[5],
  allFaqs[10],
];
