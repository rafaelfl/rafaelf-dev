import { ComponentProps } from "react";
import { useTranslations } from "next-intl";

import { sectionTitleStyle } from "@/app/[locale]/styles/titleStyle";
import Animated from "@/app/[locale]/components/Animated/Animated";

import ImaginaKIDSProject from "./projects/ImaginaKIDSProject";
import ImaginaWebProject from "./projects/ImaginaWebProject";
import ImaginaShoppingProject from "./projects/ImaginaShoppingProject";
import SheldonProject from "./projects/SheldonProject";
import LeonardProject from "./projects/LeonardProject";
import GitrendProject from "./projects/GitrendProject";
import ModosProject from "./projects/ModosProject";
import AuthApiProject from "./projects/AuthApiProject";
import Web3VulnerabilityDetectorProject from "./projects/Web3VulnerabilityDetectorProject";

type ProjectsSectionProps = ComponentProps<"section">;

const ProjectsSection = (props: ProjectsSectionProps) => {
  const t = useTranslations();

  return (
    <section id="projects" {...props}>
      <Animated animation="lateralLeftFade">
        <h2
          className={sectionTitleStyle({
            underline: "default",
            size: "large",
            className: "my-8",
          })}
        >
          {t("projects.title")}
        </h2>
      </Animated>

      {/* ImaginaKIDS */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaKIDS</h3>
      </Animated>

      <ImaginaKIDSProject />

      {/* ImaginaWeb */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaWeb</h3>
      </Animated>

      <ImaginaWebProject />

      {/* ImaginaShopping */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaShopping</h3>
      </Animated>

      <ImaginaShoppingProject />

      {/* Sheldon */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>SHELDON</h3>
      </Animated>

      <SheldonProject />

      {/* Leonard */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>LEONARD</h3>
      </Animated>

      <LeonardProject />

      {/* GiTrend */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>GiTrend</h3>
      </Animated>

      <GitrendProject />

      {/* Modos */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>Modos</h3>
      </Animated>

      <ModosProject />

      {/* Express Auth API */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>Node.js Express Auth API</h3>
      </Animated>

      <AuthApiProject />

      {/* Web3 Contract Vulnerability Detector API (POC) */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>
          Web3 Contract Vulnerability Detector API (POC)
        </h3>
      </Animated>

      <Web3VulnerabilityDetectorProject />
    </section>
  );
};

export default ProjectsSection;
