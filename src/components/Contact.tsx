"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48v11.04C2 19.17 3.33 20.5 4.98 20.5h14.04c1.65 0 2.98-1.33 2.98-2.98V6.48C22 4.83 20.67 3.5 19.02 3.5H4.98ZM8.08 8.75h2.25v7.5H8.08v-7.5Zm1.13-1.12a1.31 1.31 0 1 1 0-2.62 1.31 1.31 0 0 1 0 2.62Zm6.87 1.12h2.25v4.09c0 2.2-1.18 3.22-2.76 3.22-1.58 0-2.49-1.09-2.49-3.22v-4.09Z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const links = [
  {
    key: "github_personal" as const,
    href: "https://github.com/rafaelfl",
    Icon: GitHubIcon,
  },
  {
    key: "github_work" as const,
    href: "https://github.com/rafaelfsl",
    Icon: GitHubIcon,
  },
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/in/rafael-fernandes-lopes",
    Icon: LinkedInIcon,
  },
  { key: "twitter" as const, href: "https://x.com/rafaelfdev", Icon: XIcon },
  { key: "email" as const, href: "mailto:hello@rafaelf.dev", Icon: MailIcon },
];

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {links.map(({ key, href, Icon }, i) => (
            <motion.a
              key={key}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              title={t(key)}
              aria-label={t(key)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 260 }}
              whileHover={{ scale: 1.06 }}
              className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[rgba(17,24,39,0.65)] text-[var(--color-text)] shadow-none transition hover:border-[var(--color-primary)] hover:shadow-[0_0_24px_rgba(245,200,66,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              <Icon className="h-8 w-8" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
