import { ComponentProps } from "react";
import Image from "next/image";

import BuildNotebookAnimation from "@/app/components/BuildNotebookAnimation/BuildNotebookAnimation";

import photo from "@/app/assets/images/photo.png";

import styles from "./HomeSection.module.scss";

type HomeSectionProps = ComponentProps<"section">;

const HomeSection = (props: HomeSectionProps) => {
  return (
    <section id="home" {...props}>
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-1 flex-col justify-center items-start h-full">
          <h1 className="text-6xl lg:text-responsive-title leading-none font-medium tracking-wide">
            Hi! I am{" "}
            <span className="block text-darkyellow font-semibold">
              Rafael! <span className={styles.wave}>👋</span>
            </span>
          </h1>

          <h2 className="mt-8 font-normal text-1.5xl">
            I build solid, scalable, accessible and responsive digital experiences for the web
          </h2>
        </div>

        <div className="container w-full">
          <Image
            src={photo}
            alt="Rafael Fernandes logo"
            height={350}
            priority
            className="mx-auto"
          />
        </div>
      </div>

      <BuildNotebookAnimation />
    </section>
  );
};

export default HomeSection;
