import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { imaginaShoppingMedias } from "@/app/[locale]/constants";

const ImaginaShoppingProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      medias={imaginaShoppingMedias}
      about={t("projects.imaginashopping.about")}
      technologies={t("projects.imaginashopping.technologies")}
      video={{
        type: "video",
        width: 3012,
        height: 1556,
        poster: "/videos/ImaginaShopping-thumb.png",
        sources: [
          {
            src: "/videos/ImaginaShopping.mp4",
            type: "video/mp4",
          },
        ],
      }}
    />
  );
};

export default ImaginaShoppingProject;
