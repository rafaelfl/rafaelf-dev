import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { leonardMedias } from "@/app/[locale]/constants";

const LeonardProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      ltr={true}
      medias={leonardMedias}
      about={t("projects.leonard.about")}
      technologies={t("projects.leonard.technologies")}
    />
  );
};

export default LeonardProject;
