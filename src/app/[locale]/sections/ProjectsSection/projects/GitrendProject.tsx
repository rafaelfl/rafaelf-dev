import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { gitrendMedias } from "@/app/[locale]/constants";

const GitrendProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      medias={gitrendMedias}
      about={t("projects.gitrend.about")}
      technologies={t("projects.gitrend.technologies")}
      sourceCode="https://github.com/rafaelfl/gitrend"
      livePreview="https://gitrend.rafaelf.dev/"
    />
  );
};

export default GitrendProject;
