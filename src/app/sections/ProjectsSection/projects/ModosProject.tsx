import ProjectItem from "@/app/components/ProjectItem/ProjectItem";

const ModosProject = () => {
  return (
    <ProjectItem
      ltr={false}
      medias={[
        {
          type: "image",
          src: "/images/modos/phone1.png",
          alt: "carousel 1",
          width: 191,
          height: 340,
        },
        {
          type: "image",
          src: "/images/modos/phone2.png",
          alt: "carousel 2",
          width: 191,
          height: 340,
        },
        {
          type: "image",
          src: "/images/modos/phone3.png",
          alt: "carousel 3",
          width: 191,
          height: 340,
        },
        {
          type: "image",
          src: "/images/modos/phone4.png",
          alt: "carousel 4",
          width: 191,
          height: 340,
        },
        {
          type: "image",
          src: "/images/modos/phone5.png",
          alt: "carousel 5",
          width: 191,
          height: 340,
        },
      ]}
      about="Modos is an m-learning platform for building and sharing microlearning tracks. Modos is a mobile application that allows teachers to share different types of media with the students (such as images, videos, audios, and text), composing a learning path to be followed by them."
      technologies="Flutter, Firebase"
    />
  );
};

export default ModosProject;
