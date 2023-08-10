import ProjectItem from "@/app/components/ProjectItem/ProjectItem";
import { imaginaShoppingMedias } from "@/app/constants";

const ImaginaShoppingProject = () => {
  return (
    <ProjectItem
      medias={imaginaShoppingMedias}
      mediaCarousel="imaginashopping"
      about="ImaginaShopping is a responsive web platform that can be used by students' parents to buy different book packs, apply discount codes and make payments with credit card and Pix (a Brazilian automatic payment method). Books purchased through ImaginaShopping are processed and transferred to partner graphical services for printing and shipping."
      technologies="React.js, Firebase (Authentication, Database, Storage), Cloud Functions, Redux, Bootstrap"
    />
  );
};

export default ImaginaShoppingProject;
