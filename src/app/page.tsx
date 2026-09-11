import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/fade-up";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { StorySection } from "@/components/home/story-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ServicesPreview } from "@/components/home/services-preview";
import { NzSection } from "@/components/home/nz-section";
import { CtaBanner } from "@/components/shared/cta-banner";
import { CategoryCard } from "@/components/products/category-card";
import { ProductCard } from "@/components/products/product-card";
import { PostCard } from "@/components/blog/post-card";
import { FaqList } from "@/components/faq/faq-list";
import { categories } from "@/lib/data/categories";
import { getFeaturedProducts } from "@/lib/data/products";
import { getLatestPosts } from "@/lib/data/posts";
import { homeFaqs } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Fresh Produce Supplier, Pukekohe NZ — Auckland & Hamilton Delivery`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "fresh produce supplier Pukekohe",
    "vegetable wholesaler Auckland",
    "restaurant produce supply NZ",
    "wholesale vegetables Hamilton",
  ],
});

export default function HomePage() {
  const featured = getFeaturedProducts();
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Direct-answer intro: who, where, what — the first thing crawlers and
          AI engines read after the H1. Kept in plain prose on purpose. */}
      <section className="bg-white py-14 lg:py-16">
        <Container className="max-w-4xl">
          <h2 className="font-display text-[26px] leading-tight font-bold text-soil sm:text-[32px]">
            Wholesale fresh vegetable supplier in Pukekohe, delivering to
            Auckland and Hamilton
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-soil/75">
            {siteConfig.name} is a Pukekohe-based fresh produce supplier for
            restaurants, cafes, takeaways, caterers and commercial kitchens.
            We source potatoes, onions, tomatoes, root vegetables, greens and
            herbs from New Zealand growers — most of them within minutes of our
            depot in the Pukekohe growing district — and deliver on scheduled
            runs across Auckland and Hamilton with our own fleet. Founded in{" "}
            {siteConfig.foundedYear} by {siteConfig.founder} after more than a
            decade working in NZ orchards, packhouses and food processing.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-[15px] text-soil/80 sm:grid-cols-3">
            <li className="rounded-xl border border-soil/10 bg-cream-2 px-5 py-4">
              <strong className="block text-soil">Based in Pukekohe</strong>
              NZ&apos;s vegetable-growing heartland
            </li>
            <li className="rounded-xl border border-soil/10 bg-cream-2 px-5 py-4">
              <strong className="block text-soil">Own delivery fleet</strong>
              Auckland &amp; Hamilton, scheduled runs
            </li>
            <li className="rounded-xl border border-soil/10 bg-cream-2 px-5 py-4">
              <strong className="block text-soil">Trade pack sizes</strong>
              5kg, 10kg and 20kg on core lines
            </li>
          </ul>
        </Container>
      </section>

      <StorySection />

      <section className="bg-cream-2 py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our Range"
              title="Fresh produce for busy kitchens"
              supporting="Seven core categories, sourced and packed for restaurants, cafes and commercial kitchens."
            />
            <Button href="/shop" variant="ghost" className="shrink-0">
              View All Produce
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, i) => (
              <FadeUp key={category.slug} delay={i * 0.05}>
                <CategoryCard category={category} />
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="A closer look at what we supply"
            />
            <Button href="/shop" variant="ghost" className="shrink-0">
              View Full Catalogue
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {featured.map((product, i) => (
              <FadeUp key={product.slug} delay={i * 0.05}>
                <ProductCard product={product} />
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <ServicesPreview />
      <NzSection />

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers"
              supporting="Delivery areas, pack sizes and how ordering works."
            />
            <Button href="/faq" variant="ghost" className="mt-6">
              All questions
            </Button>
          </div>
          <FaqList faqs={homeFaqs} />
        </Container>
      </section>

      <section className="bg-cream-2 py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="From the Depot"
              title="Produce guides for chefs"
              supporting="Seasonal guides, buying advice and storage tips."
            />
            <Link href="/blog" className="shrink-0 text-[15px] font-semibold text-forest hover:underline">
              All articles
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.05}>
                <PostCard post={post} />
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Looking for a reliable produce supplier?"
        supporting="Let's talk about your produce requirements."
        primaryLabel="Enquire Now"
        primaryHref="/contact"
      />
    </>
  );
}
