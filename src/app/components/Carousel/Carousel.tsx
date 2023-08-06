import { useCallback, useState } from "react";
import Image from "next/image";
import { tv } from "tailwind-variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Media } from "@/app/types";

import styles from "./Carousel.module.scss";

const mediaGalleryStyle = tv({
  base: "duration-700 ease-in-out",
  variants: {
    presentation: {
      show: "opacity-100",
      hide: "opacity-0",
    },
    absolutePosition: {
      true: "absolute left-0 top-0",
    },
  },
  defaultVariants: {
    presentation: "hide",
    absolutePosition: false,
  },
});

interface CarouselProps {
  medias: Array<Media>;
  className?: string;
}

const Carousel = ({ medias, className }: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const previousImage = useCallback(
    (val: number) => {
      if (val === 0) {
        return medias.length - 1;
      }

      return (val - 1) % medias.length;
    },
    [medias.length]
  );

  const nextImage = useCallback((val: number) => (val + 1) % medias.length, [medias.length]);

  return (
    <div className={`max-w-2xl mx-auto flex flex-col items-center justify-center ${className}`}>
      <div className="flex justify-center items-center gap-2">
        {/* Previous button */}
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setSelectedIndex(previousImage)}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="text-darkblue w-5" />
        </button>

        {/* Carousel wrapper */}
        <div className={`overflow-hidden relative rounded-lg ${styles.imageShadow}`}>
          {medias.map((m, index) => {
            return (
              <Image
                key={`image-${m.src}`}
                src={m.src}
                alt={m.alt ?? ""}
                className={mediaGalleryStyle({
                  presentation: selectedIndex === index ? "show" : "hide",
                  absolutePosition: index > 0,
                  className: "object-contain w-full max-w-[33rem]",
                })}
                width={m.width}
                height={m.height}
              />
            );
          })}
        </div>

        {/* Next button */}
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setSelectedIndex(nextImage)}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2xl" className="text-darkblue w-5" />
        </button>
      </div>

      {/* Image indicator */}
      <div className="w-full h-5 flex justify-center gap-2 mt-4">
        {medias.map((m, index) => (
          <button
            key={`button-${m.src}`}
            type="button"
            className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-black" : "bg-gray"}`}
            aria-current={selectedIndex === index}
            aria-label={`Slide ${index}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
