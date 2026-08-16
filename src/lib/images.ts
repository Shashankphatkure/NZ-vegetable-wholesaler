export interface ImageAsset {
  url: string;
  alt: string;
  credit?: string;
}

// Free-to-use stock photography (Wikimedia Commons, CC-licensed / public
// domain), downloaded and self-hosted from /public/images so the site has
// no runtime dependency on an external image host. Standing in for the
// client's real photography — swap the url here once real photos (crates,
// packhouse, delivery fleet, Pukekohe land, founder) are supplied, it
// updates everywhere the key is used.
export const images: Record<string, ImageAsset> = {
  heroHome: {
    url: "/images/heroHome.jpg",
    alt: "Crates of fresh mixed vegetables stacked on a farm",
    credit: "Vegetable crates at Northwold Farm — Wikimedia Commons",
  },
  heroAbout: {
    url: "/images/storySection.jpg",
    alt: "Close-up of hands sorting fresh produce",
    credit: "Sorting fresh greens by hand — Wikimedia Commons",
  },
  heroServices: {
    url: "/images/heroServices.jpg",
    alt: "Pallets stored in a modern warehouse racking system",
    credit: "Modern warehouse with pallet rack storage system — Wikimedia Commons",
  },
  heroShop: {
    url: "/images/heroShop.jpg",
    alt: "An abundant, colourful display of fresh mixed vegetables",
    credit: "Colorful Vegetable Display at Wadi Kaam Market — Wikimedia Commons",
  },
  storySection: {
    url: "/images/storySection.jpg",
    alt: "Close-up of hands sorting fresh greens",
    credit: "Sorting fresh greens by hand — Wikimedia Commons",
  },
  nzLandscape: {
    url: "/images/nzLandscape.jpg",
    alt: "Green rolling hills in Lindis Pass, New Zealand",
    credit: "Hills in Lindis Pass, New Zealand — Wikimedia Commons",
  },
  contactBanner: {
    url: "/images/contactBanner.jpg",
    alt: "A quiet rural New Zealand landscape",
    credit: "New Zealand - Rural landscape — Wikimedia Commons",
  },
  catPotatoes: {
    url: "/images/catPotatoes.jpg",
    alt: "Crates of fresh potatoes",
    credit: "Potato crates — Wikimedia Commons",
  },
  catOnions: {
    url: "/images/catOnions.jpg",
    alt: "A mix of fresh onions",
    credit: "Mixed onions — Wikimedia Commons",
  },
  catTomatoes: {
    url: "/images/catTomatoes.jpg",
    alt: "Fresh tomatoes stacked at a market stall",
    credit: "Fresh tomatoes stacked at market stall — Wikimedia Commons",
  },
  catRoots: {
    url: "/images/catRoots.jpg",
    alt: "A pile of fresh carrots",
    credit: "Carrots of many colors — Wikimedia Commons",
  },
  catGreens: {
    url: "/images/catGreens.jpg",
    alt: "A fresh whole cabbage",
    credit: "Chou cabus blanc — Wikimedia Commons",
  },
  catHerbs: {
    url: "/images/catHerbs.jpg",
    alt: "A bunch of freshly picked herbs",
    credit: "Freshly picked herbs — Wikimedia Commons",
  },
  catOther: {
    url: "/images/catOther.jpg",
    alt: "Fresh capsicum in sacks",
    credit: "Fresh capsicum in sacks — Wikimedia Commons",
  },
  prodAgriaPotato: {
    url: "/images/prodAgriaPotato.jpg",
    alt: "A freshly harvested pile of potatoes",
    credit: "Potato harvest, Meeden (2020) — Wikimedia Commons",
  },
  prodRedOnion: {
    url: "/images/prodRedOnion.jpg",
    alt: "A fresh red onion",
    credit: "Red Onion on White — Wikimedia Commons",
  },
  prodTomato: {
    url: "/images/prodTomato.jpg",
    alt: "Fresh tomatoes",
    credit: "Organic home-grown tomatoes — Wikimedia Commons",
  },
  prodGinger: {
    url: "/images/prodGinger.jpg",
    alt: "Fresh ginger root",
    credit: "Fresh Ginger Root — Wikimedia Commons",
  },
  prodBroccoli: {
    url: "/images/prodBroccoli.jpg",
    alt: "A fresh head of broccoli",
    credit: "Broccoli — Wikimedia Commons",
  },
  prodCoriander: {
    url: "/images/prodCoriander.jpg",
    alt: "Bunches of fresh coriander, Wellington, New Zealand",
    credit: "Coriander bunches, Wellington, New Zealand — Wikimedia Commons",
  },
  prodCucumber: {
    url: "/images/prodCucumber.jpg",
    alt: "Fresh cucumbers on sale at a market",
    credit: "Ryerson Market cucumbers on sale — Wikimedia Commons",
  },
  prodCarrot: {
    url: "/images/prodCarrot.jpg",
    alt: "A bunch of fresh carrots",
    credit: "Bunch of carrots — Wikimedia Commons",
  },
  prodCauliflower: {
    url: "/images/prodCauliflower.jpg",
    alt: "A fresh whole cauliflower",
    credit: "Cauliflower from San Francisco farmers market — Wikimedia Commons",
  },
  prodSilverbeet: {
    url: "/images/prodSilverbeet.jpg",
    alt: "Fresh rainbow chard (silverbeet) leaves",
    credit: "Rainbow chard for sale at the Campbell farmers market — Wikimedia Commons",
  },
  prodCurlyKale: {
    url: "/images/prodCurlyKale.jpg",
    alt: "Fresh curly kale leaves",
    credit: "Brassica oleracea var. acephala — Wikimedia Commons",
  },
  prodBlackKale: {
    url: "/images/prodBlackKale.jpg",
    alt: "Fresh black kale (cavolo nero / lacinato kale)",
    credit: "Lacinato kale — Wikimedia Commons",
  },
  prodSpinach: {
    url: "/images/prodSpinach.jpg",
    alt: "Fresh spinach leaves",
    credit: "Fresh Spinach leaves — Wikimedia Commons",
  },
  prodMint: {
    url: "/images/prodMint.jpg",
    alt: "Fresh mint leaves",
    credit: "Fresh Mint from San Francisco Farmers Market — Wikimedia Commons",
  },
  prodParsleyCurly: {
    url: "/images/prodParsleyCurly.jpg",
    alt: "Bunches of fresh curly parsley, Wellington, New Zealand",
    credit: "Parsley bunches, Wellington, New Zealand — Wikimedia Commons",
  },
  prodItalianParsley: {
    url: "/images/prodItalianParsley.jpg",
    alt: "Fresh flat-leaf Italian parsley",
    credit: "Petroselinum crispum Neapolitanum — Wikimedia Commons",
  },
  prodSpringOnion: {
    url: "/images/prodSpringOnion.jpg",
    alt: "Bunches of fresh spring onions",
    credit: "Bunches of spring onions — Wikimedia Commons",
  },
  prodGarlic: {
    url: "/images/prodGarlic.jpg",
    alt: "Fresh garlic bulbs",
    credit: "Fresh Garlic — Wikimedia Commons",
  },
  prodDaikon: {
    url: "/images/prodDaikon.jpg",
    alt: "A fresh daikon radish",
    credit: "Daikon — Wikimedia Commons",
  },
  prodWhiteJumboOnion: {
    url: "/images/prodWhiteJumboOnion.jpg",
    alt: "A pile of fresh white onions",
    credit: "White onions — Wikimedia Commons",
  },
  prodCabbage: {
    url: "/images/prodCabbage.jpg",
    alt: "Fresh whole cabbages",
    credit: "Fresh cabbages — Wikimedia Commons",
  },
};

export function getImage(key: string): ImageAsset {
  return images[key] ?? { url: "", alt: "" };
}
