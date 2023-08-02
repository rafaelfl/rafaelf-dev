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
    flipFade: {
      none: "",
      visible: `${styles.flipYAxis}`,
      notvisible: "",
    },
  },
  defaultVariants: {
    animation: "static",
    lateralFade: "none",
    flipFade: "none",
  },
});

interface AnimatedComponentProps {
  animation: "lateralFade" | "flipFade";
  className?: string;
  animationDelay?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
  children: ReactNode;
}

const Animated = ({
  animation,
  className = "",
  animationDelay,
  children,
}: AnimatedComponentProps) => {
  const wrapper = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(wrapper);

  let animatedClass = "";

  if (animation === "lateralFade") {
    animatedClass = animatedFade({
      animation: "animated",
      lateralFade: isInView ? "visible" : "notvisible",
    });
  } else if (animation === "flipFade") {
    animatedClass = animatedFade({
      animation: "animated",
      flipFade: isInView ? "visible" : "notvisible",
    });
  }

  let animationDelayClass = "";

  if (animationDelay) {
    animationDelayClass = styles[`animation-delay-${animationDelay}`];
  }

  return (
    <div ref={wrapper} className={`${animatedClass} ${className} ${animationDelayClass}`}>
      {children}
    </div>
  );
};

export default Animated;
