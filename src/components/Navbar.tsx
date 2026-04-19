"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion } from "framer-motion";

const NAV_KEYS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "experience", key: "experience" as const },
  { id: "projects", key: "projects" as const },
  { id: "contact", key: "contact" as const },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const activeSection = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "en" ? "pt" : "en" });
  };

  const hashHref = (id: string) =>
    `${locale === routing.defaultLocale ? "/" : `/${locale}`}#${id}`;

  const navLinkClass = (id: string) =>
    `rounded-md px-2 py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
      activeSection === id
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
    }`;

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-[80] transition-[padding,background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(10,15,30,0.82)] py-3 backdrop-blur-md"
          : "bg-transparent py-5 backdrop-blur-0"
      }`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <a
          href={hashHref("home")}
          className="flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
        >
          <span className="font-logo flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[var(--color-primary)] text-sm font-extrabold text-[var(--color-bg)]">
            RF
          </span>
          <span className="font-display text-base font-semibold text-[var(--color-text)] sm:text-lg">
            Rafael Fernandes
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {NAV_KEYS.map(({ id, key }) => (
            <a key={id} className={navLinkClass(id)} href={hashHref(id)}>
              {t(key)}
            </a>
          ))}
          <Link
            href="/posts"
            className={`rounded-md px-2 py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
              pathname === "/posts" || pathname.startsWith("/posts/")
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            {t("blog")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5"
            role="group"
            aria-label={t("language")}
          >
            <button
              type="button"
              onClick={() => locale !== "en" && switchLocale()}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "en"
                  ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => locale !== "pt" && switchLocale()}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "pt"
                  ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              PT
            </button>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-[var(--color-text)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("close_menu") : t("open_menu")}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-b border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-6 py-4 sm:px-8"
            aria-label="Primary"
          >
            {NAV_KEYS.map(({ id, key }) => (
              <a
                key={id}
                href={hashHref(id)}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base font-medium text-[var(--color-text)]"
              >
                {t(key)}
              </a>
            ))}
            <Link
              href="/posts"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-base font-medium text-[var(--color-text)]"
            >
              {t("blog")}
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
