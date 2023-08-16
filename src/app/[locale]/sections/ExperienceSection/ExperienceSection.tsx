import { ComponentProps } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { sectionTitleStyle } from "@/app/[locale]/styles/titleStyle";
import Accordion from "@/app/[locale]/components/Accordion/Accordion";
import Chip from "@/app/[locale]/components/Chip/Chip";

type ExperienceSectionProps = ComponentProps<"section">;

const ExperienceSection = (props: ExperienceSectionProps) => {
  const t = useTranslations();

  return (
    <section id="experience" {...props}>
      <h2
        className={sectionTitleStyle({
          underline: "default",
          size: "large",
          className: "mt-8 mb-6",
        })}
      >
        {t("experience.title")}
      </h2>

      <Accordion title={t("experience.fullstack.title")} period={t("experience.fullstack.period")}>
        <div className="flex flex-col justify-start items-start">
          <p>{t("experience.fullstack.description")}</p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>React.js</Chip>
            <Chip>Next.js</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
            <Chip>SCSS</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion title={t("experience.imaginakids.title")} period="2017 - 2022">
        <div className="flex flex-col justify-start items-start">
          <p>{t("experience.imaginakids.description")}</p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>React.js</Chip>
            <Chip>React Native</Chip>
            <Chip>Node.js</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
            <Chip>Express</Chip>
            <Chip>Firebase</Chip>
            <Chip>Swift</Chip>
            <Chip>Redis</Chip>
            <Chip>Socket.IO</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion title={t("experience.ufmaifma.title")} period="2006 - 2022">
        <div className="flex flex-col justify-start items-start">
          <p>{t("experience.ufmaifma.description")}</p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>React.js</Chip>
            <Chip>Node.js</Chip>
            <Chip>Express</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
            <Chip>Firebase</Chip>
            <Chip>MySQL</Chip>
            <Chip>Socket.IO</Chip>
            <Chip>RabbitMQ</Chip>
            <Chip>gRPC</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion title={t("experience.ufma.title")} period="2004 - 2006">
        <div className="flex flex-col justify-start items-start">
          <p>{t("experience.ufma.description")}</p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>PHP</Chip>
            <Chip>J2EE</Chip>
            <Chip>JSP</Chip>
            <Chip>JSF</Chip>
            <Chip>JPA</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion title={t("experience.fapema.title")} period="2003 - 2005" className="mb-10">
        <div className="flex flex-col justify-start items-start">
          <p>{t("experience.fapema.description")}</p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>PHP</Chip>
            <Chip>MySQL</Chip>
          </div>
        </div>
      </Accordion>

      <Link
        href="/cv.pdf"
        target="_blank"
        className="text-2xl underline font-medium mb-10 text-center"
      >
        {t("experience.viewCv")} &rarr;
      </Link>
    </section>
  );
};

export default ExperienceSection;
