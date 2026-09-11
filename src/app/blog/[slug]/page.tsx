import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProduceImage } from "@/components/ui/produce-image";
import { PostBody } from "@/components/blog/post-body";
import { PostCard } from "@/components/blog/post-card";
import { ProductCard } from "@/components/products/product-card";
import { FaqList } from "@/components/faq/faq-list";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { posts, getPost, getSortedPosts } from "@/lib/data/posts";
import { getProduct } from "@/lib/data/products";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getSortedPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedProducts = (post.relatedProducts ?? [])
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article>
        <Container className="pt-10 lg:pt-14">
          <Breadcrumbs
            items={[
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
          <header className="mx-auto mt-10 max-w-3xl">
            <Eyebrow>{post.category}</Eyebrow>
            <h1 className="mt-5 text-[34px] leading-[1.08] font-extrabold text-soil sm:text-[44px] lg:text-[52px]">
              {post.title}
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-soil/70">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-soil/55">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.founder}, Founder of {siteConfig.name}
              </span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.updatedAt && (
                <span>
                  Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readingMinutes} min read
              </span>
            </div>
          </header>

          <div className="relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-2xl">
            <ProduceImage imageKey={post.imageKey} priority sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            {/* Key takeaway: the direct answer, first, in a quotable block. */}
            <aside className="rounded-2xl border border-forest/15 bg-forest/[0.05] p-6 sm:p-8">
              <p className="font-label text-[11px] tracking-[0.16em] text-forest uppercase">
                Key takeaway
              </p>
              <p className="mt-3 text-[17px] leading-relaxed font-medium text-soil">
                {post.keyTakeaway}
              </p>
            </aside>

            <PostBody blocks={post.body} />

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-[26px] font-bold text-soil">
                  Frequently asked
                </h2>
                <FaqList faqs={post.faqs} className="mt-6" />
              </section>
            )}

            <div className="mt-14 rounded-2xl border border-soil/10 bg-cream-2 p-6 sm:p-8">
              <p className="font-label text-[11px] tracking-[0.16em] text-soil/50 uppercase">
                About the author
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-soil/75">
                <strong className="text-soil">{siteConfig.founder}</strong> founded {siteConfig.name} in{" "}
                {siteConfig.foundedYear} after more than a decade working hands-on in New Zealand
                kiwifruit orchards, onion and potato packhouses and the food-processing industry.
                He runs the Pukekohe depot and personally manages deliveries across Auckland and
                Hamilton.{" "}
                <Link href="/about" className="font-semibold text-forest hover:underline">
                  Read his story
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </article>

      {relatedProducts.length > 0 && (
        <section className="mt-20 bg-white py-16">
          <Container>
            <h2 className="font-display text-[26px] font-bold text-soil">
              Produce mentioned in this article
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[26px] font-bold text-soil">More guides</h2>
            <Link href="/blog" className="text-[14px] font-semibold text-forest hover:underline">
              All articles
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
