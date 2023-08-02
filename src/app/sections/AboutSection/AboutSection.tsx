import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

import Animated from "@/components/Animated/Animated";

import starImage from "@/assets/images/star.svg";
import communicationImage from "@/assets/images/communication.svg";
import resultsImage from "@/assets/images/results.svg";
import passionImage from "@/assets/images/passion.svg";

import AboutItem from "./AboutItem/AboutItem";

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-start mb-8">
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
          description="A clinic eye to identify problems, find and develop simple solutions, seeking to deliver results beyond the minimum requirements"
          animationDelay={500}
        />

        <AboutItem
          src={passionImage}
          alt="Monitor with a heart"
          caption="Passion"
          description="Passionate about my work and proud of my achievements: I believe that technology can make the world better"
          animationDelay={700}
        />
      </div>

      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
    </section>
  );
};

export default AboutSection;
