import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LegalContent, type LegalSection } from "@/components/shared/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms of use for ${siteConfig.name}'s website.`,
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of These Terms",
    paragraphs: [
      `By accessing or using this website, you agree to these Terms & Conditions. If you don't agree with any part of them, please don't use the site. These terms are governed by New Zealand law.`,
    ],
  },
  {
    heading: "About This Website",
    paragraphs: [
      `This website is an informational and enquiry platform for ${siteConfig.name}, a wholesale fresh produce supplier based in Pukekohe, New Zealand. It does not process online orders or payments — enquiries submitted through the site are sent to us as an email, and any resulting order is confirmed directly between you and us by phone or email.`,
    ],
  },
  {
    heading: "Product Information & Availability",
    paragraphs: [
      "Product descriptions, pack sizes and images on this site are provided as a general guide. As fresh produce, actual stock, seasonal availability, sizing and appearance can vary — final availability and pricing are confirmed at the time of enquiry, not guaranteed by anything shown on this website.",
    ],
  },
  {
    heading: "Enquiries & Orders",
    paragraphs: [
      "Submitting an enquiry form on this website does not create a contract or a confirmed order. It simply opens a pre-filled email for you to send to us. An order is only confirmed once we've directly agreed on products, quantities, pricing and delivery with you.",
    ],
  },
  {
    heading: "Pricing",
    paragraphs: [
      "This site does not display fixed pricing, as wholesale produce pricing depends on volume, season and market conditions. Pricing is confirmed directly with you as part of handling your enquiry.",
    ],
  },
  {
    heading: "Website Use",
    paragraphs: [
      "You agree to use this website only for lawful purposes and in a way that doesn't infringe the rights of, or restrict the use of, this site by anyone else. We may update, change or remove content on this site at any time without notice.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      `All content on this website — including text, photography and the ${siteConfig.name} name and logo — is owned by ${siteConfig.name} or used with permission, and may not be copied, reproduced or reused without our consent.`,
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      `To the extent permitted by law, ${siteConfig.name} is not liable for any loss or damage arising from your use of this website, including reliance on product information, images or availability shown on it. Nothing in these terms limits any rights you have under the Consumer Guarantees Act 1993 or the Fair Trading Act 1986 that cannot legally be excluded.`,
    ],
  },
  {
    heading: "Third-Party Links",
    paragraphs: [
      "This site may link to or embed third-party services (such as Google Maps). We aren't responsible for the content or practices of those third-party services.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws of New Zealand, and any disputes will be subject to the jurisdiction of the New Zealand courts.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top of this page shows when they were last updated. Continued use of the website after changes means you accept the updated terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `Questions about these terms can be sent to ${siteConfig.email} or ${siteConfig.phone}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="The terms of using our website."
        supporting="Plain-language terms covering how this site and its enquiries work."
      />
      <LegalContent lastUpdated="20 August 2026" sections={sections} />
    </>
  );
}
