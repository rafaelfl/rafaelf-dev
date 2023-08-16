"use client";

import { tv } from "tailwind-variants";

import useScrollSpySection from "@/app/[locale]/hooks/useScrollSpySection";
import Navbar from "@/app/[locale]/components/Navbar/Navbar";
import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import { useEffect } from "react";

const section = tv({
  base: "flex flex-col justify-start items-center gap-4 px-8 md:px-20 w-full pt-6 pb-0",
  variants: {
    bg: {
      darkblue: "bg-darkblue text-white",
      yellow: "bg-yellow",
      white: "bg-white",
    },
    minHeight: {
      fullPage: "min-h-screen",
    },
  },
  defaultVariants: {
    bg: "white",
  },
});

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const activeSection = useScrollSpySection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20">
      <Navbar activeSection={activeSection} locale={locale} />

      <HomeSection className={section({ bg: "darkblue" })} />

      <AboutSection className={section({ minHeight: "fullPage" })} />

      <ExperienceSection className={section({ bg: "yellow" })} />

      <ProjectsSection className={section()} />

      <ContactSection className={section({ bg: "darkblue" })} />
    </main>
  );
}
