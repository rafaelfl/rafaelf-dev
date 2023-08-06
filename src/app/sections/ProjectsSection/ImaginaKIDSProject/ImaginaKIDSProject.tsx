import Animated from "@/app/components/Animated/Animated";
import Carousel from "@/app/components/Carousel/Carousel";

import styles from "../ProjectsSection.module.scss";

const ImaginaKIDSProject = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden lg:min-h-[19rem] xl:min-h-[24.5rem] 2xl:min-h-[27.25rem] mb-20">
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <Carousel
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
          className={`p-4 ${styles.carouselPerspectiveLeft}`}
        />
      </Animated>

      <Animated animation="lateralRightFade" style={{ transitionDelay: "0.4s" }}>
        <div className="flex flex-col">
          <h4 className="text-2xl text-darkblue">About</h4>
          <p className="text-base mb-4 text-lightgray">
            ImaginaKIDS is an iOS application, designed specifically for iPads, used by students to
            create their own digital books. The stories created using the app can be printed,
            transforming them to real books. The application allows the students to create multiple
            books, to set their titles, to include customized characters, scenarios, balloons and
            text boxes.
          </p>
          <h4 className="text-2xl text-darkblue">Technologies</h4>
          <p className="text-base text-lightgray">React Native, Firebase, Native modules (Swift)</p>
        </div>
      </Animated>
    </div>
  );
};

export default ImaginaKIDSProject;
