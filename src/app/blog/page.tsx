import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/blog/post-card";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/shared/cta-banner";
import { getSortedPosts } from "@/lib/data/posts";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Primary intent: "wholesale fresh produce guides" — an informational hub, so
// it stays off the commercial supplier terms owned by the area pages.
export const metadata: Metadata = buildMetadata({
  title: "Fresh Produce & Wholesale Vegetable Insights",
  description:
    "Guides and insights for restaurants, cafes and commercial kitchens covering wholesale vegetables, fresh produce supply, ordering and delivery.",
  path: "/blog",
  keywords: [
    "wholesale fresh produce guides",
    "restaurant produce supplier",
    "wholesale vegetable buying guide NZ",
    "commercial kitchen produce advice",
  ],
});

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <>
      <JsonLd
        data={itemListSchema(
          "VegieFresh produce guides",
          posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
        )}
      />
      <PageHero
        eyebrow="Blog"
        title="Fresh Produce & Wholesale Vegetable Insights"
        supporting="Seasonal guides, buying advice and storage tips written from the depot floor in Pukekohe."
      />
      <Container className="py-12 lg:py-16">
        <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} priority={i < 3} />
          ))}
        </div>
      </Container>
      <CtaBanner
        title="Have a produce question we haven't answered?"
        supporting="Ask us directly — we'll answer, and probably write it up."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Read the FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
