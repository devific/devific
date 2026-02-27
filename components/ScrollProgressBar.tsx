import React from "react";
import { motion, useScroll } from "motion/react";
import { cn } from "../utils";

interface ScrollProgressBarProps {
  className?: string;
  colorClassName?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className,
  colorClassName = "bg-indigo-600",
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 origin-left z-[60]",
        colorClassName,
        className,
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
