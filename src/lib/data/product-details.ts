import type { ProductDetails } from "@/lib/types";

// Rich content for each product page. Keyed by product slug so the base
// catalogue in products.ts stays a thin, swappable record.
export const productDetails: Record<string, ProductDetails> = {
  // ---- Potatoes ----
  "agria-potato": {
    origin:
      "Pukekohe and the wider Franklin district — one of New Zealand's main potato-growing regions.",
    season:
      "Available year-round. New-season Agria arrives from late summer; stored crop carries supply through winter and spring.",
    storage:
      "Keep in a cool, dark, well-ventilated dry store at 7–10°C. Do not refrigerate (cold storage converts starch to sugar and causes dark fry colour). Keep out of light to prevent greening.",
    chefUses: [
      "Roast potatoes with a crisp shell and fluffy centre",
      "Hand-cut chips and fries with consistent golden colour",
      "Smooth, dry mash that takes butter and cream well",
      "Gnocchi, rösti and potato cakes",
    ],
    faqs: [
      {
        question: "What pack sizes do you supply Agria potatoes in?",
        answer:
          "Agria is available in 5kg, 10kg and 20kg packs. Most restaurants take 10kg or 20kg; cafes with lighter volume usually take 5kg or 10kg.",
      },
      {
        question: "Is Agria good for chips?",
        answer:
          "Yes. Agria's high dry-matter, floury texture is the standard choice for chips and roasting in New Zealand kitchens because it fries crisp and holds colour.",
      },
    ],
  },
  "moonlight-potato": {
    origin: "Grown in the Pukekohe / Waikato growing belt.",
    season: "Year-round supply; peak quality from late summer through autumn.",
    storage:
      "Cool (7–10°C), dark and dry. Keep the bag closed or covered to prevent greening. Use within 2–3 weeks for best texture.",
    chefUses: [
      "Potato salads that hold their shape",
      "Boiled and steamed sides",
      "Casseroles, gratins and bakes",
      "Skin-on wedges",
    ],
  },
  "moonlight-large-potato": {
    origin:
      "Grown in the Pukekohe / Waikato growing belt; graded large for foodservice.",
    season: "Year-round supply; peak quality from late summer through autumn.",
    storage:
      "Cool (7–10°C), dark and dry. The 20kg case should be kept off the floor with airflow around it.",
    chefUses: [
      "High-volume peeling and portioning",
      "Jacket potatoes and large wedges",
      "Bulk boiled potato for salads and prep",
      "Gratins and bakes where uniform slices matter",
    ],
  },

  // ---- Onions ----
  "red-onion": {
    origin: "Pukekohe — New Zealand's onion-growing heartland.",
    season:
      "Year-round. Fresh-harvest NZ crop from late summer; cured, stored onions through winter and spring.",
    storage:
      "Dry, cool (4–10°C is fine for cured onions), dark and ventilated. Keep away from potatoes, which release moisture. Once cut, refrigerate covered and use within 2 days.",
    chefUses: [
      "Raw in salads, salsas, burgers and sandwiches",
      "Pickled red onion for garnish",
      "Caramelised onion and grilled skewers",
      "Colour contrast on cold plates",
    ],
  },
  "white-onion": {
    origin: "Pukekohe — New Zealand's onion-growing heartland.",
    season:
      "Year-round. Fresh-harvest from late summer, cured stock through the rest of the year.",
    storage:
      "Dry, cool, dark and ventilated. Keep in the mesh bag rather than sealed plastic. Discard any with soft necks.",
    chefUses: [
      "Diced base for stocks, soups and sauces",
      "Sautéed and sweated aromatics",
      "Curries, stir-fries and braises",
      "Onion rings and fried onion",
    ],
  },
  "white-jumbo-onion": {
    origin: "Pukekohe — graded jumbo for foodservice.",
    season:
      "Year-round; jumbo grading depends on the season's crop, so ask about availability for large standing orders.",
    storage:
      "Dry, cool, dark and ventilated. Keep the 20kg sack off the floor with air circulation.",
    chefUses: [
      "Fast prep — fewer onions to peel per kilo",
      "Large uniform rings for burgers and fried onion",
      "Bulk sauce, gravy and stock bases",
      "Central kitchens and caterers",
    ],
  },

  // ---- Tomatoes ----
  tomato: {
    origin:
      "New Zealand glasshouse-grown, mainly Auckland and Waikato growers.",
    season:
      "Year-round from glasshouse supply. Best value and flavour in summer and early autumn; winter pricing rises with heating costs.",
    storage:
      "Store at 10–13°C, never in the walk-in chiller if you can avoid it — cold storage kills flavour and makes the flesh mealy. Use within 4–6 days.",
    chefUses: [
      "Slicing for burgers, sandwiches and salads",
      "Diced for salsa, bruschetta and garnish",
      "Roasted and cooked down into sauces",
      "Breakfast service — grilled and roasted",
    ],
  },
  "cherry-tomato": {
    origin: "New Zealand glasshouse-grown.",
    season: "Year-round; sweetest from December to April.",
    storage:
      "Store at room or cellar temperature (10–13°C) in the punnet or a shallow tray. Refrigeration dulls sweetness. Use within 5–7 days.",
    chefUses: [
      "Halved through salads and grain bowls",
      "Quick-roasted or blistered for pasta and plating",
      "Skewers and garnish",
      "Confit tomato for breakfast and brunch menus",
    ],
  },

  // ---- Roots ----
  ginger: {
    origin:
      "Imported fresh ginger (predominantly Fiji, China and Thailand depending on season), supplied fresh and firm.",
    season:
      "Year-round. Supply source shifts through the year; quality is checked on receipt.",
    storage:
      "Refrigerate unwrapped in the crisper or in a paper bag. Whole roots keep 3–4 weeks. Peeled or cut ginger should be covered and used within a week.",
    chefUses: [
      "Grated into marinades, dressings and curry pastes",
      "Sliced into broths, stir-fries and steamed dishes",
      "Juiced or infused for drinks and syrups",
      "Pickled ginger for sushi and garnish",
    ],
  },
  garlic: {
    origin:
      "New Zealand-grown garlic when in season; imported to bridge supply gaps.",
    season: "NZ crop harvested December–January and stored through the year.",
    storage:
      "Keep whole bulbs dry, dark and ventilated at room temperature. Do not refrigerate whole bulbs — it triggers sprouting. Peeled cloves should be refrigerated and used within a few days.",
    chefUses: [
      "Roasted whole or as cloves",
      "Crushed base for sauces, marinades and stocks",
      "Confit garlic and garlic butter",
      "Raw in aioli, dressings and pastes",
    ],
  },
  carrot: {
    origin: "Grown in Ohakune, Pukekohe and the Waikato depending on season.",
    season: "Year-round supply. Winter carrots are sweeter and firmer.",
    storage:
      "Refrigerate at 0–4°C in a bag or covered crate to hold moisture. Remove any green tops before storing. Keeps 2–3 weeks.",
    chefUses: [
      "Mirepoix for stocks, soups and braises",
      "Roasted whole or batons as a side",
      "Grated raw for slaws and salads",
      "Purées and soups",
    ],
  },
  daikon: {
    origin: "Grown in the Auckland and Waikato regions.",
    season: "Year-round; best quality through autumn and winter.",
    storage:
      "Refrigerate wrapped or in a covered crate at 0–4°C. Keeps 2–3 weeks; trim any leaves first.",
    chefUses: [
      "Shredded raw for salads and sashimi garnish",
      "Pickled (takuan, kimchi, do chua) for banh mi and bowls",
      "Simmered in broths, oden and braises",
      "Grated as a condiment for tempura and grilled fish",
    ],
  },

  // ---- Greens ----
  cauliflower: {
    origin: "Auckland (Pukekohe) and Waikato growers.",
    season:
      "Year-round; peak quality and best pricing from autumn to spring.",
    storage:
      "Refrigerate at 0–4°C, stem-side down, loosely covered. Use within 5–7 days.",
    chefUses: [
      "Whole-roasted or steak-cut centrepieces",
      "Cauliflower rice and purée",
      "Battered or fried florets and pakora",
      "Soups, gratins and cheese bakes",
    ],
  },
  cabbage: {
    origin: "Pukekohe and Waikato growers.",
    season: "Year-round; sweetest and firmest in the cooler months.",
    storage:
      "Refrigerate whole at 0–4°C; keeps 2–3 weeks. Once cut, wrap tightly and use within 3–4 days.",
    chefUses: [
      "Coleslaw and shredded raw salads",
      "Stir-fries, braised cabbage and dumplings",
      "Sauerkraut, kimchi and pickles",
      "Wraps and rolls",
    ],
  },
  broccoli: {
    origin: "Pukekohe and Waikato growers.",
    season:
      "Year-round; best quality from autumn to spring, when heads are tight and deep green.",
    storage:
      "Refrigerate at 0–4°C, unwashed, in a breathable bag or crate. Use within 4–6 days — it yellows fast when warm.",
    chefUses: [
      "Blanched and finished in butter or oil",
      "Roasted florets and charred broccoli",
      "Stir-fries and noodle dishes",
      "Broccoli soup and green purées",
    ],
  },
  silverbeet: {
    origin: "Auckland growers.",
    season: "Year-round; abundant through winter.",
    storage: "Refrigerate at 0–4°C in a bag; use within 3–5 days.",
    chefUses: [
      "Sautéed with garlic as a side",
      "Braised in pies, tarts and filo",
      "Stems cooked separately as a vegetable",
      "Stirred through soups and stews",
    ],
  },
  "curly-kale": {
    origin: "Auckland growers.",
    season: "Year-round; best flavour after cooler weather.",
    storage: "Refrigerate at 0–4°C, unwashed, in a bag. Use within 5–7 days.",
    chefUses: [
      "Massaged raw kale salads",
      "Kale chips and crisped garnish",
      "Sautéed sides and grain bowls",
      "Soups and minestrone",
    ],
  },
  "black-kale": {
    origin: "Auckland growers.",
    season: "Year-round; most tender through the cooler months.",
    storage: "Refrigerate at 0–4°C in a bag; use within 4–6 days.",
    chefUses: [
      "Ribollita, minestrone and bean soups",
      "Sautéed cavolo nero with garlic and chilli",
      "Braised as a side to roasted meats",
      "Pasta and risotto",
    ],
  },
  spinach: {
    origin: "Auckland growers.",
    season: "Year-round; best in spring and autumn.",
    storage:
      "Refrigerate at 0–4°C, dry, in a bag or lined crate. Use within 3–4 days.",
    chefUses: [
      "Wilted into pasta, curries and eggs",
      "Raw salad base",
      "Blended into sauces, dips and green smoothies",
      "Spanakopita and spinach fillings",
    ],
  },

  // ---- Herbs ----
  "fresh-coriander": {
    origin: "Auckland glasshouse and field growers.",
    season: "Year-round; supply tightens in the coldest weeks of winter.",
    storage:
      "Refrigerate stems in a little water with a bag over the leaves, or wrap in damp paper. Use within 4–5 days.",
    chefUses: [
      "Fresh garnish for curries, pho and tacos",
      "Chutneys, salsas and green sauces",
      "Blended into pastes and marinades",
      "Salads and slaws",
    ],
  },
  mint: {
    origin: "Auckland growers.",
    season: "Year-round; most abundant spring to autumn.",
    storage:
      "Refrigerate stems in water with a bag over the leaves. Use within 5–7 days.",
    chefUses: [
      "Cocktails, mocktails and iced tea",
      "Salads, tabbouleh and raita",
      "Mint sauce and chimichurri",
      "Dessert garnish",
    ],
  },
  "parsley-curly": {
    origin: "Auckland growers.",
    season: "Year-round.",
    storage: "Refrigerate in a bag or with stems in water. Use within 5–7 days.",
    chefUses: [
      "Plate garnish",
      "Stocks, bouquet garni and sauces",
      "Chopped through salads and sides",
      "Herb butters",
    ],
  },
  "italian-parsley": {
    origin: "Auckland growers.",
    season: "Year-round.",
    storage:
      "Refrigerate with stems in water and a bag over the leaves. Use within 5–7 days.",
    chefUses: [
      "Salsa verde, gremolata and chimichurri",
      "Finishing pasta, seafood and grilled meats",
      "Tabbouleh and grain salads",
      "Dressings and herb oils",
    ],
  },
  "spring-onion": {
    origin: "Auckland growers.",
    season: "Year-round.",
    storage: "Refrigerate at 0–4°C wrapped or in a bag. Use within 5–7 days.",
    chefUses: [
      "Sliced garnish for noodles, ramen and rice",
      "Stir-fries and fried rice",
      "Pancakes, dumplings and omelettes",
      "Grilled whole as a side",
    ],
  },

  // ---- Other Vegetables ----
  cucumber: {
    origin: "New Zealand glasshouse-grown, mainly Auckland.",
    season: "Year-round; best value in summer.",
    storage:
      "Store at 10–12°C where possible. In a standard chiller, keep them wrapped and use within 5 days to avoid chill damage.",
    chefUses: [
      "Sliced for salads, sandwiches and platters",
      "Quick pickles and tzatziki",
      "Sushi rolls and poke bowls",
      "Gazpacho and cold soups",
    ],
  },
  capsicum: {
    origin: "New Zealand glasshouse-grown, mainly Auckland and Waikato.",
    season: "Year-round; best pricing from late summer through autumn.",
    storage:
      "Refrigerate at 7–10°C. Use within 1–2 weeks. Green capsicum keeps longer than red or yellow.",
    chefUses: [
      "Roasted and peeled for antipasto and sandwiches",
      "Stir-fries and fajitas",
      "Stuffed capsicum",
      "Raw in salads and crudités",
    ],
  },
};

export function getProductDetails(slug: string): ProductDetails | undefined {
  return productDetails[slug];
}
