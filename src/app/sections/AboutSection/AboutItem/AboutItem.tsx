import Image from "next/image";

interface AboutItemProps {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

const AboutItem = ({ src, alt, caption, description }: AboutItemProps) => {
  return (
    <figure className="flex flex-col justify-center items-center">
      <div className="bg-cyan p-4 rounded-full w-[100px] h-[100px] overflow-hidden flex justify-center items-center">
        <Image src={src} alt={alt} />
      </div>
      <figcaption className="text-xl font-medium tracking-wide mt-3.5">{caption}</figcaption>
      <p className="mt-4 text-center">{description}</p>
    </figure>
  );
};

export default AboutItem;
