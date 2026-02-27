import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onOpenDialog: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenDialog }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-zinc-900 rounded-[80px] p-16 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-indigo-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif text-white mb-8 lg:mb-12 leading-[0.9] tracking-tighter"
            >
              Let's see if we're the <br />
              <span className="text-zinc-500 italic">right fit.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-zinc-400 font-light mb-8 lg:mb-16 leading-relaxed max-w-2xl mx-auto"
            >
              Have a project in mind or just exploring ideas? We're happy to
              talk through your goals and find a path forward.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={onOpenDialog}
              className="group relative inline-flex items-center py-4 px-8 lg:px-12 lg:py-6 bg-white text-zinc-900 rounded-full text-xl font-medium overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center">
                Start a conversation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-indigo-50"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
