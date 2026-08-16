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
import { categories } from "@/lib/data/categories";
import { getFeaturedProducts } from "@/lib/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />
      <TrustStrip />
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

      <CtaBanner
        title="Looking for a reliable produce supplier?"
        supporting="Let's talk about your produce requirements."
        primaryLabel="Enquire Now"
        primaryHref="/contact"
      />
    </>
  );
}
