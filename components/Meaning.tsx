import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Meaning: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform for "DEV" and "IFIC" to move apart
  // We use a wider range for a smoother feel
  const xLeft = useTransform(scrollYProgress, [0.1, 0.45], ["0%", "-60%"]);
  const xRight = useTransform(scrollYProgress, [0.1, 0.45], ["0%", "60%"]);

  // Opacity and scale for the revealed text
  const opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.25, 0.45], [0.9, 1]);

  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="h-[100vh] bg-zinc-900 relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle background pattern */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-6">
          {/* Background Text Reveal */}
          <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0 flex flex-col items-center justify-center z-0"
          >
            <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
              <motion.span className="text-indigo-400 font-serif text-3xl md:text-6xl italic tracking-tight">
                Development
              </motion.span>
              <motion.span className="text-zinc-700 font-serif text-2xl md:text-4xl">
                +
              </motion.span>
              <motion.span className="text-indigo-400 font-serif text-3xl md:text-6xl italic tracking-tight">
                Terrific
              </motion.span>
            </div>
          </motion.div>

          {/* Foreground Splitting Text */}
          <div className="relative z-10 flex items-center justify-center text-[18vw] md:text-[14vw] font-serif leading-none tracking-tighter text-white select-none mix-blend-difference">
            <motion.span style={{ x: xLeft }} className="inline-block">
              DEV
            </motion.span>
            <motion.span style={{ x: xRight }} className="inline-block">
              IFIC
            </motion.span>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-20 left-0 right-0 flex flex-col items-center space-y-4 px-6"
        >
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
          <p className="text-zinc-500 text-sm md:text-base font-medium uppercase tracking-[0.3em] text-center">
            Terrific website development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Meaning;
