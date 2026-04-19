"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const hash = (id: string) =>
    `${locale === routing.defaultLocale ? "/" : `/${locale}`}#${id}`;

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <nav
          className="flex flex-wrap justify-center gap-4 text-xs text-[var(--color-muted)]"
          aria-label="Footer"
        >
          <a href={hash("home")} className="hover:text-[var(--color-primary)]">
            {tNav("home")}
          </a>
          <a href={hash("about")} className="hover:text-[var(--color-primary)]">
            {tNav("about")}
          </a>
          <a
            href={hash("experience")}
            className="hover:text-[var(--color-primary)]"
          >
            {tNav("experience")}
          </a>
          <a
            href={hash("projects")}
            className="hover:text-[var(--color-primary)]"
          >
            {tNav("projects")}
          </a>
          <a
            href={hash("contact")}
            className="hover:text-[var(--color-primary)]"
          >
            {tNav("contact")}
          </a>
          <Link href="/posts" className="hover:text-[var(--color-primary)]">
            {tNav("blog")}
          </Link>
        </nav>
        <p className="max-w-xl text-xs leading-relaxed text-[var(--color-muted)]">
          {t("credits")} {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
