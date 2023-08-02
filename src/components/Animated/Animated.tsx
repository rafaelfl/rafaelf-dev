import { ReactNode, useRef } from "react";
import { tv } from "tailwind-variants";
import { useInView } from "framer-motion";

import styles from "./Animated.module.scss";

const animatedFade = tv({
  variants: {
    animation: {
      animated: `${styles.animate}`,
      static: "",
    },
    lateralFade: {
      none: "",
      visible: "translate-x-[none] opacity-100",
      notvisible: "translate-x-[-200px] opacity-0",
    },
  },
  defaultVariants: {
    animation: "static",
    lateralFade: "none",
  },
});

interface AnimatedComponentProps {
  animation: "lateralFade";
  className?: string;
  children: ReactNode;
}

const Animated = ({ animation, className, children }: AnimatedComponentProps) => {
  const wrapper = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(wrapper);

  let animatedClass = "";

  if (animation === "lateralFade") {
    animatedClass = animatedFade({
      animation: "animated",
      lateralFade: isInView ? "visible" : "notvisible",
    });
  }

  return (
    <div ref={wrapper} className={`${animatedClass} ${className}`}>
      {children}
    </div>
  );
};

export default Animated;
