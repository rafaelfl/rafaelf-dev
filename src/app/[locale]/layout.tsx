import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import { Fredoka } from "next/font/google";
import { ReactNode } from "react";

import "../globals.scss";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

const fredoka = Fredoka({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

async function getMessages(locale: string) {
  try {
    return (await import(`../../../locales/${locale.toLowerCase()}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
    metadataBase: new URL("https://rafaelf.dev"),
  };
}

export function generateStaticParams() {
  return [{ locale: "en-us" }, { locale: "pt-br" }];
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${fredoka.className} bg-darkblue`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
