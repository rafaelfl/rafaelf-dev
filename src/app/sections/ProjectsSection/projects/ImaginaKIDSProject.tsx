import ProjectItem from "@/app/components/ProjectItem/ProjectItem";

const ImaginaKIDSProject = () => {
  return (
    <ProjectItem
      medias={[
        {
          type: "image",
          src: "/images/imaginakids/1-books.png",
          alt: "carousel 1",
          width: 640,
          height: 445,
        },
        {
          type: "image",
          src: "/images/imaginakids/2-page.png",
          alt: "carousel 2",
          width: 640,
          height: 445,
        },
        {
          type: "image",
          src: "/images/imaginakids/3-character.png",
          alt: "carousel 3",
          width: 640,
          height: 445,
        },
      ]}
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
