import { ComponentProps } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { sectionTitleStyle } from "@/app/styles/titleStyle";
import Animated from "@/app/components/Animated/Animated";

import ImaginaKIDSProject from "./projects/ImaginaKIDSProject";
import ImaginaWebProject from "./projects/ImaginaWebProject";
import ImaginaShoppingProject from "./projects/ImaginaShoppingProject";
import SheldonProject from "./projects/SheldonProject";
import GitrendProject from "./projects/GitrendProject";
import ModosProject from "./projects/ModosProject";
import AuthApiProject from "./projects/AuthApiProject";
import Web3VulnerabilityDetectorProject from "./projects/Web3VulnerabilityDetectorProject";

type ProjectsSectionProps = ComponentProps<"section">;

const ProjectsSection = (props: ProjectsSectionProps) => {
  return (
    <section id="projects" {...props}>
      <Animated animation="lateralLeftFade">
        <h2
          className={sectionTitleStyle({
            decoration: "underline",
            size: "large",
            className: "my-8",
          })}
        >
          Some Projects
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
        <h3 className={sectionTitleStyle()}>Express Node.js Auth API</h3>
      </Animated>

      <AuthApiProject />

      {/* Web3 Contract Vulnerability Detector API (POC) */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>Web3 Contract Vulnerability Detector API (POC)</h3>
      </Animated>

      <Web3VulnerabilityDetectorProject />
    </section>
  );
};

export default ProjectsSection;
