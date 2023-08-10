import Image from "next/image";

interface ScreenshotImageProps {
  src: string;
  mediaCarousel: string;
}

const ScreenshotImage = ({ src, mediaCarousel }: ScreenshotImageProps) => {
  if (mediaCarousel === "gitrend") {
    return (
      <Image
        src={src}
        alt="GiTrend screenshot"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
      />
    );
  } else if (mediaCarousel === "imaginakids") {
    return (
      <Image
        src={src}
        alt="ImaginaKIDS screenshot"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
      />
    );
  } else if (mediaCarousel === "imaginashopping") {
    return (
      <Image
        src={src}
        alt="Imagina Shopping screenshot"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
      />
    );
  } else if (mediaCarousel === "imaginaweb") {
    return (
      <Image
        src={src}
        alt="ImaginaWeb screenshot"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
      />
    );
  } else if (mediaCarousel === "modos") {
    return (
      <Image
        src={src}
        alt="Modos screenshot"
        width={1000}
        height={500}
        className="w-full h-full object-contain"
      />
    );
  } else {
    //  (mediaCarousel === "sheldon")
    return (
      <Image
        src={src}
        alt="Sheldon screenshot"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
      />
    );
  }
};

export default ScreenshotImage;
