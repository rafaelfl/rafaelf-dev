import ProjectItem from "@/app/components/ProjectItem/ProjectItem";
import { imaginaKidsMedias } from "@/app/constants";

const ImaginaKIDSProject = () => {
  return (
    <ProjectItem
      medias={imaginaKidsMedias}
      mediaCarousel="imaginakids"
      about="ImaginaKIDS is an iOS application, designed specifically for iPads, used by students to
          create their own digital books. The stories created using the app can be printed,
          transforming them to real books. The application allows the students to create multiple
          books, to set their titles, to include customized characters, scenarios, balloons and
          text boxes."
      technologies="React Native, Firebase, Native modules (Swift)"
    />
  );
};

export default ImaginaKIDSProject;
