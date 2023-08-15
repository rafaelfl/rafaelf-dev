import { useCallback, useEffect, useRef, useState } from "react";
import { throttle } from "@/app/[locale]/utils";

interface useScrollSpySectionProps {
  sectionSelector?: string;
  percentageVisible?: number;
}

const useScrollSpySection = (props?: useScrollSpySectionProps) => {
  const sectionSelector = props?.sectionSelector ?? "section";
  const percentageVisible = props?.percentageVisible ?? 0.8;

  const [activeSection, setActiveSection] = useState<string | undefined>();
  const sections = useRef<Array<HTMLElement>>([]);

  const handleScroll = useCallback(() => {
    let newActiveSection = "";
    const pageYOffset = window.scrollY;

    sections.current.forEach((section) => {
      // this decides how much of the element should be visible
      const leniency = window.innerHeight * percentageVisible;

      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset + leniency >= sectionOffsetTop &&
        pageYOffset - leniency < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  }, [percentageVisible]);

  useEffect(() => {
    const sectionList: Array<HTMLElement> = [];

    document.querySelectorAll(sectionSelector).forEach((s) => {
      sectionList.push(s as HTMLElement);
    });

    sections.current = sectionList;
    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll, sectionSelector]);

  return activeSection;
};

export default useScrollSpySection;
