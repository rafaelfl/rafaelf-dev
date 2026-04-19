import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorDot } from "@/components/CursorDot";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getAllPostStaticParams, getPostBySlug } from "@/lib/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafaelf.dev";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllPostStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as "en" | "pt")) {
    return {};
  }
  const post = getPostBySlug(locale, slug);
  if (!post) return {};
  const { frontmatter } = post;
  const ogImage = frontmatter.thumb
    ? new URL(frontmatter.thumb, siteUrl).toString()
    : undefined;
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      type: "article",
      publishedTime: frontmatter.date,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.subtitle,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }
  const post = getPostBySlug(locale, slug);
  if (!post) {
    notFound();
  }
  const t = await getTranslations("blog");
  const { frontmatter, content } = post;
  const formatted = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(frontmatter.date));

  return (
    <>
      <ScrollProgress />
      <CursorDot />
      <Navbar />
      <PageTransition>
        <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8">
          <Link
            href="/posts"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-opacity hover:opacity-90"
          >
            <span aria-hidden>←</span>
            {t("back_to_posts")}
          </Link>

          <header className="mt-8">
            {frontmatter.thumb ? (
              <div className="relative mb-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <Image
                  src={frontmatter.thumb}
                  alt={frontmatter.title}
                  width={1200}
                  height={630}
                  priority
                  className="h-auto max-h-[min(50vh,420px)] w-full object-contain"
                />
              </div>
            ) : null}
            <p className="text-sm text-[var(--color-muted)]">{formatted}</p>
            <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--color-muted)]">
              {frontmatter.subtitle}
            </p>
          </header>

          <article className="blog-prose prose prose-invert prose-lg mt-12 max-w-none">
            <BlogMarkdown content={content} />
          </article>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
