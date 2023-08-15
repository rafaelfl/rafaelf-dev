import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { sheldonMedias } from "@/app/[locale]/constants";

const SheldonProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      ltr={false}
      medias={sheldonMedias}
      about={t("projects.sheldon.about")}
      technologies={t("projects.sheldon.technologies")}
      video={{
        type: "video",
        width: 3012,
        height: 1556,
        poster: "/videos/Sheldon-thumb.png",
        sources: [
          {
            src: "/videos/Sheldon.mp4",
            type: "video/mp4",
          },
        ],
      }}
    />
  );
};

export default SheldonProject;
