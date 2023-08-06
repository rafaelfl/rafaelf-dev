import ProjectItem from "@/app/components/ProjectItem/ProjectItem";

const ImaginaShoppingProject = () => {
  return (
    <ProjectItem
      medias={[
        {
          type: "image",
          src: "/images/imaginashopping/1-main.png",
          alt: "carousel 1",
          width: 640,
          height: 311,
        },
        {
          type: "image",
          src: "/images/imaginashopping/2-cart.png",
          alt: "carousel 2",
          width: 640,
          height: 311,
        },
        {
          type: "image",
          src: "/images/imaginashopping/3-checkout.png",
          alt: "carousel 3",
          width: 640,
          height: 311,
        },
        {
          type: "image",
          src: "/images/imaginashopping/4-payment.png",
          alt: "carousel 4",
          width: 640,
          height: 311,
        },
        {
          type: "image",
          src: "/images/imaginashopping/5-creditcard.png",
          alt: "carousel 5",
          width: 640,
          height: 311,
        },
      ]}
      about="ImaginaShopping is a responsive web platform that can be used by students' parents to buy different book packs, apply discount codes and make payments with credit card and Pix (a Brazilian automatic payment method). Books purchased through ImaginaShopping are processed and transferred to partner graphical services for printing and shipping."
      technologies="React.js, Firebase (Authentication, Database, Storage), Cloud Functions, Redux, Bootstrap"
    />
  );
};

export default ImaginaShoppingProject;
