import { Media } from "@/app/types";
import Animated from "../Animated/Animated";
import Carousel from "../Carousel/Carousel";

import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  medias: Array<Media>;
  about: string;
  technologies: string;
  ltr?: boolean;
}

const ProjectItem = ({ medias, about, technologies, ltr = true }: ProjectItemProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden lg:min-h-[19rem] xl:min-h-[24.5rem] 2xl:min-h-[27.25rem] mb-20">
      <Animated
        animation={ltr ? "lateralLeftFade" : "lateralRightFade"}
        style={{ transitionDelay: "0.4s" }}
      >
        <Carousel
          medias={medias}
          className={`p-4 ${
            ltr ? styles.carouselPerspectiveLeft : styles.carouselPerspectiveRight
          }`}
        />
      </Animated>

      <Animated
        animation={ltr ? "lateralRightFade" : "lateralLeftFade"}
        style={{ transitionDelay: "0.4s", order: ltr ? 1 : -1 }}
      >
        <div className="flex flex-col">
          <h4 className="text-2xl text-darkblue">About</h4>
          <p className="text-base mb-4 text-lightgray">{about}</p>
          <h4 className="text-2xl text-darkblue">Technologies</h4>
          <p className="text-base text-lightgray">{technologies}</p>
        </div>
      </Animated>
    </div>
  );
};

export default ProjectItem;
