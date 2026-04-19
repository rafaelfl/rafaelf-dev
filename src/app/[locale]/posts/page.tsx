import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorDot } from "@/components/CursorDot";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("list_title"),
    description: t("list_description"),
  };
}

export default async function PostsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const posts = getAllPosts(locale);

  return (
    <>
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
