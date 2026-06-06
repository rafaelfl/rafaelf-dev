"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Job = {
  role: string;
  company: string;
  period: string;
  body: string;
  tags: string[];
};

export function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  return (
    <section
      id="experience"
      className="scroll-mt-28 px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("title")}
        </motion.h2>

        <div className="relative mt-12 flex flex-col gap-8">
          {jobs.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="relative rounded-2xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-primary)] bg-[rgba(17,24,39,0.55)] p-6 backdrop-blur-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                  {job.role} · {job.company}
                </h3>
                <span className="shrink-0 text-sm font-medium text-[var(--color-muted)]">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                {job.body}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[rgba(59,130,246,0.45)] bg-[rgba(59,130,246,0.15)] px-2.5 py-1 text-xs font-medium text-[var(--color-secondary)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/rafaelf-cv.pdf"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(245,200,66,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            {t("resume")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
