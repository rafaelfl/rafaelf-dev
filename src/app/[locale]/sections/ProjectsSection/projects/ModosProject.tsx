import ProjectItem from "@/app/[locale]/components/ProjectItem/ProjectItem";
import { modosMedias } from "@/app/[locale]/constants";

const ModosProject = () => {
  return (
    <ProjectItem
      ltr={false}
      medias={modosMedias}
      about="Modos is an m-learning platform for building and sharing microlearning tracks. Modos is a mobile application that allows teachers to share different types of media with the students (such as images, videos, audios, and text), composing a learning path to be followed by them."
      technologies="Flutter, Firebase"
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
