import { ComponentProps, ReactNode, useRef } from "react";
import { tv } from "tailwind-variants";
import { useInView } from "framer-motion";

import styles from "./Animated.module.scss";

const animatedFadeStyle = tv({
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
    fadeIn: {
      none: "",
      visible: "opacity-100",
      notvisible: "opacity-0",
    },
  },
  defaultVariants: {
    animation: "static",
    lateralFade: "none",
    flipFade: "none",
    fadeIn: "none",
  },
});

interface AnimatedComponentProps extends ComponentProps<"div"> {
  animation: "lateralFade" | "flipFade" | "fadeIn";
  className?: string;
  animationDelay?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
  children: ReactNode;
}

const Animated = ({
  animation,
  className = "",
  animationDelay,
  children,
  ...rest
}: AnimatedComponentProps) => {
  const wrapper = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(wrapper, { once: true });

  let animatedClass = "";

  if (animation === "lateralFade") {
    animatedClass = animatedFadeStyle({
      animation: "animated",
      lateralFade: isInView ? "visible" : "notvisible",
    });
  } else if (animation === "flipFade") {
    animatedClass = animatedFadeStyle({
      animation: "animated",
      flipFade: isInView ? "visible" : "notvisible",
    });
  } else if (animation === "fadeIn") {
    animatedClass = animatedFadeStyle({
      animation: "animated",
      fadeIn: isInView ? "visible" : "notvisible",
    });
  }

  let animationDelayClass = "";

  if (animationDelay) {
    animationDelayClass = styles[`animation-delay-${animationDelay}`];
  }

  return (
    <div ref={wrapper} className={`${animatedClass} ${className} ${animationDelayClass}`} {...rest}>
      {children}
    </div>
  );
};

export default Animated;
