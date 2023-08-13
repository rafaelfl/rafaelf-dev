import { ComponentProps } from "react";
import Image from "next/image";

import Animated from "@/app/components/Animated/Animated";

import starImage from "@/app/assets/images/star.svg";
import communicationImage from "@/app/assets/images/communication.svg";
import problemSolverImage from "@/app/assets/images/problem-solver.svg";
import continuousLearningImage from "@/app/assets/images/continuous-learning.svg";

import reactLogo from "@/app/assets/images/stack/react.svg";
import reactNativeLogo from "@/app/assets/images/stack/react-native.svg";
import nextLogo from "@/app/assets/images/stack/nextjs.svg";
import nodeLogo from "@/app/assets/images/stack/nodejs.svg";
import flutterLogo from "@/app/assets/images/stack/flutter.svg";
import typescriptLogo from "@/app/assets/images/stack/typescript.svg";
import javascriptLogo from "@/app/assets/images/stack/javascript.svg";
import sassLogo from "@/app/assets/images/stack/sass.svg";
import mongoLogo from "@/app/assets/images/stack/mongodb.svg";
import firebaseLogo from "@/app/assets/images/stack/firebase.svg";
import { sectionTitleStyle } from "@/app/styles/titleStyle";

import AboutItem from "./AboutItem/AboutItem";

type AboutSectionProps = ComponentProps<"section">;

const AboutSection = (props: AboutSectionProps) => {
  return (
    <section id="about" {...props}>
      <Animated animation="lateralLeftFade">
        <h2
          className={sectionTitleStyle({
            decoration: "underline",
            size: "large",
            className: "mt-8 mb-6",
          })}
        >
          About
        </h2>
      </Animated>

      <Animated animation="lateralLeftFade" className="mb-6" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>I am a Senior Software Engineer</h3>
      </Animated>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mb-16">
        <AboutItem
          src={starImage}
          alt="Star"
          caption="Experience"
          description="With more than 20 years of experience in the software development field, I bring a wealth of practical knowledge to every project. I've successfully delivered a wide range of projects, giving me the insight needed to make informed decisions and anticipate challenges."
          animationDelay={100}
        />

        <AboutItem
          src={communicationImage}
          alt="A person with a speech balloon"
          caption="Collaboration and Communication"
          description="I don't just write code: I excel in teamwork and communication. I've worked closely with designers, product managers, and fellow engineers, understanding the value of clear communication and collaboration."
          animationDelay={200}
        />

        <AboutItem
          src={problemSolverImage}
          alt="A hand placing a jigsaw puzzle piece into a light bulb"
          caption="Problem-Solving Skills"
          description="I thrive on tackling complex technical challenges. I have a strong analytical mind and a deep understanding of algorithms, data structures and different technologies, allowing me to solve problems efficiently and find innovative solutions that drive project success."
          animationDelay={500}
        />

        <AboutItem
          src={continuousLearningImage}
          alt="Monitor with a heart"
          caption="Continuous Learning and Adaptability"
          description="The tech industry is ever-evolving, and I embrace this by staying current with the latest trends, tools, and best practices. My growth mindset drives me to continuously learn new technologies and adapt my skills to meet the changing needs of projects."
          animationDelay={700}
        />
      </div>

      <div
        id="techstack"
        className="bg-darkblue grid grid-cols-2 lg:grid-cols-5 gap-2 content-center justify-items-center items-center p-8 w-full rounded-2xl max-w-4xl mb-16"
      >
        <Image src={reactLogo} alt="React.js logo" />
        <Image src={reactNativeLogo} alt="React native logo" />
        <Image src={nextLogo} alt="Next.js logo" />
        <Image src={nodeLogo} alt="Node.js logo" />
        <Image src={flutterLogo} alt="Flutter logo" />
        <Image src={typescriptLogo} alt="Typescript logo" />
        <Image src={javascriptLogo} alt="Javascript logo" />
        <Image src={sassLogo} alt="Sass logo" />
        <Image src={mongoLogo} alt="MongoDB logo" />
        <Image src={firebaseLogo} alt="Firebase logo" />
        <p className="col-span-2 lg:col-span-5 text-white text-center text-xl">...and more!</p>
      </div>
    </section>
  );
};

export default AboutSection;
