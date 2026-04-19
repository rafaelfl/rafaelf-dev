import { getTranslations } from "next-intl/server";
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

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  const homePath = locale === routing.defaultLocale ? "/" : `/${locale}`;
  const shareUrl = new URL(homePath, siteUrl).href;

  return (
    <>
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
