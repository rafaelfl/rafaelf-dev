import ProjectItem from "@/app/components/ProjectItem/ProjectItem";
import { modosMedias } from "@/app/constants";

const ModosProject = () => {
  return (
    <ProjectItem
      ltr={false}
      medias={modosMedias}
      mediaCarousel="modos"
      about="Modos is an m-learning platform for building and sharing microlearning tracks. Modos is a mobile application that allows teachers to share different types of media with the students (such as images, videos, audios, and text), composing a learning path to be followed by them."
      technologies="Flutter, Firebase"
    />
  );
};

export default ModosProject;
