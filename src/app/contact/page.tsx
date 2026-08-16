import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { ContactInfo } from "@/components/contact/contact-info";
import { EnquiryForm } from "@/components/forms/enquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about your produce requirements. Based in Pukekohe, supplying Auckland and Hamilton.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk fresh produce."
        supporting="Tell us what your kitchen needs — we'll get back to you directly."
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
        <ContactInfo />

        <div className="rounded-2xl border border-soil/10 bg-white p-6 sm:p-9">
          <h2 className="font-display text-[22px] font-bold text-soil">
            Send an Enquiry
          </h2>
          <p className="mt-1.5 text-[15px] text-soil/60">
            Fields marked with * are required.
          </p>
          <EnquiryForm submitLabel="Send Enquiry" className="mt-7" />
        </div>
      </Container>
    </>
  );
}
