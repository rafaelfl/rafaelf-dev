"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { BRANCH_X, TRUNK_X, gitGraphPaths } from "@/lib/gitGraph";

type Job = {
  role: string;
  company: string;
  period: string;
  body: string;
  tags: string[];
  branch?: boolean;
};

// Vertical centre of the hash row: card border + p-6 + half of the text-xs line.
const DOT_Y = 33;

// Decorative, derived from the start year so it matches across locales and SSR.
function commitHash(period: string) {
  return ((Number(period.slice(0, 4)) * 2654435761) >>> 0)
    .toString(16)
    .padStart(8, "0")
    .slice(0, 7);
}

function laneColor(job: Job) {
  return job.branch ? "var(--color-secondary)" : "var(--color-primary)";
}

function CommitDot({
  job,
  head,
  threshold,
  progress,
}: {
  job: Job;
  head: boolean;
  threshold: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, [threshold - 0.01, threshold], [0, 1]);
  const color = laneColor(job);

  return (
    <span
      aria-hidden
      className="absolute h-3 w-3 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ left: (job.branch ? BRANCH_X : TRUNK_X) - 6, top: DOT_Y - 6 }}
    >
      <motion.span
        className="absolute -inset-0.5 rounded-full"
        style={{ scale, backgroundColor: color }}
      >
        {head && (
          <span
            className="absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping"
            style={{ backgroundColor: color }}
          />
        )}
      </motion.span>
    </span>
  );
}

export function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  const timelineRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<{ ys: number[]; height: number } | null>(
    null,
  );

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const observer = new ResizeObserver(() => {
      // offsetTop ignores the cards' entrance transforms, unlike getBoundingClientRect.
      const commits = timeline.querySelectorAll<HTMLElement>("[data-commit]");
      setLayout({
        ys: Array.from(commits, (commit) => commit.offsetTop + DOT_Y),
        height: timeline.offsetHeight,
      });
    });
    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const spring = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const reducedMotion = useReducedMotion();
  const progress = useTransform(spring, (value) =>
    reducedMotion ? 1 : value,
  );
  const hiddenPercent = useTransform(progress, (value) => (1 - value) * 100);
  const reveal = useMotionTemplate`inset(0 0 ${hiddenPercent}% 0)`;

  const paths =
    layout &&
    gitGraphPaths(
      layout.ys,
      jobs.map((job) => Boolean(job.branch)),
    );
  const lines = paths && (
    <>
      <path d={paths.trunk} stroke="var(--color-primary)" />
      {paths.branches.map((d) => (
        <path key={d} d={d} stroke="var(--color-secondary)" />
      ))}
    </>
  );
  const svgProps = {
    "aria-hidden": true,
    className: "pointer-events-none absolute left-0 top-0 h-full w-10",
    fill: "none",
    strokeWidth: 2,
  };

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

        <div
          ref={timelineRef}
          className="relative mt-12 flex flex-col gap-8"
        >
          {lines && (
            <>
              <svg {...svgProps} opacity={0.2}>
                {lines}
              </svg>
              {/* Clipping by height keeps the line and dots in sync across both lanes. */}
              <motion.svg {...svgProps} style={{ clipPath: reveal }}>
                {lines}
              </motion.svg>
            </>
          )}
          {jobs.map((job, index) => (
            <div
              key={`${job.company}-${job.period}`}
              data-commit
              className="relative pl-10"
            >
              {layout && (
                <CommitDot
                  job={job}
                  head={index === 0}
                  threshold={layout.ys[index] / layout.height}
                  progress={progress}
                />
              )}
              <motion.article
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative rounded-2xl border border-[var(--color-border)] border-l-4 bg-[rgba(17,24,39,0.55)] p-6 backdrop-blur-md"
                style={{ borderLeftColor: laneColor(job) }}
              >
                <p
                  aria-hidden
                  className="mb-2 font-mono text-xs"
                  style={{ color: laneColor(job) }}
                >
                  {commitHash(job.period)}
                  {index === 0 && " (HEAD -> main)"}
                </p>
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
            </div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/cv.pdf"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(245,200,66,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            {t("resume")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
