
import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const WhyUs: React.FC = () => {
  const points = [
    {
      title: "Thoughtful, problem-first approach",
      desc: "We don't start with solutions; we start with questions. We ensure we're building the right thing for the right reason."
    },
    {
      title: "Clear communication & timelines",
      desc: "No industry jargon. No missed deadlines. Just straightforward updates and realistic delivery dates."
    },
    {
      title: "Purpose-driven design",
      desc: "We avoid short-lived trends in favor of timeless usability and brand-aligned clarity."
    },
    {
      title: "Built to scale",
      desc: "Our codebases are structured to grow with your business, not to be rewritten a year from now."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
             <div className="sticky top-32">
              <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">Why Devific</h2>
              <h3 className="text-5xl font-serif text-zinc-900 leading-[1.1] mb-8">Devific is the partner for the intentional.</h3>
              <div className="w-20 h-1 bg-indigo-600" />
             </div>
          </motion.div>
          
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 gap-12">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex space-x-6 group"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <Check className="w-5 h-5 text-zinc-400 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-zinc-900 mb-3">{point.title}</h4>
                    <p className="text-lg text-zinc-500 leading-relaxed font-light">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
