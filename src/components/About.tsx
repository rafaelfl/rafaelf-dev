"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BookOpen, MessageCircle, Puzzle, Star } from "lucide-react";

const icons = [Star, MessageCircle, Puzzle, BookOpen] as const;

export function About() {
  const t = useTranslations("about");

  const cards = [
    { key: "experience" as const, Icon: icons[0] },
    { key: "collaboration" as const, Icon: icons[1] },
    { key: "problem" as const, Icon: icons[2] },
    { key: "learning" as const, Icon: icons[3] },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-lg text-[var(--color-muted)]">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {cards.map(({ key, Icon }, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-[var(--color-border)] bg-[rgba(17,24,39,0.55)] p-6 backdrop-blur-md transition-[box-shadow,border-color] hover:border-[var(--color-primary)] hover:shadow-[0_0_28px_rgba(245,200,66,0.12)]"
            >
              <Icon
                className="mb-4 h-8 w-8 text-[var(--color-primary)]"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {t(`cards.${key}.body`)}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
          {t("more")}
        </p>
      </div>
    </section>
  );
}
