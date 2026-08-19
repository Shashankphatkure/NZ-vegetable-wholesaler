import type { Product } from "@/lib/types";

export const products: Product[] = [
  // ---- Potatoes ----
  {
    slug: "agria-potato",
    name: "Agria Potato",
    category: "potatoes",
    packSizes: ["5kg", "10kg", "20kg"],
    description:
      "An all-purpose potato with a dry, floury texture — reliable for roasting, mashing, chips and fries.",
    imageKey: "prodAgriaPotato",
    featured: true,
  },
  {
    slug: "moonlight-potato",
    name: "Moonlight Potato",
    category: "potatoes",
    packSizes: ["10kg"],
    description:
      "A versatile, good all-round potato suited to boiling, roasting and general kitchen use.",
    imageKey: "prodMoonlightPotato",
  },
  {
    slug: "moonlight-large-potato",
    name: "Moonlight Large Potato",
    category: "potatoes",
    packSizes: ["20kg"],
    description:
      "Larger-format Moonlight potatoes, well suited to high-volume kitchen prep.",
    imageKey: "prodMoonlightLargePotato",
  },

  // ---- Onions ----
  {
    slug: "red-onion",
    name: "Red Onion",
    category: "onions",
    packSizes: ["5kg", "10kg"],
    description:
      "A milder, sweeter onion with red-purple skin — good raw or cooked.",
    imageKey: "prodRedOnion",
    featured: true,
  },
  {
    slug: "white-onion",
    name: "White Onion",
    category: "onions",
    packSizes: ["5kg", "10kg"],
    description: "A firm, all-purpose cooking onion with a clean, sharp flavour.",
    imageKey: "prodWhiteOnion",
  },
  {
    slug: "white-jumbo-onion",
    name: "White Jumbo Onion",
    category: "onions",
    packSizes: ["20kg"],
    description: "Large-format white onions, packed for high-volume kitchens.",
    imageKey: "prodWhiteJumboOnion",
  },

  // ---- Tomatoes ----
  {
    slug: "tomato",
    name: "Tomato",
    category: "tomatoes",
    packSizes: [],
    description: "Standard round tomatoes for everyday kitchen use.",
    imageKey: "prodTomato",
    featured: true,
  },
  {
    slug: "cherry-tomato",
    name: "Cherry Tomato",
    category: "tomatoes",
    packSizes: [],
    description: "Small, sweet tomatoes for salads, garnish and cooking.",
    imageKey: "prodCherryTomato",
  },

  // ---- Roots ----
  {
    slug: "ginger",
    name: "Ginger",
    category: "roots",
    packSizes: [],
    description: "Fresh ginger root, a kitchen staple for flavour bases and marinades.",
    imageKey: "prodGinger",
    featured: true,
  },
  {
    slug: "garlic",
    name: "Garlic",
    category: "roots",
    packSizes: [],
    description: "Fresh garlic bulbs for everyday kitchen use.",
    imageKey: "prodGarlic",
  },
  {
    slug: "carrot",
    name: "Carrot",
    category: "roots",
    packSizes: [],
    description: "Firm, everyday carrots for cooking, roasting and prep.",
    imageKey: "prodCarrot",
    featured: true,
  },
  {
    slug: "daikon",
    name: "Daikon",
    category: "roots",
    packSizes: [],
    description: "A large white radish, commonly used in Asian cooking.",
    imageKey: "prodDaikon",
  },

  // ---- Greens ----
  {
    slug: "cauliflower",
    name: "Cauliflower",
    category: "greens",
    packSizes: [],
    description: "Whole-head cauliflower for roasting, steaming or purées.",
    imageKey: "prodCauliflower",
  },
  {
    slug: "cabbage",
    name: "Cabbage",
    category: "greens",
    packSizes: [],
    description: "Firm, everyday cabbage for slaws, stir-fries and cooking.",
    imageKey: "prodCabbage",
  },
  {
    slug: "broccoli",
    name: "Broccoli",
    category: "greens",
    packSizes: [],
    description: "Fresh broccoli heads for steaming, roasting and stir-fries.",
    imageKey: "prodBroccoli",
    featured: true,
  },
  {
    slug: "silverbeet",
    name: "Silverbeet",
    category: "greens",
    packSizes: [],
    description: "Leafy silverbeet (chard), a hardy everyday green.",
    imageKey: "prodSilverbeet",
  },
  {
    slug: "curly-kale",
    name: "Curly Kale",
    category: "greens",
    packSizes: [],
    description: "Curly-leaf kale for cooking, salads and garnish.",
    imageKey: "prodCurlyKale",
  },
  {
    slug: "black-kale",
    name: "Black Kale",
    category: "greens",
    packSizes: [],
    description: "Also known as cavolo nero — a dark, tender-leaved kale.",
    imageKey: "prodBlackKale",
  },
  {
    slug: "spinach",
    name: "Spinach",
    category: "greens",
    packSizes: [],
    description: "Fresh spinach leaves for cooking and salads.",
    imageKey: "prodSpinach",
  },

  // ---- Herbs ----
  {
    slug: "fresh-coriander",
    name: "Fresh Coriander",
    category: "herbs",
    packSizes: [],
    description: "Bunched fresh coriander (cilantro) for garnish and flavour.",
    imageKey: "prodCoriander",
    featured: true,
  },
  {
    slug: "mint",
    name: "Mint",
    category: "herbs",
    packSizes: [],
    description: "Fresh mint, bunched for kitchen and beverage use.",
    imageKey: "prodMint",
  },
  {
    slug: "parsley-curly",
    name: "Parsley Curly",
    category: "herbs",
    packSizes: [],
    description: "Curly-leaf parsley, bunched fresh.",
    imageKey: "prodParsleyCurly",
  },
  {
    slug: "italian-parsley",
    name: "Italian Parsley",
    category: "herbs",
    packSizes: [],
    description: "Flat-leaf parsley with a stronger flavour, bunched fresh.",
    imageKey: "prodItalianParsley",
  },
  {
    slug: "spring-onion",
    name: "Spring Onion",
    category: "herbs",
    packSizes: [],
    description: "Bunched spring onions (scallions) for garnish and cooking.",
    imageKey: "prodSpringOnion",
  },

  // ---- Other Vegetables ----
  {
    slug: "cucumber",
    name: "Cucumber",
    category: "other-vegetables",
    packSizes: [],
    description: "Standard fresh cucumbers for everyday kitchen use.",
    imageKey: "prodCucumber",
    featured: true,
  },
  {
    slug: "capsicum",
    name: "Capsicum",
    category: "other-vegetables",
    packSizes: [],
    description: "Fresh capsicum (bell peppers) for cooking and salads.",
    imageKey: "prodCapsicum",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}
