export type CategorySlug =
  | "potatoes"
  | "onions"
  | "tomatoes"
  | "roots"
  | "greens"
  | "herbs"
  | "other-vegetables";

export interface Category {
  slug: CategorySlug;
  name: string;
  imageKey: string;
  blurb: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  packSizes: string[];
  description: string;
  imageKey: string;
  featured?: boolean;
}
