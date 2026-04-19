"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";
import heroPhoto from "@/assets/photo.webp";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative z-[1] overflow-hidden px-6 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36"
    >
      <div
        className="hero-grid-bg pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
        <motion.div
          className="flex max-w-2xl min-w-0 flex-col gap-6 lg:col-start-1 lg:row-start-1"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1.5 backdrop-blur"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <span
              className="relative flex h-2 w-2"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
              {t("open_badge")}
            </span>
          </motion.div>

          <motion.p
            className="text-lg text-[var(--color-text)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            {t("greeting")}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative z-[1] mx-auto flex shrink-0 justify-center self-center lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:self-start lg:pt-24 xl:pt-28"
          initial={{ x: 36, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative h-[224px] w-[224px] shrink-0 sm:h-64 sm:w-64">
            <div
              className="absolute -inset-1 rounded-full bg-[var(--color-primary)] opacity-40 blur-xl"
              aria-hidden
            />
            <div className="relative box-border h-full w-full overflow-hidden rounded-full border-4 border-[var(--color-primary)] shadow-[0_0_48px_rgba(245,200,66,0.35)]">
              <Image
                src={heroPhoto}
                alt={t("avatar_alt")}
                width={256}
                height={256}
                sizes="(max-width: 640px) 224px, 256px"
                className="block h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-2xl min-w-0 lg:col-start-1 lg:row-start-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TypewriterHeadline
            key={t("headline")}
            text={t("headline")}
          />
        </motion.div>

        <motion.div
          className="flex max-w-2xl min-w-0 flex-col gap-4 sm:flex-row sm:items-center lg:col-start-1 lg:row-start-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-[0_0_24px_rgba(245,200,66,0.25)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            {t("cta_projects")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-secondary)] px-7 py-3 text-sm font-semibold text-[var(--color-secondary)] transition hover:bg-[rgba(59,130,246,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
          >
            {t("cta_contact")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
