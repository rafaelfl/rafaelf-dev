"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type ProjectItem = {
  name: string;
  description: string;
  initials: string;
  tech: string[];
  demo: string;
  source: string;
  live: string;
  docs: string;
  /** Local path under /public, e.g. /images/projects/imaginakids.webp */
  image?: string;
};

const projectActionClassName =
  "inline-flex cursor-pointer rounded-lg bg-[var(--color-secondary)] px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]";

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as ProjectItem[];
  const [activeDemo, setActiveDemo] = useState<ProjectItem | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  useEffect(() => {
    setIsVideoLoading(Boolean(activeDemo));
  }, [activeDemo]);

  useEffect(() => {
    if (!activeDemo) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDemo(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeDemo]);

  return (
    <section
      id="projects"
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

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[rgba(17,24,39,0.55)] backdrop-blur-md transition-[box-shadow] hover:shadow-[0_0_36px_rgba(59,130,246,0.12)]"
            >
              <div
                className={`relative h-36 overflow-hidden ${
                  project.image
                    ? "bg-[#111827]"
                    : "bg-gradient-to-br from-[#1e2d45] via-[#111827] to-[#3b82f6]"
                }`}
              >
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,15,30,0.85)] via-transparent to-transparent"
                      aria-hidden
                    />
                  </>
                ) : (
                  <motion.div
                    className="flex h-full w-full items-center justify-center"
                    initial={false}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <span className="font-display text-3xl font-extrabold text-[var(--color-text)] opacity-90">
                      {project.initials}
                    </span>
                  </motion.div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-xl font-extrabold text-[var(--color-primary)]">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[rgba(59,130,246,0.45)] bg-[rgba(59,130,246,0.15)] px-2.5 py-1 text-xs font-medium text-[var(--color-secondary)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.demo ? (
                    <button
                      type="button"
                      onClick={() => setActiveDemo(project)}
                      className={projectActionClassName}
                    >
                      {t("view_demo")}
                    </button>
                  ) : null}
                  {project.source ? (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectActionClassName}
                    >
                      {t("source_code")}
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectActionClassName}
                    >
                      {t("live_preview")}
                    </a>
                  ) : null}
                  {project.docs ? (
                    <a
                      href={project.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectActionClassName}
                    >
                      {t("docs")}
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {activeDemo ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDemo.name} demo`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveDemo(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3 sm:px-6">
              <p className="font-display text-sm font-bold text-[var(--color-text)] sm:text-base">
                {activeDemo.name}
              </p>
              <button
                type="button"
                onClick={() => setActiveDemo(null)}
                className="rounded-md px-2 py-1 text-xs font-semibold text-[var(--color-muted)] transition hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
              >
                {t("close")}
              </button>
            </div>
            <div className="relative">
              {isVideoLoading ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/65">
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 animate-spin rounded-full border-2 border-[rgba(255,255,255,0.35)] border-t-white"
                  />
                </div>
              ) : null}
              <video
                className="h-auto w-full bg-black"
                controls
                autoPlay
                playsInline
                src={activeDemo.demo}
                onLoadStart={() => setIsVideoLoading(true)}
                onCanPlay={() => setIsVideoLoading(false)}
                onWaiting={() => setIsVideoLoading(true)}
                onPlaying={() => setIsVideoLoading(false)}
              >
                <track kind="captions" />
              </video>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
