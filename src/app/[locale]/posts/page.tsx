import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorDot } from "@/components/CursorDot";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/posts";
import { DEFAULT_SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const pathPrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const canonical = new URL(`${pathPrefix}/posts`, siteUrl).href;
  return {
    title: t("list_title"),
    description: t("list_description"),
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function PostsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const posts = getAllPosts(locale);
  const pathPrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const pageUrl = new URL(`${pathPrefix}/posts`, siteUrl).href;
  const siteRoot = new URL("/", siteUrl).href;
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("list_title"),
    description: t("list_description"),
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteRoot}#website`,
      url: siteRoot,
    },
  };

  return (
    <>
      <JsonLd data={listJsonLd} />
      <ScrollProgress />
      <CursorDot />
      <Navbar />
      <PageTransition>
        <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
            {t("list_title")}
          </h1>
          <div className="mt-4">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                readMore={t("read_more")}
                locale={locale}
              />
            ))}
          </div>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
