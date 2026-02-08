import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenDialog: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDialog }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-2/3 h-2/3 bg-zinc-50 rounded-bl-[200px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-y-12 h-full items-center">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full"
          >
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
              Web Development Studio
            </span>
          </motion.div>

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
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4"
          >
            <button
              onClick={onOpenDialog}
              className="group flex items-center px-8 py-4 bg-zinc-900 text-white rounded-full text-lg font-medium hover:bg-indigo-600 transition-all shadow-xl shadow-zinc-200"
            >
              Start a project
              <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Floating Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-4 lg:flex justify-end hidden"
        >
          <div className="relative w-72 h-[480px] bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center p-8 overflow-hidden group">
            <motion.div
              animate={{ height: ["50%", "100%", "50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 w-full bg-indigo-600/10"
            />
            <div className="relative z-10 w-full aspect-square border-2 border-zinc-900 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 bg-zinc-900 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
