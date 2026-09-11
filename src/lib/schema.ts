import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/seo";
import { images } from "@/lib/images";
import { getCategory } from "@/lib/data/categories";
import type { Faq, Post, Product, ProductDetails } from "@/lib/types";

// Schema.org JSON-LD builders. Each returns a plain object; render it with
// <JsonLd data={...} />. IDs are stable so Google can stitch the graph
// together across pages (Organization <- Product.brand, Article.publisher…).

export const ORG_ID = absoluteUrl("/#organization");
export const WEBSITE_ID = absoluteUrl("/#website");

function imageUrl(imageKey: string) {
  const asset = images[imageKey];
  return asset?.url ? absoluteUrl(asset.url) : absoluteUrl("/opengraph-image");
}

export function organizationSchema() {
  const { address, geo, openingHours } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "WholesaleStore"],
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl("/images/heroHome.jpg"),
    description: siteConfig.description,
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundedYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.locality,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "$$",
    currenciesAccepted: "NZD",
    knowsAbout: [
      "Wholesale vegetable supply",
      "Fresh produce delivery",
      "Restaurant produce supply",
      "Pukekohe potatoes and onions",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wholesale fresh produce supply and delivery",
        areaServed: siteConfig.regions.join(", "),
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-NZ",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productSchema(product: Product, details?: ProductDetails) {
  const category = getCategory(product.category);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": absoluteUrl(`/shop/${product.slug}#product`),
    name: product.name,
    description: product.description,
    image: imageUrl(product.imageKey),
    category: category?.name,
    brand: { "@id": ORG_ID },
    manufacturer: { "@id": ORG_ID },
    url: absoluteUrl(`/shop/${product.slug}`),
    additionalProperty: [
      ...product.packSizes.map((size) => ({
        "@type": "PropertyValue",
        name: "Pack size",
        value: size,
      })),
      ...(details
        ? [
            { "@type": "PropertyValue", name: "Origin", value: details.origin },
            { "@type": "PropertyValue", name: "Season", value: details.season },
          ]
        : []),
    ],
    // Wholesale pricing is quoted per order, so we describe the offer without
    // a fixed price. Google accepts Offer without price when availability is
    // set; this is honest and keeps the Product eligible for rich results.
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/shop/${product.slug}`),
      availability: "https://schema.org/InStock",
      priceCurrency: "NZD",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
      areaServed: siteConfig.regions.join(", "),
      seller: { "@id": ORG_ID },
    },
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: imageUrl(post.imageKey),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Founder",
      worksFor: { "@id": ORG_ID },
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: url,
    url,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-NZ",
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl("/services#service"),
    name: "Wholesale fresh produce supply",
    serviceType: "Wholesale vegetable supply and delivery",
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Restaurants, cafes, caterers and commercial kitchens",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        "Wholesale supply",
        "Bulk orders",
        "Business delivery across Auckland and Hamilton",
        "Freight coordination for the rest of New Zealand",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function areaServiceSchema(area: {
  slug: string;
  name: string;
  placeType: "City" | "AdministrativeArea";
  seoDescription: string;
  suburbs: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/areas/${area.slug}#service`),
    name: `Wholesale fresh produce supply and delivery — ${area.name}`,
    serviceType: "Wholesale vegetable supply and delivery",
    description: area.seoDescription,
    provider: { "@id": ORG_ID },
    url: absoluteUrl(`/areas/${area.slug}`),
    areaServed: [
      { "@type": area.placeType, name: area.name },
      ...area.suburbs
        .filter((s) => !s.includes("(by arrangement)"))
        .map((name) => ({ "@type": "Place", name })),
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Restaurants, cafes, takeaways and caterers",
    },
  };
}
