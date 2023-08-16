import { tv } from "tailwind-variants";

export const sectionTitleStyle = tv({
  base: "text-darkblue font-semibold tracking-wide text-center",
  variants: {
    underline: {
      none: "",
      default:
        "relative after:content-[''] after:absolute after:-bottom-2 after:border after:w-2/3 after:left-1/2 after:translate-x-[-50%] after:text-darkblue",
      white:
        "relative after:content-[''] after:absolute after:-bottom-2 after:border after:w-2/3 after:left-1/2 after:translate-x-[-50%] after:text-white after: text-white",
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
    underline: "none",
    size: "normal",
    fontWeight: "semibold",
  },
});
