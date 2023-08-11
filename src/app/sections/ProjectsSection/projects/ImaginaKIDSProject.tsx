import ProjectItem from "@/app/components/ProjectItem/ProjectItem";
import { imaginaKidsMedias } from "@/app/constants";

const ImaginaKIDSProject = () => {
  return (
    <ProjectItem
      medias={imaginaKidsMedias}
      about="ImaginaKIDS is an iOS application, designed specifically for iPads, used by students to
          create their own digital books. The stories created using the app can be printed,
          transforming them to real books. The application allows the students to create multiple
          books, to set their titles, to include customized characters, scenarios, balloons and
          text boxes."
      technologies="React Native, Firebase, Native modules (Swift)"
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
