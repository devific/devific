
import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-4"
          >
            <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">Philosophy</h2>
            <h3 className="text-4xl font-serif text-zinc-900 leading-tight">Built on intention.</h3>
          </motion.div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl text-zinc-800 font-light leading-snug"
              >
                Devific is a web development studio built on the belief that good websites are clear, purposeful, and quietly powerful.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-zinc-500 leading-relaxed"
              >
                We focus on understanding the problem first, designing with intention, and building solutions that scale with the business. We value simplicity, transparency, and long-term thinking over shortcuts and surface-level polish.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-200"
              >
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Clarity over complexity</h4>
                  <p className="text-zinc-500 text-sm">We don't over-engineer. We find the most direct path to solving your specific business challenge.</p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Sustainable growth</h4>
                  <p className="text-zinc-500 text-sm">Every line of code and every layout choice is made with the future of your business in mind.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
