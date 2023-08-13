import { StaticImageData } from "next/image";

export interface Media {
  type: "image";
  src: StaticImageData;
  width: number;
  height: number;
  alt?: string;
}
