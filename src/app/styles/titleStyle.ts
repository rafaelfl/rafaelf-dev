import { tv } from "tailwind-variants";

export const sectionTitleStyle = tv({
  base: "text-darkblue font-semibold tracking-wide text-center",
  variants: {
    decoration: {
      default: "",
      underline:
        "relative after:content-[''] after:absolute after:bottom-0 after:border after:w-2/3 after:left-1/2 after:translate-x-[-50%] after:text-darkblue",
    },
    size: {
      large: "text-4xl",
      normal: "text-3xl",
    },
    fontWeight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    decoration: "default",
    size: "normal",
    fontWeight: "semibold",
  },
});
