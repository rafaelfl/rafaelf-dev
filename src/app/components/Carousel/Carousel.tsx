import { useCallback } from "react";
import Link from "next/link";
import Image, { ImageLoaderProps } from "next/image";
import { tv } from "tailwind-variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Media } from "@/app/types";

import styles from "./Carousel.module.scss";
import "yet-another-react-lightbox/styles.css";

const carouselStyle = tv({
  base: "max-w-2xl mx-auto flex flex-col items-center justify-center",
});

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

const imageNavigationButtonStyle = tv({
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

const carouselLinksStyle = tv({
  base: "outline-1 outline-solid inline-block -outline-offset-1",
  variants: {
    hidden: {
      true: "absolute -z-10 left-0 top-0",
    },
  },
});

type SetStateAction = number | ((prevState: number) => number);

interface CarouselProps {
  medias: Array<Media>;
  onClick: (index: number) => void;
  selectedIndex: number;
  setSelectedIndex: (value: SetStateAction) => void;
  className?: string;
}

const Carousel = ({
  medias,
  className,
  selectedIndex,
  setSelectedIndex,
  onClick,
}: CarouselProps) => {
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
      <div className={carouselStyle({ className })}>
        <div className="flex justify-center items-center gap-2">
          {/* Previous button */}
          <button
            type="button"
            className={imageNavigationButtonStyle({ disabled: medias.length < 2 })}
            disabled={medias.length < 2}
            onClick={() => setSelectedIndex(previousImage)}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="text-darkblue w-5" />
            <p className="sr-only">Show previous image</p>
          </button>

          {/* Carousel wrapper */}
          <div className={`overflow-hidden relative rounded-lg ${styles.imageShadow}`}>
            {medias.map((m, index) => {
              return (
                <Link
                  key={`image-${m.src}`}
                  href="#"
                  prefetch={false}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick(selectedIndex);
                  }}
                  scroll={false}
                  // necessary to make the active link available for clicking
                  className={carouselLinksStyle({ hidden: selectedIndex !== index })}
                  tabIndex={selectedIndex !== index ? -1 : 0}
                  aria-hidden={selectedIndex !== index}
                >
                  <Image
                    src={m.src}
                    alt={m.alt ?? ""}
                    className={mediaGalleryStyle({
                      presentation: selectedIndex === index ? "show" : "hide",
                      className: "object-contain w-full max-w-[33rem]",
                    })}
                    width={m.width}
                    height={m.height}
                    placeholder="blur"
                    loading="eager"
                  />
                </Link>
              );
            })}
          </div>

          {/* Next button */}
          <button
            type="button"
            className={imageNavigationButtonStyle({ disabled: medias.length < 2 })}
            disabled={medias.length < 2}
            onClick={() => setSelectedIndex(nextImage)}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2xl" className="text-darkblue w-5" />
            <p className="sr-only">Show next image</p>
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
              aria-label={`Select image ${index + 1}`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
