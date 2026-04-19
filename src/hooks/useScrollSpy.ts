"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "about", "experience", "projects", "contact"] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useScrollSpy() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}
