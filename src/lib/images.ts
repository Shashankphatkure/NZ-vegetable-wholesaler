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
    alt: "A pile of fresh potatoes",
    credit: "Client-supplied photography",
  },
  catOnions: {
    url: "/images/catOnions.jpg",
    alt: "Red, white and brown onions together",
    credit: "Client-supplied photography",
  },
  catTomatoes: {
    url: "/images/catTomatoes.jpg",
    alt: "Fresh vine and cherry tomatoes",
    credit: "Client-supplied photography",
  },
  catRoots: {
    url: "/images/catRoots.jpg",
    alt: "Ginger, garlic, carrots and daikon together",
    credit: "Client-supplied photography",
  },
  catGreens: {
    url: "/images/catGreens.jpg",
    alt: "Fresh kale, broccoli, spinach and leafy greens",
    credit: "Client-supplied photography",
  },
  catHerbs: {
    url: "/images/catHerbs.jpg",
    alt: "Fresh coriander, parsley, mint and spring onion",
    credit: "Client-supplied photography",
  },
  catOther: {
    url: "/images/catOther.jpg",
    alt: "Fresh cucumbers and red, green and yellow capsicum",
    credit: "Client-supplied photography",
  },
  // ---- Product studio shots (client-supplied) ----
  prodAgriaPotato: {
    url: "/images/prodAgriaPotato.jpg",
    alt: "A single Agria potato",
    credit: "Client-supplied photography",
  },
  prodMoonlightPotato: {
    url: "/images/prodMoonlightPotato.jpg",
    alt: "A single Moonlight potato",
    credit: "Client-supplied photography",
  },
  prodMoonlightLargePotato: {
    url: "/images/prodMoonlightLargePotato.jpg",
    alt: "A single large Moonlight potato",
    credit: "Client-supplied photography",
  },
  prodRedOnion: {
    url: "/images/prodRedOnion.jpg",
    alt: "A whole red onion",
    credit: "Client-supplied photography",
  },
  prodWhiteOnion: {
    url: "/images/prodWhiteOnion.jpg",
    alt: "A whole white onion",
    credit: "Client-supplied photography",
  },
  prodWhiteJumboOnion: {
    url: "/images/prodWhiteJumboOnion.jpg",
    alt: "A whole white jumbo onion",
    credit: "Client-supplied photography",
  },
  prodTomato: {
    url: "/images/prodTomato.jpg",
    alt: "A ripe red tomato",
    credit: "Client-supplied photography",
  },
  prodCherryTomato: {
    url: "/images/prodCherryTomato.jpg",
    alt: "A truss of ripe cherry tomatoes on the vine",
    credit: "Client-supplied photography",
  },
  prodGinger: {
    url: "/images/prodGinger.jpg",
    alt: "A hand of fresh ginger root",
    credit: "Client-supplied photography",
  },
  prodGarlic: {
    url: "/images/prodGarlic.jpg",
    alt: "A garlic bulb with two loose cloves",
    credit: "Client-supplied photography",
  },
  prodCarrot: {
    url: "/images/prodCarrot.jpg",
    alt: "A single fresh carrot",
    credit: "Client-supplied photography",
  },
  prodDaikon: {
    url: "/images/prodDaikon.jpg",
    alt: "A whole daikon radish with stems",
    credit: "Client-supplied photography",
  },
  prodCauliflower: {
    url: "/images/prodCauliflower.jpg",
    alt: "A whole cauliflower with outer leaves",
    credit: "Client-supplied photography",
  },
  prodCabbage: {
    url: "/images/prodCabbage.jpg",
    alt: "A whole green cabbage",
    credit: "Client-supplied photography",
  },
  prodBroccoli: {
    url: "/images/prodBroccoli.jpg",
    alt: "A head of fresh broccoli",
    credit: "Client-supplied photography",
  },
  prodSilverbeet: {
    url: "/images/prodSilverbeet.jpg",
    alt: "Fresh silverbeet leaves with white stems",
    credit: "Client-supplied photography",
  },
  prodCurlyKale: {
    url: "/images/prodCurlyKale.jpg",
    alt: "A bunch of fresh curly kale",
    credit: "Client-supplied photography",
  },
  prodBlackKale: {
    url: "/images/prodBlackKale.jpg",
    alt: "A bunch of black kale (cavolo nero)",
    credit: "Client-supplied photography",
  },
  prodSpinach: {
    url: "/images/prodSpinach.jpg",
    alt: "A bunch of fresh spinach",
    credit: "Client-supplied photography",
  },
  prodCoriander: {
    url: "/images/prodCoriander.jpg",
    alt: "A bunch of fresh coriander",
    credit: "Client-supplied photography",
  },
  prodMint: {
    url: "/images/prodMint.jpg",
    alt: "A bunch of fresh mint",
    credit: "Client-supplied photography",
  },
  prodParsleyCurly: {
    url: "/images/prodParsleyCurly.jpg",
    alt: "A bunch of fresh curly parsley",
    credit: "Client-supplied photography",
  },
  prodItalianParsley: {
    url: "/images/prodItalianParsley.jpg",
    alt: "A bunch of fresh flat-leaf Italian parsley",
    credit: "Client-supplied photography",
  },
  prodSpringOnion: {
    url: "/images/prodSpringOnion.jpg",
    alt: "A bunch of fresh spring onions",
    credit: "Client-supplied photography",
  },
  prodCucumber: {
    url: "/images/prodCucumber.jpg",
    alt: "A whole fresh cucumber",
    credit: "Client-supplied photography",
  },
  prodCapsicum: {
    url: "/images/prodCapsicum.jpg",
    alt: "A whole green capsicum",
    credit: "Client-supplied photography",
  },
};

export function getImage(key: string): ImageAsset {
  return images[key] ?? { url: "", alt: "" };
}
