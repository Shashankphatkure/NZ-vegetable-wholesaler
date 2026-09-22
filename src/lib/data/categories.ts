import type { Category } from "@/lib/types";

// Category landing pages. Each one owns a single product-level commercial
// query (per the Sept 2026 SEO audit's master keyword map) rather than
// competing with the homepage on broad "fresh produce" wording.

export const categories: Category[] = [
  {
    slug: "potatoes",
    name: "Potatoes",
    imageKey: "catPotatoes",
    blurb: "Agria and Moonlight, packed in trade-ready sizes.",
    primaryKeyword: "wholesale potatoes Auckland",
    seoTitle: "Wholesale Potatoes Auckland | Commercial Potato Supplier",
    h1: "Wholesale Potatoes",
    keywords: [
      "wholesale potatoes Auckland",
      "Agria potatoes wholesale",
      "commercial potato supplier Auckland",
      "bulk potatoes Pukekohe",
    ],
    intro:
      "Wholesale potatoes for restaurants, cafes, takeaways and commercial kitchens across Auckland and Hamilton. We supply Agria — New Zealand's go-to floury potato for chips, roasting and mash — and Moonlight, a waxy all-rounder that holds its shape for salads and boiling. Sourced from Pukekohe-region growers and packed in 5kg, 10kg and 20kg trade sizes.",
    seoDescription:
      "Wholesale potatoes for Auckland restaurants and cafes. Agria and Moonlight in 5kg, 10kg and 20kg packs, delivered from Pukekohe to Auckland and Hamilton.",
  },
  {
    slug: "onions",
    name: "Onions",
    imageKey: "catOnions",
    blurb: "Red, white and jumbo white, by the sack.",
    primaryKeyword: "wholesale onions Auckland",
    seoTitle: "Wholesale Onions Auckland | Red, White & Jumbo Onions",
    h1: "Wholesale Onions",
    keywords: [
      "wholesale onions Auckland",
      "bulk onions Auckland",
      "red onion supplier Auckland",
      "jumbo white onions 20kg NZ",
    ],
    intro:
      "Pukekohe is New Zealand's onion capital, and we supply the full range a commercial kitchen needs: red onions for salads and pickling, white cooking onions for stocks and sauces, and jumbo white onions in 20kg sacks for high-volume prep. Cured for shelf life and delivered fresh to Auckland and Hamilton food businesses.",
    seoDescription:
      "Wholesale onions for Auckland restaurants and cafes — red, white and jumbo white in 5kg, 10kg and 20kg sacks, delivered fresh from Pukekohe.",
  },
  {
    slug: "tomatoes",
    name: "Tomatoes",
    imageKey: "catTomatoes",
    blurb: "Standard and cherry, for the kitchen pass.",
    primaryKeyword: "wholesale tomatoes Auckland",
    seoTitle: "Wholesale Tomatoes Auckland | Fresh Tomato Supplier",
    h1: "Wholesale Tomatoes",
    keywords: [
      "wholesale tomatoes Auckland",
      "tomato supplier Auckland",
      "cherry tomatoes wholesale NZ",
      "glasshouse tomato supplier restaurants",
    ],
    intro:
      "Glasshouse-grown New Zealand tomatoes supplied fresh for restaurants, cafes and food businesses. Standard round tomatoes for slicing, sauces and breakfast service, and sweet cherry tomatoes for salads, roasting and garnish. Available year-round with delivery across Auckland and Hamilton.",
    seoDescription:
      "Wholesale tomatoes for Auckland restaurants and cafes. NZ glasshouse-grown standard and cherry tomatoes, delivered year-round from Pukekohe.",
  },
  {
    slug: "roots",
    name: "Roots",
    imageKey: "catRoots",
    blurb: "Ginger, garlic, carrot and daikon.",
    primaryKeyword: "wholesale root vegetables Auckland",
    seoTitle: "Wholesale Root Vegetables Auckland",
    h1: "Wholesale Root Vegetables",
    keywords: [
      "wholesale root vegetables Auckland",
      "ginger and garlic supplier Auckland",
      "wholesale carrots Auckland",
      "root vegetable supplier Pukekohe",
    ],
    intro:
      "Root vegetables and aromatics that every kitchen runs through daily: fresh ginger and garlic for pastes, marinades and stocks, carrots for mirepoix and sides, and daikon for Asian menus, pickles and broths. Supplied fresh and firm with reliable weekly delivery to Auckland and Hamilton food businesses.",
    seoDescription:
      "Wholesale root vegetables for Auckland commercial kitchens — fresh ginger, garlic, carrots and daikon, delivered from our Pukekohe base.",
  },
  {
    slug: "greens",
    name: "Greens",
    imageKey: "catGreens",
    blurb: "Brassicas and leafy greens, cut fresh.",
    primaryKeyword: "wholesale leafy greens Auckland",
    seoTitle: "Wholesale Leafy Greens Auckland | Fresh Greens Supplier",
    h1: "Wholesale Greens",
    keywords: [
      "wholesale leafy greens Auckland",
      "fresh greens supplier Auckland",
      "wholesale broccoli and cauliflower NZ",
      "kale and spinach supplier Auckland",
    ],
    intro:
      "Fresh brassicas and leafy greens cut for commercial kitchens: broccoli, cauliflower and cabbage from Pukekohe and Waikato growers, plus spinach, silverbeet, curly kale and cavolo nero (black kale). Delivered chilled and fresh to restaurants, cafes and caterers across Auckland and Hamilton.",
    seoDescription:
      "Wholesale leafy greens for Auckland restaurants and cafes — broccoli, cauliflower, cabbage, kale, spinach and silverbeet, delivered from Pukekohe.",
  },
  {
    slug: "herbs",
    name: "Herbs",
    imageKey: "catHerbs",
    blurb: "Coriander, parsley, mint and spring onion.",
    primaryKeyword: "wholesale herbs Auckland",
    seoTitle: "Wholesale Fresh Herbs Auckland | Commercial Herb Supplier",
    h1: "Wholesale Fresh Herbs",
    keywords: [
      "wholesale herbs Auckland",
      "coriander supplier Auckland",
      "wholesale parsley NZ",
      "commercial herb supplier Auckland",
    ],
    intro:
      "Bunched fresh herbs for finishing, garnishing and building flavour: coriander, mint, curly and Italian flat-leaf parsley, and spring onions. Picked fresh by Auckland growers and delivered to restaurants, cafes and bars across Auckland and Hamilton.",
    seoDescription:
      "Wholesale fresh herbs for Auckland restaurants and cafes — bunched coriander, mint, parsley and spring onion, delivered fresh from Pukekohe.",
  },
  {
    slug: "other-vegetables",
    name: "Other Vegetables",
    imageKey: "catOther",
    blurb: "Cucumber and capsicum.",
    primaryKeyword: "wholesale vegetables Auckland",
    seoTitle: "Wholesale Vegetables Auckland | Fresh Commercial Produce",
    h1: "Wholesale Vegetables",
    keywords: [
      "wholesale vegetables Auckland",
      "commercial vegetable supplier Auckland",
      "wholesale cucumber and capsicum NZ",
    ],
    intro:
      "Glasshouse-grown New Zealand cucumbers and capsicums for salads, sandwiches, platters, stir-fries and roasting. Supplied fresh year-round to restaurants, cafes and food businesses across Auckland and Hamilton.",
    seoDescription:
      "Wholesale vegetables for Auckland restaurants, cafes and commercial kitchens — NZ glasshouse-grown cucumbers and capsicums, delivered from Pukekohe.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
