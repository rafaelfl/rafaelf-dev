"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { tv } from "tailwind-variants";

import useScrollSpySection from "@/app/hooks/useScrollSpySection";
import Navbar from "@/app/components/Navbar/Navbar";
import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";

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

export default function Home() {
  const activeSection = useScrollSpySection();

  const searchParams = useSearchParams();
  const modalImage = searchParams.get("modal");
  const mediaImage = searchParams.get("media") ?? "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Navbar activeSection={activeSection} />

      <HomeSection className={section({ bg: "darkblue" })} />

      <AboutSection className={section({ minHeight: "fullPage" })} />

      <ExperienceSection className={section({ bg: "yellow" })} />

      <ProjectsSection className={section()} />

      <ContactSection className={section({ bg: "darkblue" })} />
    </main>
  );
}
