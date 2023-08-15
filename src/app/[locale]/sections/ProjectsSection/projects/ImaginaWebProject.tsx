import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { imaginaWebMedias } from "@/app/[locale]/constants";

const ImaginaWebProject = () => {
  return (
    <ProjectItem
      ltr={false}
      medias={imaginaWebMedias}
      about="With the advent of the pandemic, many schools had to stop their activities, making it impossible, for the students, to use the school iPads. A web version of the platform was developed, allowing students to use their personal computers to build their stories. The web version offered the same features as the app version, but with an increased product scalability."
      technologies="React.js, Firebase (Authentication, Database, Storage), Redux, Bootstrap"
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
