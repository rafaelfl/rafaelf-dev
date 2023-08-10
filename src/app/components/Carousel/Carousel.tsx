import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { tv } from "tailwind-variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Lightbox from "yet-another-react-lightbox";

import { Media } from "@/app/types";

import styles from "./Carousel.module.scss";
import "yet-another-react-lightbox/styles.css";

const mediaGalleryStyle = tv({
  base: "duration-700 ease-in-out",
  variants: {
    presentation: {
      show: "opacity-100",
      hide: "opacity-0",
    },
  },
  defaultVariants: {
    presentation: "hide",
  },
});

const imageNavigationButtonStyles = tv({
  variants: {
    disabled: {
      true: "opacity-40 cursor-default",
      false: "opacity-100 cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

interface CarouselProps {
  medias: Array<Media>;
  className?: string;
}

const Carousel = ({ medias, className }: CarouselProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
    <>
      <div className={`max-w-2xl mx-auto flex flex-col items-center justify-center ${className}`}>
        <div className="flex justify-center items-center gap-2">
          {/* Previous button */}
          <button
            type="button"
            className={imageNavigationButtonStyles({ disabled: medias.length < 2 })}
            disabled={medias.length < 2}
            onClick={() => setSelectedIndex(previousImage)}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="text-darkblue w-5" />
          </button>

          {/* Carousel wrapper */}
          <div className={`overflow-hidden relative rounded-lg ${styles.imageShadow}`}>
            {medias.map((m, index) => {
              return (
                <Link
                  key={`image-${m.src}`}
                  href=""
                  prefetch={false}
                  onClick={() => setIsLightboxOpen(true)}
                  scroll={false}
                  // necessary to make the active link available for clicking
                  className={selectedIndex !== index ? "absolute -z-10" : ""}
                >
                  <Image
                    src={`/images/${m.src}`}
                    alt={m.alt ?? ""}
                    className={mediaGalleryStyle({
                      presentation: selectedIndex === index ? "show" : "hide",
                      className: "object-contain w-full max-w-[33rem]",
                    })}
                    width={m.width}
                    height={m.height}
                  />
                </Link>
              );
            })}
          </div>

          {/* Next button */}
          <button
            type="button"
            className={imageNavigationButtonStyles({ disabled: medias.length < 2 })}
            disabled={medias.length < 2}
            onClick={() => setSelectedIndex(nextImage)}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2xl" className="text-darkblue w-5" />
          </button>
        </div>

        {/* Image selection indicator */}
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

      {/* Image lightbox */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={selectedIndex}
        slides={medias.map((m) => ({ src: `/images/${m.src}`, alt: m.alt }))}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        on={{ view: ({ index }) => setSelectedIndex(index) }}
      />
    </>
  );
};

export default Carousel;
