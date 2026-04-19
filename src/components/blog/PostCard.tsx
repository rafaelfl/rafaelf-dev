import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { PostListItem } from "@/lib/posts";

type Props = {
  post: PostListItem;
  readMore: string;
  locale: string;
};

export function PostCard({ post, readMore, locale }: Props) {
  const formatted = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="group flex flex-col gap-4 border-b border-[var(--color-border)] py-10 first:pt-2 last:border-b-0">
      {post.thumb ? (
        <Link
          href={`/posts/${post.slug}`}
          className="relative block overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <Image
            src={post.thumb}
            alt={post.title}
            width={1200}
            height={630}
            className="h-auto max-h-72 w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
      ) : null}
      <p className="text-sm text-[var(--color-muted)]">{formatted}</p>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
          {post.title}
        </h2>
      </Link>
      <p className="text-[var(--color-muted)]">{post.subtitle}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-opacity hover:opacity-90"
      >
        {readMore}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
