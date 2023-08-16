import { ComponentProps } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Animated from "@/app/[locale]/components/Animated/Animated";

import starImage from "@/app/[locale]/assets/images/star.svg";
import communicationImage from "@/app/[locale]/assets/images/communication.svg";
import problemSolverImage from "@/app/[locale]/assets/images/problem-solver.svg";
import continuousLearningImage from "@/app/[locale]/assets/images/continuous-learning.svg";

import reactLogo from "@/app/[locale]/assets/images/stack/react.svg";
import reactNativeLogo from "@/app/[locale]/assets/images/stack/react-native.svg";
import nextLogo from "@/app/[locale]/assets/images/stack/nextjs.svg";
import nodeLogo from "@/app/[locale]/assets/images/stack/nodejs.svg";
import flutterLogo from "@/app/[locale]/assets/images/stack/flutter.svg";
import typescriptLogo from "@/app/[locale]/assets/images/stack/typescript.svg";
import javascriptLogo from "@/app/[locale]/assets/images/stack/javascript.svg";
import sassLogo from "@/app/[locale]/assets/images/stack/sass.svg";
import mongoLogo from "@/app/[locale]/assets/images/stack/mongodb.svg";
import firebaseLogo from "@/app/[locale]/assets/images/stack/firebase.svg";
import { sectionTitleStyle } from "@/app/[locale]/styles/titleStyle";

import AboutItem from "./AboutItem/AboutItem";

type AboutSectionProps = ComponentProps<"section">;

const AboutSection = (props: AboutSectionProps) => {
  const t = useTranslations();

  return (
    <section id="about" {...props}>
      <Animated animation="lateralLeftFade">
        <h2
          className={sectionTitleStyle({
            underline: "default",
            size: "large",
            className: "mt-8 mb-6",
          })}
        >
          {t("about.title")}
        </h2>
      </Animated>

      <Animated animation="lateralLeftFade" className="mb-6" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>{t("about.subtitle")}</h3>
      </Animated>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mb-16">
        <AboutItem
          src={starImage}
          alt={t("about.experience.iconAlt")}
          caption={t("about.experience.title")}
          description={t("about.experience.description")}
          animationDelay={100}
        />

        <AboutItem
          src={communicationImage}
          alt={t("about.communication.iconAlt")}
          caption={t("about.communication.title")}
          description={t("about.communication.description")}
          animationDelay={200}
        />

        <AboutItem
          src={problemSolverImage}
          alt={t("about.problemSolving.iconAlt")}
          caption={t("about.problemSolving.title")}
          description={t("about.problemSolving.description")}
          animationDelay={500}
        />

        <AboutItem
          src={continuousLearningImage}
          alt={t("about.continuousLearning.iconAlt")}
          caption={t("about.continuousLearning.title")}
          description={t("about.continuousLearning.description")}
          animationDelay={700}
        />
      </div>

      <div
        id="techstack"
        className="bg-darkblue grid grid-cols-2 lg:grid-cols-5 gap-2 content-center justify-items-center items-center p-8 w-full rounded-2xl max-w-4xl mb-16"
      >
        <Image src={reactLogo} alt={t("about.techStack.react")} />
        <Image src={reactNativeLogo} alt={t("about.techStack.reactnative")} />
        <Image src={nextLogo} alt={t("about.techStack.next")} />
        <Image src={nodeLogo} alt={t("about.techStack.node")} />
        <Image src={flutterLogo} alt={t("about.techStack.flutter")} />
        <Image src={typescriptLogo} alt={t("about.techStack.typescript")} />
        <Image src={javascriptLogo} alt={t("about.techStack.javascript")} />
        <Image src={sassLogo} alt={t("about.techStack.sass")} />
        <Image src={mongoLogo} alt={t("about.techStack.mongo")} />
        <Image src={firebaseLogo} alt={t("about.techStack.firebase")} />

        <p className="col-span-2 lg:col-span-5 text-white text-center text-xl">
          {t("about.andMore")}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
