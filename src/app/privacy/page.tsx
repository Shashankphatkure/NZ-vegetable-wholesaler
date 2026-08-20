import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LegalContent, type LegalSection } from "@/components/shared/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information.`,
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      `This Privacy Policy explains how ${siteConfig.name} ("we", "us", "our") handles personal information collected through this website. We are based in Pukekohe, New Zealand, and this policy is written to comply with the New Zealand Privacy Act 2020.`,
      "By using this website, you agree to the collection and use of information in line with this policy.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We only collect personal information that you choose to give us — there is no account creation, checkout, or automatic data collection on this site. When you use an enquiry form (on the Contact page or a product page), you may provide:",
    ],
    list: [
      "Your name",
      "Business name",
      "Phone number",
      "Email address",
      "The product(s) or service you're enquiring about",
      "Any other details you include in your message",
    ],
  },
  {
    heading: "How Your Information Reaches Us",
    paragraphs: [
      "This website does not have a backend server or database. When you submit an enquiry form, it does not transmit your details to us directly — instead, it opens a pre-filled email (via Gmail's web compose, or your device's default mail app) addressed to us, with your details and message already entered.",
      "Nothing is sent to us unless you review that email and choose to send it yourself, from your own email account. We only receive and store the information you actively choose to email us.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "We use the information you send us to:",
    ],
    list: [
      "Respond to your enquiry",
      "Discuss and arrange produce orders, pricing and delivery",
      "Maintain our ongoing business relationship with you, if you become a customer",
    ],
  },
  {
    heading: "Sharing Your Information",
    paragraphs: [
      "We do not sell, rent or trade your personal information to third parties. We may share it only where reasonably necessary to fulfil an order (for example, with a courier or freight partner for delivery), or where required by law.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    paragraphs: [
      "This website does not currently use cookies, tracking pixels, or analytics software to monitor visitor behaviour. If that changes in future, this policy will be updated accordingly.",
    ],
  },
  {
    heading: "Third-Party Content",
    paragraphs: [
      "Our Contact page embeds a Google Maps view of our location. Interacting with that map is subject to Google's own privacy policy, not ours.",
    ],
  },
  {
    heading: "Data Security & Retention",
    paragraphs: [
      "Since enquiries are sent as ordinary emails to our inbox, they're retained and protected under our normal email account security. We take reasonable steps to keep that account secure, and we don't keep personal information longer than is reasonably needed for the purpose it was provided.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "Under the Privacy Act 2020, you have the right to ask us what personal information we hold about you, and to request that it be corrected. To do either, contact us using the details below.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time to reflect changes to the website or our practices. The date at the top of this page shows when it was last updated.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `If you have any questions about this policy or how your information is handled, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How we handle your information."
        supporting="Straightforward, plain-language details on what we collect and why."
      />
      <LegalContent lastUpdated="20 August 2026" sections={sections} />
    </>
  );
}
