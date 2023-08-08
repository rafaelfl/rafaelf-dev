import Link from "next/link";

import { Media } from "@/app/types";
import Animated from "../Animated/Animated";
import Carousel from "../Carousel/Carousel";

import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  medias: Array<Media>;
  projectLink: string;
  about: string;
  technologies: string;
  sourceCode?: string;
  livePreview?: string;
  ltr?: boolean;
}

const ProjectItem = ({
  medias,
  projectLink,
  about,
  technologies,
  ltr = true,
  sourceCode,
  livePreview,
}: ProjectItemProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden lg:min-h-[19rem] xl:min-h-[24.5rem] 2xl:min-h-[27.25rem] mb-20">
      <Animated
        animation={ltr ? "lateralLeftFade" : "lateralRightFade"}
        style={{ transitionDelay: "0.4s" }}
        className="order-none"
      >
        <Carousel
          medias={medias}
          projectLink={projectLink}
          className={`p-4 ${
            ltr ? styles.carouselPerspectiveLeft : styles.carouselPerspectiveRight
          }`}
        />
      </Animated>

      <Animated
        animation={ltr ? "lateralRightFade" : "lateralLeftFade"}
        style={{ transitionDelay: "0.4s" }}
        className={`${ltr ? "lg:order-1" : "lg:-order-1"}`}
      >
        <div className="flex flex-col">
          <h4 className="text-2xl text-darkblue">About</h4>
          <p className="text-base mb-4 text-lightgray">{about}</p>

          {sourceCode && (
            <>
              <h4 className="text-2xl text-darkblue">Source code</h4>
              <Link
                className="text-base mb-4 text-lightgray hover:underline"
                href={sourceCode}
                target="_blank"
              >
                {sourceCode}
              </Link>
            </>
          )}

          {livePreview && (
            <>
              <h4 className="text-2xl text-darkblue">Live preview</h4>
              <Link
                className="text-base mb-4 text-lightgray hover:underline"
                href={livePreview}
                target="_blank"
              >
                {livePreview}
              </Link>
            </>
          )}

          <h4 className="text-2xl text-darkblue">Technologies</h4>
          <p className="text-base text-lightgray">{technologies}</p>
        </div>
      </Animated>
    </div>
  );
};

export default ProjectItem;
