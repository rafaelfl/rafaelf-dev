import { ComponentProps } from "react";

import Carousel from "@/app/components/Carousel/Carousel";
import { sectionTitleStyle } from "@/app/styles/titleStyle";

import Animated from "@/app/components/Animated/Animated";
import ImaginaKIDSProject from "./projects/ImaginaKIDSProject";

type ProjectsSectionProps = ComponentProps<"section">;

const ProjectsSection = (props: ProjectsSectionProps) => {
  return (
    <section id="projects" {...props}>
      <Animated animation="lateralLeftFade">
        <h2
          className={`${sectionTitleStyle({ decoration: "underline", size: "large" })} mt-8 mb-6`}
        >
          Some Projects
        </h2>
      </Animated>

      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaKIDS</h3>
      </Animated>

      <ImaginaKIDSProject />
    </section>
  );
};

export default ProjectsSection;
