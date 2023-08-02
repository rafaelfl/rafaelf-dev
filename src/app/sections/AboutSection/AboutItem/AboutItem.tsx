import Animated from "@/components/Animated/Animated";
import Image from "next/image";

interface AboutItemProps {
  src: string;
  alt: string;
  caption: string;
  description: string;
  animationDelay?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
}

const AboutItem = ({ src, alt, caption, description, animationDelay = 0 }: AboutItemProps) => {
  return (
    <figure className="flex flex-col justify-center items-center">
      <Animated animation="flipFade" animationDelay={animationDelay}>
        <div className="bg-cyan p-4 rounded-full w-[100px] h-[100px] overflow-hidden flex justify-center items-center">
          <Image src={src} alt={alt} />
        </div>
      </Animated>
      <figcaption className="text-xl font-medium tracking-wide mt-3.5">{caption}</figcaption>
      <p className="mt-4 text-center">{description}</p>
    </figure>
  );
};

export default AboutItem;
