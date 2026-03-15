import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenDialog: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDialog }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D tilt transforms
  const rotateX = useTransform(y, [-300, 300], [12, -12]);
  const rotateY = useTransform(x, [-300, 300], [-12, 12]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  // parallax movement for inner element
  const parallaxY = useTransform(y, [-300, 300], [-25, 25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      x.set(mouseX);
      y.set(mouseY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-2/3 h-2/3 bg-zinc-50 rounded-bl-[200px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-y-12 items-center">
        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif text-zinc-900 leading-[1.05] tracking-tight"
          >
            Building <span className="text-zinc-400">purpose-driven</span>{" "}
            websites for growing businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-lg text-xl text-zinc-500 leading-relaxed font-light"
          >
            Devific helps startups and growing businesses create fast, focused,
            and reliable web experiences that support real goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={onOpenDialog}
              className="group flex items-center px-8 py-4 text-white text-lg font-medium bg-[#5356c9] hover:bg-[#5356c9]/80 transition-all shadow-xl shadow-zinc-200 rounded-[12px_60px_12px_12px]"
            >
              Start a project
              <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* HERO GRAPHIC */}
        <div className="col-span-12 lg:col-span-4 lg:flex justify-end hidden">
          <motion.div
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-72 h-[480px] bg-zinc-100 border border-zinc-200 rounded-[20px_100px_20px_20px] flex items-center justify-center p-8 overflow-hidden"
          >
            {/* animated background fill */}
            <motion.div
              animate={{ height: ["40%", "100%", "40%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 w-full bg-indigo-600/10"
            />

            {/* inner shape with parallax */}
            <motion.div
              style={{ y: parallaxY }}
              className="relative z-10 w-full aspect-square border-2 border-zinc-900 rounded-[16px_80px_16px_16px] flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 bg-zinc-900 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
