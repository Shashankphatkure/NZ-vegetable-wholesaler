"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

interface EnquiryFormProps {
  productName?: string;
  productFieldLabel?: string;
  submitLabel?: string;
  className?: string;
}

export function EnquiryForm({
  productName,
  productFieldLabel = "What are you looking for?",
  submitLabel = "Send Enquiry",
  className,
}: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const business = String(formData.get("business") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const product = String(formData.get("product") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = product
      ? `Produce enquiry — ${product}`
      : "Produce enquiry";

    const bodyLines = [
      `Name: ${name}`,
      business && `Business: ${business}`,
      phone && `Phone: ${phone}`,
      email && `Email: ${email}`,
      product && `Product / interest: ${product}`,
      "",
      message,
    ].filter((line): line is string => Boolean(line) || line === "");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className={className}>
        <div className="flex flex-col items-start gap-4 rounded-xl border border-leaf/30 bg-leaf/8 p-7">
          <CheckCircle2 className="h-8 w-8 text-leaf" />
          <div>
            <h3 className="font-display text-lg font-bold text-soil">
              Your email app should be open now
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-soil/70">
              Send the message to finish your enquiry. If nothing opened,
              email us directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-forest underline underline-offset-2"
              >
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-forest underline underline-offset-2">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-[14px] font-semibold text-forest underline underline-offset-2"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Business Name" name="business" autoComplete="organization" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="mt-5">
        <Field
          label={productFieldLabel}
          name="product"
          defaultValue={productName}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-[14px] font-semibold text-soil">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-soil/15 bg-white px-4 py-3 text-[15px] text-soil placeholder:text-soil/35 focus-visible:outline-2 focus-visible:outline-leaf"
          placeholder="Tell us what you need — products, quantities, delivery area…"
        />
      </div>

      <Button type="submit" showArrow className="mt-6 w-full justify-center sm:w-auto">
        {submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[14px] font-semibold text-soil">
        {label}
        {required && <span className="text-leaf"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-soil/15 bg-white px-4 py-3 text-[15px] text-soil placeholder:text-soil/35 focus-visible:outline-2 focus-visible:outline-leaf"
      />
    </div>
  );
}
