import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "potatoes",
    name: "Potatoes",
    imageKey: "catPotatoes",
    blurb: "Agria and Moonlight, packed in trade-ready sizes.",
  },
  {
    slug: "onions",
    name: "Onions",
    imageKey: "catOnions",
    blurb: "Red, white and jumbo white, by the sack.",
  },
  {
    slug: "tomatoes",
    name: "Tomatoes",
    imageKey: "catTomatoes",
    blurb: "Standard and cherry, for the kitchen pass.",
  },
  {
    slug: "roots",
    name: "Roots",
    imageKey: "catRoots",
    blurb: "Ginger, garlic, carrot and daikon.",
  },
  {
    slug: "greens",
    name: "Greens",
    imageKey: "catGreens",
    blurb: "Brassicas and leafy greens, cut fresh.",
  },
  {
    slug: "herbs",
    name: "Herbs",
    imageKey: "catHerbs",
    blurb: "Coriander, parsley, mint and spring onion.",
  },
  {
    slug: "other-vegetables",
    name: "Other Vegetables",
    imageKey: "catOther",
    blurb: "Cucumber and capsicum.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
