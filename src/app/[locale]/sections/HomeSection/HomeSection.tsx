import { ComponentProps } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation } from "framer-motion";
import { useTranslations } from "next-intl";

import BuildNotebookAnimation from "@/app/[locale]/components/BuildNotebookAnimation/BuildNotebookAnimation";

import photo from "@/app/[locale]/assets/images/photo.webp";

import styles from "./HomeSection.module.scss";

type HomeSectionProps = ComponentProps<"section">;

const HomeSection = (props: HomeSectionProps) => {
  const t = useTranslations();

  return (
    <section id="home" {...props}>
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-1 flex-col justify-center items-start h-full">
          <h1 className="text-6xl lg:text-responsive-title leading-none font-medium tracking-wide">
            {t("title")}{" "}
            <span className="block text-darkyellow font-semibold">
              Rafael! <span className={styles.wave}>👋</span>
            </span>
          </h1>

          <h2 className="mt-8 font-normal text-1.5xl">{t("subtitle")}</h2>
        </div>

        <div className="container w-full">
          <Image src={photo} alt={t("myphoto.alt")} height={350} priority className="mx-auto" />
        </div>
      </div>

      <LazyMotion features={domAnimation}>
        <BuildNotebookAnimation />
      </LazyMotion>
    </section>
  );
};

export default HomeSection;
