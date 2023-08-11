import ProjectItem from "@/app/components/ProjectItem/ProjectItem";
import { sheldonMedias } from "@/app/constants";

const SheldonProject = () => {
  return (
    <ProjectItem
      ltr={false}
      medias={sheldonMedias}
      about="In order to simplify the process of generating books and sending them to partner graphic services, SHELDON (Sistema de Hospedagem e Exportação de Livros Digitais ONline - Online Digital Books Export and Hosting System) was developed. This is an internal system, used by the ImaginaKIDS operational team, to generate PDF files of the stories and export them to a file server."
      technologies="React.js, Bootstrap, Firebase, Node.js, Express, Socket.IO, BullMQ, Redis"
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
