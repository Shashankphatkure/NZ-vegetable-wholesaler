import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ProduceImage } from "@/components/ui/produce-image";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-soil/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-18px_rgba(23,60,44,0.32)]">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <ProduceImage
          imageKey={post.imageKey}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 ease-[var(--ease-produce)] group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 font-label text-[11px] tracking-[0.12em] text-soil/50 uppercase">
          <span className="text-forest">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
        <h3 className="font-display text-[19px] leading-snug font-bold text-soil">
          <Link href={`/blog/${post.slug}`} className="hover:text-forest">
            {post.title}
          </Link>
        </h3>
        <p className="text-[14px] leading-relaxed text-soil/65">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="inline-flex items-center gap-1.5 text-[12px] text-soil/50">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readingMinutes} min read
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest"
          >
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
