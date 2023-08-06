import ProjectItem from "@/app/components/ProjectItem/ProjectItem";

const ImaginaWebProject = () => {
  return (
    <ProjectItem
      ltr={false}
      medias={[
        {
          type: "image",
          src: "/images/imaginaweb/1-cover.png",
          alt: "carousel 1",
          width: 640,
          height: 311,
        },
        {
          type: "image",
          src: "/images/imaginaweb/2-page.png",
          alt: "carousel 2",
          width: 640,
          height: 311,
        },
        {
          type: "image",
          src: "/images/imaginaweb/3-character.png",
          alt: "carousel 3",
          width: 640,
          height: 311,
        },
      ]}
      about="With the advent of the pandemic, many schools had to stop their activities, making it impossible, for the students, to use the school iPads. A web version of the platform was developed, allowing students to use their personal computers to build their stories. The web version offered the same features as the app version, but with an increased product scalability."
      technologies="React.js, Firebase (Authentication, Database, Storage), Redux, Bootstrap"
    />
  );
};

export default ImaginaWebProject;
