import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { modosMedias } from "@/app/[locale]/constants";

const ModosProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      ltr={false}
      medias={modosMedias}
      about={t("projects.modos.about")}
      technologies={t("projects.modos.technologies")}
      video={{
        type: "video",
        width: 1080,
        height: 2400,
        poster: "/videos/Modos-thumb.png",
        sources: [
          {
            src: "/videos/Modos.mp4",
            type: "video/mp4",
          },
        ],
      }}
    />
  );
};

export default ModosProject;
