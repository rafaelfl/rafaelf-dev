import { ReactNode, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { tv } from "tailwind-variants";
import { Lightbox } from "yet-another-react-lightbox";
import { Video } from "yet-another-react-lightbox/plugins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";

import { Media } from "@/app/[locale]/types";

import Animated from "../Animated/Animated";
import Carousel from "../Carousel/Carousel";
import NextJsImage from "../NextJsImage/NextJsImage";

const projectItemStyle = tv({
  base: "grid grid-cols-1 items-center overflow-hidden lg:min-h-[19rem] xl:min-h-[24rem] 2xl:min-h-[27.25rem] mb-14 max-w-7xl",
  variants: {
    gallery: {
      true: "lg:grid-cols-2 gap-4",
    },
  },
  defaultVariants: {
    gallery: false,
  },
});

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
  medias?: Array<Media>;
  about: string | ReactNode;
  technologies: string;
  sourceCode?: string;
  documentation?: string;
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
  documentation,
  livePreview,
  video,
}: ProjectItemProps) => {
  const t = useTranslations();

  const imagePortalRef = useRef<HTMLDivElement>(null);
  const videoPortalRef = useRef<HTMLDivElement>(null);

  const [isImageLightboxOpen, setImageIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);

  return (
    <>
      <div ref={videoPortalRef} className={projectItemStyle({ gallery: !!medias })}>
        {medias && (
          <Animated
            animation={ltr ? "lateralLeftFade" : "lateralRightFade"}
            style={{ transitionDelay: "0.4s" }}
            className="order-none"
          >
            <div ref={imagePortalRef} className="inline-block"></div>

            <Carousel
              medias={medias}
              className="p-4"
              onClick={(idx) => {
                setSelectedIndex(idx);
                setImageIsLightboxOpen(true);
              }}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </Animated>
        )}

        <Animated
          animation={ltr ? "lateralRightFade" : "lateralLeftFade"}
          style={{ transitionDelay: "0.4s" }}
          className={`${ltr ? "lg:order-1 " : "lg:-order-1"}`}
        >
          <div className="flex flex-col px-6">
            <h4 className="text-xl text-darkblue">{t("projects.about")}</h4>
            <p className="text-base mb-4 text-lightgray">{about}</p>

            <h4 className="text-xl text-darkblue">{t("projects.technologies")}</h4>
            <p className="text-base mb-4 text-lightgray">{technologies}</p>

            {sourceCode && (
              <>
                <h4 className="text-xl text-darkblue">{t("projects.sourceCode")}</h4>
                <div className="mb-4">
                  <Link
                    className="text-base  text-lightgray hover:underline"
                    href={sourceCode}
                    target="_blank"
                  >
                    {sourceCode} <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                </div>
              </>
            )}

            {documentation && (
              <>
                <h4 className="text-xl text-darkblue">{t("projects.documentation")}</h4>
                <div className="mb-4">
                  <Link
                    className="text-base text-lightgray hover:underline"
                    href={documentation}
                    target="_blank"
                  >
                    {documentation} <FontAwesomeIcon icon={faNoteSticky} size="xl" />
                  </Link>
                </div>
              </>
            )}

            {livePreview && (
              <div className="mb-5 mt-1">
                <Link
                  className="text-base mb-4 text-white bg-darkblue py-3 px-3 rounded-md font-medium"
                  href={livePreview}
                  target="_blank"
                >
                  {t("projects.livePreview")}
                </Link>
              </div>
            )}

            {video && (
              <>
                <div className="mb-5">
                  <Link
                    className="text-base text-white bg-darkblue py-3 px-3 rounded-md font-medium"
                    href="#"
                    prefetch={false}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsVideoLightboxOpen(true);
                    }}
                    scroll={false}
                  >
                    {t("projects.viewDemo")}
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
          </div>
        </Animated>
      </div>

      {/* Image lightbox */}
      {medias && (
        <Lightbox
          open={isImageLightboxOpen}
          close={() => setImageIsLightboxOpen(false)}
          index={selectedIndex}
          slides={medias.map((m) => m.src)}
          render={{ slide: NextJsImage }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          on={{ view: ({ index }) => setSelectedIndex(index) }}
          portal={{
            root: imagePortalRef.current,
          }}
        />
      )}
    </>
  );
};

export default ProjectItem;
