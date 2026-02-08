
import React from 'react';
import { motion } from 'motion/react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      content: "We learn your goals, audience, and constraints before making decisions. Discovery is the most critical phase of any build."
    },
    {
      number: "02",
      title: "Design",
      content: "Layouts and interactions are designed around clarity and usability. We focus on intent rather than just aesthetics."
    },
    {
      number: "03",
      title: "Build",
      content: "Development is clean, structured, and optimized from the start. We prioritize performance and semantic code."
    },
    {
      number: "04",
      title: "Launch & Refine",
      content: "We launch carefully and improve based on real usage. A website is a living tool that evolves with your users."
    }
  ];

  return (
    <section id="process" className="py-32 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">How We Work</h2>
            <h3 className="text-5xl font-serif leading-tight">Process over guesswork.</h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-zinc-400 max-w-sm text-lg font-light"
          >
            Our approach is methodical, transparent, and built to eliminate friction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-800 -z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative z-10 space-y-8 group"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center text-4xl font-serif text-zinc-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                {step.number}
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif">{step.title}</h4>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {step.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
