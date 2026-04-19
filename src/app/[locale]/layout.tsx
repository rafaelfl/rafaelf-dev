import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { DM_Sans, Inter, Syne } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { DEFAULT_SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: "800",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const site = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  );
  /** Same asset for OG and Twitter — avoids a second URL that crawlers may fail to fetch. */
  const socialImage = {
    url: new URL("/opengraph-image", site).href,
    width: 1200,
    height: 630,
    alt: t("title"),
  };

  return {
    metadataBase: site,
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
      apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: locale === routing.defaultLocale ? site : new URL("/pt", site),
      siteName: "Rafael Fernandes",
      title: t("title"),
      description: t("description"),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [socialImage],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${dmSans.variable} ${syne.variable} h-full`}
    >
      <body className="font-body min-h-full antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
