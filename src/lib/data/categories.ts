import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "potatoes",
    name: "Potatoes",
    imageKey: "catPotatoes",
    blurb: "Agria and Moonlight, packed in trade-ready sizes.",
    intro:
      "Wholesale potatoes for restaurants, cafes, takeaways and commercial kitchens across Auckland and Hamilton. We supply Agria — New Zealand's go-to floury potato for chips, roasting and mash — and Moonlight, a waxy all-rounder that holds its shape for salads and boiling. Sourced from Pukekohe-region growers and packed in 5kg, 10kg and 20kg trade sizes.",
    seoDescription:
      "Wholesale potato supplier in Pukekohe. Agria and Moonlight potatoes in 5kg, 10kg and 20kg packs, delivered to restaurants and cafes across Auckland and Hamilton.",
  },
  {
    slug: "onions",
    name: "Onions",
    imageKey: "catOnions",
    blurb: "Red, white and jumbo white, by the sack.",
    intro:
      "Pukekohe is New Zealand's onion capital, and we supply the full range a commercial kitchen needs: red onions for salads and pickling, white cooking onions for stocks and sauces, and jumbo white onions in 20kg sacks for high-volume prep. Cured for shelf life and delivered fresh to Auckland and Hamilton food businesses.",
    seoDescription:
      "Wholesale onion supplier in Pukekohe NZ. Red, white and jumbo white onions in 5kg, 10kg and 20kg sacks for restaurants, cafes and caterers in Auckland and Hamilton.",
  },
  {
    slug: "tomatoes",
    name: "Tomatoes",
    imageKey: "catTomatoes",
    blurb: "Standard and cherry, for the kitchen pass.",
    intro:
      "Glasshouse-grown New Zealand tomatoes supplied fresh for restaurants, cafes and food businesses. Standard round tomatoes for slicing, sauces and breakfast service, and sweet cherry tomatoes for salads, roasting and garnish. Available year-round with delivery across Auckland and Hamilton.",
    seoDescription:
      "Fresh tomato supplier for restaurants and cafes in Auckland and Hamilton. NZ glasshouse-grown standard and cherry tomatoes delivered year-round from Pukekohe.",
  },
  {
    slug: "roots",
    name: "Roots",
    imageKey: "catRoots",
    blurb: "Ginger, garlic, carrot and daikon.",
    intro:
      "Root vegetables and aromatics that every kitchen runs through daily: fresh ginger and garlic for pastes, marinades and stocks, carrots for mirepoix and sides, and daikon for Asian menus, pickles and broths. Supplied fresh and firm with reliable weekly delivery to Auckland and Hamilton food businesses.",
    seoDescription:
      "Wholesale ginger, garlic, carrots and daikon for restaurants and cafes. Fresh root vegetables delivered across Auckland and Hamilton from our Pukekohe base.",
  },
  {
    slug: "greens",
    name: "Greens",
    imageKey: "catGreens",
    blurb: "Brassicas and leafy greens, cut fresh.",
    intro:
      "Fresh brassicas and leafy greens cut for commercial kitchens: broccoli, cauliflower and cabbage from Pukekohe and Waikato growers, plus spinach, silverbeet, curly kale and cavolo nero (black kale). Delivered chilled and fresh to restaurants, cafes and caterers across Auckland and Hamilton.",
    seoDescription:
      "Wholesale broccoli, cauliflower, cabbage, kale, spinach and silverbeet supplier. Fresh greens delivered to Auckland and Hamilton restaurants from Pukekohe.",
  },
  {
    slug: "herbs",
    name: "Herbs",
    imageKey: "catHerbs",
    blurb: "Coriander, parsley, mint and spring onion.",
    intro:
      "Bunched fresh herbs for finishing, garnishing and building flavour: coriander, mint, curly and Italian flat-leaf parsley, and spring onions. Picked fresh by Auckland growers and delivered to restaurants, cafes and bars across Auckland and Hamilton.",
    seoDescription:
      "Fresh herb supplier for restaurants and cafes in Auckland and Hamilton. Bunched coriander, mint, parsley and spring onion delivered fresh from Pukekohe.",
  },
  {
    slug: "other-vegetables",
    name: "Other Vegetables",
    imageKey: "catOther",
    blurb: "Cucumber and capsicum.",
    intro:
      "Glasshouse-grown New Zealand cucumbers and capsicums for salads, sandwiches, platters, stir-fries and roasting. Supplied fresh year-round to restaurants, cafes and food businesses across Auckland and Hamilton.",
    seoDescription:
      "Wholesale cucumber and capsicum supplier for Auckland and Hamilton food businesses. NZ glasshouse-grown, delivered fresh from Pukekohe.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
