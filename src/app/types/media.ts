export interface Media {
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
  alt?: string;
}
