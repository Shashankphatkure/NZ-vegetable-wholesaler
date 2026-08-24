export const siteConfig = {
  name: "VegieFresh",
  shortName: "VegieFresh",
  url: "https://nz-vegetable-wholesaler.vercel.app",
  description:
    "Quality vegetables supplied to restaurants, cafes and food businesses across New Zealand. Based in Pukekohe.",
  founder: "Satwant Singh",
  phone: "02108256766",
  phoneHref: "tel:+6402108256766",
  email: "satwantbatth2@gmail.com",
  address: {
    line1: "Pukekohe Road 2678",
    line2: "New Zealand",
    full: "Pukekohe Road 2678, New Zealand",
  },
  regions: ["Auckland", "Hamilton"],
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
  { label: "Contact", href: "/contact" },
] as const;
