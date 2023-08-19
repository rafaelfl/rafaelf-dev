import { useTranslations } from "next-intl";

import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";

const AuthApiProject = () => {
  const t = useTranslations();

  return (
    <ProjectItem
      about={t.rich("projects.authApi.about", {
        note: (chunks) => <span className="italic">{chunks}</span>,
      })}
      technologies={t("projects.authApi.technologies")}
      sourceCode="https://github.com/rafaelfl/express-typescript-auth"
      documentation="https://api.rafaelf.dev/api-docs/"
      livePreview="https://api.rafaelf.dev/"
    />
  );
};

export default AuthApiProject;
