import { useRef, useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import { Video } from "yet-another-react-lightbox/plugins";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faVideo } from "@fortawesome/free-solid-svg-icons";

import { Media } from "@/app/types";
import Animated from "../Animated/Animated";
import Carousel from "../Carousel/Carousel";

import styles from "./ProjectItem.module.scss";

interface VideoProps {
  type: "video";
  width: number;
  height: number;
  poster: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
}

interface ProjectItemProps {
  medias: Array<Media>;
  about: string;
  technologies: string;
  sourceCode?: string;
  livePreview?: string;
  video?: VideoProps;
  ltr?: boolean;
}

const ProjectItem = ({
  medias,
  about,
  technologies,
  ltr = true,
  sourceCode,
  livePreview,
  video,
}: ProjectItemProps) => {
  const imagePortalRef = useRef<HTMLDivElement>(null);
  const videoPortalRef = useRef<HTMLDivElement>(null);

  const [isImageLightboxOpen, setImageIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);

  return (
    <>
      <div
        ref={videoPortalRef}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden lg:min-h-[19rem] xl:min-h-[24.5rem] 2xl:min-h-[27.25rem] mb-20`}
      >
        <Animated
          animation={ltr ? "lateralLeftFade" : "lateralRightFade"}
          style={{ transitionDelay: "0.4s" }}
          className="order-none"
        >
          <div ref={imagePortalRef} className="inline-block"></div>

          <Carousel
            medias={medias}
            className={`p-4 ${
              ltr ? styles.carouselPerspectiveLeft : styles.carouselPerspectiveRight
            }`}
            onClick={(idx) => {
              setSelectedIndex(idx);
              setImageIsLightboxOpen(true);
            }}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Animated>

        <Animated
          animation={ltr ? "lateralRightFade" : "lateralLeftFade"}
          style={{ transitionDelay: "0.4s" }}
          className={`${ltr ? "lg:order-1 " : "lg:-order-1"}`}
        >
          <div className="flex flex-col">
            <h4 className="text-2xl text-darkblue">About</h4>
            <p className="text-base mb-4 text-lightgray">{about}</p>

            {sourceCode && (
              <>
                <h4 className="text-2xl text-darkblue">Source code</h4>
                <div>
                  <Link
                    className="text-base mb-4 text-lightgray hover:underline"
                    href={sourceCode}
                    target="_blank"
                  >
                    {sourceCode} <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                </div>
              </>
            )}

            {livePreview && (
              <>
                <h4 className="text-2xl text-darkblue">Live preview</h4>
                <div>
                  <Link
                    className="text-base mb-4 text-lightgray hover:underline"
                    href={livePreview}
                    target="_blank"
                  >
                    {livePreview} <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                  </Link>
                </div>
              </>
            )}

            {video && (
              <>
                <h4 className="text-2xl text-darkblue">Demo</h4>
                <div>
                  <Link
                    className="text-base mb-4 text-lightgray hover:underline"
                    href="#"
                    prefetch={false}
                    onClick={() => setIsVideoLightboxOpen(true)}
                    scroll={false}
                  >
                    Video <FontAwesomeIcon icon={faVideo} size="lg" />
                  </Link>
                </div>

                <Lightbox
                  open={isVideoLightboxOpen}
                  close={() => setIsVideoLightboxOpen(false)}
                  slides={[video]}
                  plugins={[Video]}
                  video={{
                    autoPlay: true,
                    muted: true,
                  }}
                  portal={{
                    root: videoPortalRef.current,
                  }}
                />
              </>
            )}

            <h4 className="text-2xl text-darkblue">Technologies</h4>
            <p className="text-base text-lightgray">{technologies}</p>
          </div>
        </Animated>
      </div>

      {/* Image lightbox */}
      <Lightbox
        open={isImageLightboxOpen}
        close={() => setImageIsLightboxOpen(false)}
        index={selectedIndex}
        slides={medias.map((m) => ({ src: `/images/${m.src}`, alt: m.alt }))}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        on={{ view: ({ index }) => setSelectedIndex(index) }}
        portal={{
          root: imagePortalRef.current,
        }}
      />
    </>
  );
};

export default ProjectItem;
