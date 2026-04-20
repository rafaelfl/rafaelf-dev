import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechMarquee } from "@/components/TechMarquee";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorDot } from "@/components/CursorDot";
import { PageTransition } from "@/components/PageTransition";
import { ShareLinks } from "@/components/blog/ShareLinks";
import { routing } from "@/i18n/routing";
import { DEFAULT_SITE_URL } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  const pathPrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const canonical = new URL(pathPrefix || "/", siteUrl).href;
  return {
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  const homePath = locale === routing.defaultLocale ? "/" : `/${locale}`;
  const shareUrl = new URL(homePath, siteUrl).href;
  const siteRoot = new URL("/", siteUrl).href;
  const jobTitle = tMeta("title").includes(" - ")
    ? tMeta("title").split(" - ").slice(1).join(" - ")
    : tMeta("title");
  const inLanguage = locale === "pt" ? "pt-BR" : "en-US";
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteRoot}#website`,
        url: siteRoot,
        name: tMeta("title"),
        description: tMeta("description"),
        inLanguage,
        publisher: { "@id": `${siteRoot}#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteRoot}#person`,
        name: "Rafael Fernandes",
        url: shareUrl,
        jobTitle,
        sameAs: [
          "https://github.com/rafaelfl",
          "https://github.com/rafaelfsl",
          "https://www.linkedin.com/in/rafael-fernandes-lopes",
          "https://x.com/rafaelfdev",
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeJsonLd} />
      <ScrollProgress />
      <CursorDot />
      <Navbar />
      <PageTransition>
        <main className="relative z-[1]">
          <Hero />
          <About />
          <TechMarquee />
          <Experience />
          <Projects />
          <Contact />
          <ShareLinks
            url={shareUrl}
            title={tMeta("title")}
            headingKey="share_site_heading"
          />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
