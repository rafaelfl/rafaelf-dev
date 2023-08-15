import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { imaginaKidsMedias } from "@/app/[locale]/constants";

const ImaginaKIDSProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      medias={imaginaKidsMedias}
      about={t("projects.imaginakids.about")}
      technologies={t("projects.imaginakids.technologies")}
      video={{
        type: "video",
        width: 1036,
        height: 720,
        poster: "/videos/ImaginaKIDS-thumb.png",
        sources: [
          {
            src: "/videos/ImaginaKIDS.mp4",
            type: "video/mp4",
          },
        ],
      }}
    />
  );
};

export default ImaginaKIDSProject;
