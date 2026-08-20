import type { Product } from "@/lib/types";

export const products: Product[] = [
  // ---- Potatoes ----
  {
    slug: "agria-potato",
    name: "Agria Potato",
    category: "potatoes",
    packSizes: ["5kg", "10kg", "20kg"],
    description:
      "Agria is New Zealand's most widely grown all-purpose potato, valued for its dry, floury texture and pale yellow flesh. It roasts to a crisp, golden exterior with a fluffy centre, mashes smoothly without turning gluey, and holds its shape well when cut for chips and fries. A dependable, versatile choice for kitchens that need one potato to cover most of the menu.",
    imageKey: "prodAgriaPotato",
    featured: true,
  },
  {
    slug: "moonlight-potato",
    name: "Moonlight Potato",
    category: "potatoes",
    packSizes: ["10kg"],
    description:
      "Moonlight is a smooth-skinned, oval potato with pale yellow flesh and a firmer, waxier texture than Agria. It holds together well through boiling and steaming, making it a reliable choice for salads, casseroles and general prep where potatoes need to keep their shape. Supplied in smaller 10kg packs, it suits kitchens wanting a lighter, more manageable case size.",
    imageKey: "prodMoonlightPotato",
  },
  {
    slug: "moonlight-large-potato",
    name: "Moonlight Large Potato",
    category: "potatoes",
    packSizes: ["20kg"],
    description:
      "The same smooth-skinned, waxy-fleshed Moonlight variety, sized up and packed in bulk 20kg cases for high-volume kitchens. The larger tubers hold their shape well through boiling, steaming and roasting, making prep faster when peeling and portioning at scale — a practical option for commercial kitchens working through consistent daily volumes.",
    imageKey: "prodMoonlightLargePotato",
  },

  // ---- Onions ----
  {
    slug: "red-onion",
    name: "Red Onion",
    category: "onions",
    packSizes: ["5kg", "10kg"],
    description:
      "Red onions bring a milder, slightly sweet flavour and vivid red-purple skin that adds colour as well as taste to a dish. Eaten raw, they're crisp and mellow enough for salads, salsas and garnishes; cooked, they soften into a natural sweetness suited to caramelising, grilling and pickling. A kitchen staple for menus that call for onion with visual appeal.",
    imageKey: "prodRedOnion",
    featured: true,
  },
  {
    slug: "white-onion",
    name: "White Onion",
    category: "onions",
    packSizes: ["5kg", "10kg"],
    description:
      "White onions are a firm, all-purpose cooking onion with a clean, sharp bite that mellows and sweetens as it cooks. Their tight, papery skin and dense flesh make them reliable for dicing, sautéing and building flavour bases for sauces, soups and stocks — a dependable everyday onion for high-volume kitchen use.",
    imageKey: "prodWhiteOnion",
  },
  {
    slug: "white-jumbo-onion",
    name: "White Jumbo Onion",
    category: "onions",
    packSizes: ["20kg"],
    description:
      "The same reliable, sharp-flavoured white cooking onion, grown to a larger size and packed in bulk 20kg cases. The bigger bulbs mean fewer onions to peel and dice per kilo, saving prep time in busy commercial kitchens — ideal for high-volume operations working through consistent daily stock.",
    imageKey: "prodWhiteJumboOnion",
  },

  // ---- Tomatoes ----
  {
    slug: "tomato",
    name: "Tomato",
    category: "tomatoes",
    packSizes: [],
    description:
      "Standard round tomatoes with firm flesh and a balanced, everyday tomato flavour, suited to slicing, dicing, cooking down into sauces or serving fresh in salads and sandwiches. Supplied fresh for consistent quality across the week, they're a reliable base ingredient for menus that go through tomatoes daily.",
    imageKey: "prodTomato",
    featured: true,
  },
  {
    slug: "cherry-tomato",
    name: "Cherry Tomato",
    category: "tomatoes",
    packSizes: [],
    description:
      "Small, sweet cherry tomatoes with a higher sugar content and a bright, punchy flavour compared to standard tomatoes. Their bite-sized form makes them ideal for salads, garnish, skewers and quick roasting, where a burst of sweetness and colour lifts a dish without extra prep.",
    imageKey: "prodCherryTomato",
  },

  // ---- Roots ----
  {
    slug: "ginger",
    name: "Ginger",
    category: "roots",
    packSizes: [],
    description:
      "Fresh ginger root with a firm, fibrous texture and the sharp, aromatic heat that's a foundation flavour across countless cuisines. Used grated, sliced or minced, it forms the base of marinades, stir-fry pastes, soups and dressings, and keeps well when stored correctly — a kitchen staple worth having on hand at all times.",
    imageKey: "prodGinger",
    featured: true,
  },
  {
    slug: "garlic",
    name: "Garlic",
    category: "roots",
    packSizes: [],
    description:
      "Fresh garlic bulbs with firm, tightly-packed cloves and the pungent, savoury flavour that underpins most kitchen prep. Used raw, roasted or sautéed, garlic is one of the most reliably used ingredients across any menu — supplied fresh and firm for consistent flavour and shelf life.",
    imageKey: "prodGarlic",
  },
  {
    slug: "carrot",
    name: "Carrot",
    category: "roots",
    packSizes: [],
    description:
      "Firm, everyday carrots with a naturally sweet flavour that holds up well through cooking, roasting or raw prep. Reliable for stocks, mirepoix, salads and side dishes, carrots are one of the most consistently used vegetables in any commercial kitchen — supplied fresh and firm for easy peeling and prep.",
    imageKey: "prodCarrot",
    featured: true,
  },
  {
    slug: "daikon",
    name: "Daikon",
    category: "roots",
    packSizes: [],
    description:
      "Daikon is a large, mild white radish with crisp flesh and a subtly peppery bite that mellows when cooked. Common in Asian cuisine, it's used grated, pickled, simmered in broths or shredded raw into salads — a versatile ingredient for kitchens working across a range of cuisines.",
    imageKey: "prodDaikon",
  },

  // ---- Greens ----
  {
    slug: "cauliflower",
    name: "Cauliflower",
    category: "greens",
    packSizes: [],
    description:
      "Whole-head cauliflower with tight, creamy-white florets, versatile enough for roasting whole, steaming, puréeing or breaking down into rice-style prep. Its mild flavour takes on spices and marinades well, making it a flexible base for both traditional sides and modern menu items.",
    imageKey: "prodCauliflower",
  },
  {
    slug: "cabbage",
    name: "Cabbage",
    category: "greens",
    packSizes: [],
    description:
      "Firm, tightly-packed cabbage with crisp leaves that hold their crunch raw or soften well when cooked. A reliable everyday vegetable for slaws, stir-fries, braises and pickling, cabbage keeps well in storage and offers good value across high-volume kitchen use.",
    imageKey: "prodCabbage",
  },
  {
    slug: "broccoli",
    name: "Broccoli",
    category: "greens",
    packSizes: [],
    description:
      "Fresh broccoli heads with tight, deep-green florets and firm stalks, suited to steaming, roasting, blanching or stir-frying. A dependable everyday green that holds its colour and texture well through cooking, broccoli is a menu staple across both à la carte and high-volume kitchens.",
    imageKey: "prodBroccoli",
    featured: true,
  },
  {
    slug: "silverbeet",
    name: "Silverbeet",
    category: "greens",
    packSizes: [],
    description:
      "Silverbeet (chard) is a hardy, leafy green with broad dark leaves and firm white stems, both of which are edible. It wilts down well for sautéing and braising, and its slightly earthy, mineral flavour holds up alongside richer dishes — a robust everyday green for kitchen use.",
    imageKey: "prodSilverbeet",
  },
  {
    slug: "curly-kale",
    name: "Curly Kale",
    category: "greens",
    packSizes: [],
    description:
      "Curly kale has tightly ruffled, deep-green leaves with a firm texture and a mild, slightly bitter flavour that softens with cooking. It holds up well raw in salads when massaged, and cooks down reliably for sautés, soups and sides — a hardy, versatile green for year-round kitchen use.",
    imageKey: "prodCurlyKale",
  },
  {
    slug: "black-kale",
    name: "Black Kale",
    category: "greens",
    packSizes: [],
    description:
      "Also known as cavolo nero, black kale has long, dark, blistered leaves and a more tender texture than curly kale, with a deeper, slightly sweeter flavour. It cooks down quickly for sautés and braises, and holds its structure well in soups — a distinctive green favoured on modern menus.",
    imageKey: "prodBlackKale",
  },
  {
    slug: "spinach",
    name: "Spinach",
    category: "greens",
    packSizes: [],
    description:
      "Fresh spinach leaves with a tender texture and mild, slightly earthy flavour, equally suited to raw salads or quick cooking. It wilts down fast for sautés and sides, and blends smoothly into sauces, dips and purées — a versatile everyday green for any kitchen.",
    imageKey: "prodSpinach",
  },

  // ---- Herbs ----
  {
    slug: "fresh-coriander",
    name: "Fresh Coriander",
    category: "herbs",
    packSizes: [],
    description:
      "Bunched fresh coriander (cilantro) with a bright, citrusy aroma that's a core flavour across many world cuisines. Used as a garnish, blended into pastes and dressings, or stirred through dishes at the end of cooking, it's a staple herb for kitchens working with Asian, Mexican and Middle Eastern flavours.",
    imageKey: "prodCoriander",
    featured: true,
  },
  {
    slug: "mint",
    name: "Mint",
    category: "herbs",
    packSizes: [],
    description:
      "Fresh mint, bunched for kitchen and beverage use, with a cool, sweet aroma that lifts both savoury and sweet dishes. Common in salads, sauces, marinades and drinks, mint is a versatile herb that adds brightness wherever it's used.",
    imageKey: "prodMint",
  },
  {
    slug: "parsley-curly",
    name: "Parsley Curly",
    category: "herbs",
    packSizes: [],
    description:
      "Curly-leaf parsley, bunched fresh, with a mild, clean, slightly peppery flavour and a texture that holds up well as a garnish. A kitchen staple for finishing dishes, flavouring stocks and sauces, and adding a pop of green to any plate.",
    imageKey: "prodParsleyCurly",
  },
  {
    slug: "italian-parsley",
    name: "Italian Parsley",
    category: "herbs",
    packSizes: [],
    description:
      "Flat-leaf Italian parsley, bunched fresh, with a stronger, more herbaceous flavour than curly parsley and tender leaves that chop easily. Favoured for salsas, dressings, garnish and finishing dishes where a more pronounced parsley flavour is wanted.",
    imageKey: "prodItalianParsley",
  },
  {
    slug: "spring-onion",
    name: "Spring Onion",
    category: "herbs",
    packSizes: [],
    description:
      "Bunched spring onions (scallions) with crisp white stalks and tender green tops, both of which are used across raw and cooked dishes. Sliced fresh as a garnish or cooked into stir-fries, soups and sauces, spring onions add a mild onion flavour with a fresh, crisp bite.",
    imageKey: "prodSpringOnion",
  },

  // ---- Other Vegetables ----
  {
    slug: "cucumber",
    name: "Cucumber",
    category: "other-vegetables",
    packSizes: [],
    description:
      "Standard fresh cucumbers with crisp, watery flesh and a clean, refreshing flavour, suited to salads, sandwiches, garnish and pickling. A reliable everyday vegetable that holds its crunch well when stored correctly, making it a dependable addition to any kitchen's fresh produce order.",
    imageKey: "prodCucumber",
    featured: true,
  },
  {
    slug: "capsicum",
    name: "Capsicum",
    category: "other-vegetables",
    packSizes: [],
    description:
      "Fresh capsicum (bell peppers) with crisp, thick-walled flesh and a sweet, slightly grassy flavour that intensifies when roasted or grilled. Used raw in salads, sliced for garnish, or cooked into stir-fries and sauces, capsicum adds colour, crunch and flavour across a wide range of dishes.",
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
