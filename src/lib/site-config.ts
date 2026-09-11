export const siteConfig = {
  name: "VegieFresh",
  shortName: "VegieFresh",
  legalName: "VegieFresh",
  // Live domain. The vercel.app preview host is redirected here in
  // next.config.ts so search engines only ever see one canonical origin.
  url: "https://www.thevegie.co.nz",
  description:
    "Wholesale fresh vegetable supplier based in Pukekohe, delivering quality produce to restaurants, cafes and food businesses across Auckland and Hamilton.",
  tagline: "Fresh Produce Supplier, Pukekohe NZ",
  founder: "Satwant Singh",
  foundedYear: 2022,
  phone: "02108256766",
  phoneHref: "tel:+6402108256766",
  phoneInternational: "+64 21 0825 6766",
  email: "satwantbatth2@gmail.com",
  address: {
    line1: "Pukekohe Road 2678",
    line2: "New Zealand",
    full: "Pukekohe Road 2678, New Zealand",
    locality: "Pukekohe",
    region: "Auckland",
    country: "NZ",
  },
  geo: {
    // Pukekohe town centre — refine once the exact depot pin is confirmed.
    latitude: -37.2011,
    longitude: 174.9011,
  },
  regions: ["Auckland", "Hamilton"],
  serviceAreas: [
    "Pukekohe",
    "Auckland",
    "South Auckland",
    "Manukau",
    "Hamilton",
    "Waikato",
  ],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "17:00" },
    { days: ["Saturday"], opens: "06:00", closes: "12:00" },
  ],
  socials: {
    // Not supplied yet.
    facebook: null,
    instagram: null,
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
