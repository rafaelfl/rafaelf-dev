import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { imaginaWebMedias } from "@/app/[locale]/constants";

const ImaginaWebProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      ltr={false}
      medias={imaginaWebMedias}
      about={t("projects.imaginaweb.about")}
      technologies={t("projects.imaginaweb.technologies")}
      video={{
        type: "video",
        width: 3012,
        height: 1556,
        poster: "/videos/ImaginaWeb-thumb.png",
        sources: [
          {
            src: "/videos/ImaginaWeb.mp4",
            type: "video/mp4",
          },
        ],
      }}
    />
  );
};

export default ImaginaWebProject;
