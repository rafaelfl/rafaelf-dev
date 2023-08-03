import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

import Animated from "@/components/Animated/Animated";

import starImage from "@/assets/images/star.svg";
import communicationImage from "@/assets/images/communication.svg";
import resultsImage from "@/assets/images/results.svg";
import passionImage from "@/assets/images/passion.svg";

import reactLogo from "@/assets/images/stack/react.svg";
import reactNativeLogo from "@/assets/images/stack/react-native.svg";
import nextLogo from "@/assets/images/stack/nextjs.svg";
import nodeLogo from "@/assets/images/stack/nodejs.svg";
import flutterLogo from "@/assets/images/stack/flutter.svg";
import typescriptLogo from "@/assets/images/stack/typescript.svg";
import javascriptLogo from "@/assets/images/stack/javascript.svg";
import sassLogo from "@/assets/images/stack/sass.svg";
import mongoLogo from "@/assets/images/stack/mongodb.svg";
import firebaseLogo from "@/assets/images/stack/firebase.svg";

import AboutItem from "./AboutItem/AboutItem";
import Image from "next/image";

const title = tv({
  base: "text-darkblue font-semibold pb-2 tracking-wide text-center",
  variants: {
    decoration: {
      default: "",
      underline:
        "relative after:content-[''] after:absolute after:bottom-0 after:border after:w-2/3 after:left-1/2 after:translate-x-[-50%] after:text-darkblue",
    },
    size: {
      large: "text-4xl",
      normal: "text-3xl",
    },
    fontWeight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    decoration: "default",
    size: "normal",
    fontWeight: "semibold",
  },
});

type AboutSectionProps = ComponentProps<"section">;

const AboutSection = (props: AboutSectionProps) => {
  return (
    <section id="about" {...props}>
      <Animated animation="lateralFade">
        <h2 className={`${title({ decoration: "underline", size: "large" })} mt-8 mb-6`}>About</h2>
      </Animated>

      <Animated animation="lateralFade" className="mb-6">
        <h3 className={title()}>I am a Senior Software Engineer</h3>
      </Animated>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-start max-w-5xl mb-16">
        <AboutItem
          src={starImage}
          alt="Star"
          caption="Experience"
          description="More than 20 years of experience developing, testing and maintaining web and mobile software applications"
          animationDelay={100}
        />

        <AboutItem
          src={communicationImage}
          alt="A person with a speech balloon"
          caption="Communication skills"
          description="The experience as a professor and the leadership of several software projects improved both verbal and non-verbal communication"
          animationDelay={200}
        />

        <AboutItem
          src={resultsImage}
          alt="An increasing graphic"
          caption="Results driven"
          description="A clinic eye to identify existing problems, find and develop solutions, seeking to deliver results beyond the minimum requirements"
          animationDelay={500}
        />

        <AboutItem
          src={passionImage}
          alt="Monitor with a heart"
          caption="Passion"
          description="Passionate about my work and proud of my achievements: I believe that technology can make the world a better place"
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
        <p className="col-span-5 text-white text-center text-xl">...and more!</p>
      </div>
    </section>
  );
};

export default AboutSection;
