import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Scale spring (prevents snapping)
  const scaleSpring = useSpring(1, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  // Update scale smoothly via spring
  useEffect(() => {
    scaleSpring.set(isHovered ? 2.5 : 1);
  }, [isHovered, scaleSpring]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/20 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: scaleSpring,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 h-1 bg-indigo-600 rounded-full" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
