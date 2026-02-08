
import React from 'react';
import { motion } from 'motion/react';
import { Layout, Target, RefreshCw, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Website Design & Development",
      description: "Custom-built websites designed to be clear, fast, and easy to use. We combine aesthetic precision with structural integrity."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Landing Pages",
      description: "Focused pages built to communicate one idea and drive one action. Maximum conversion through minimal distraction."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Website Revamps",
      description: "Improving structure, clarity, and performance of existing websites without losing your established brand equity."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Reliable updates, improvements, and maintenance as your business grows. We stay with you for the long haul."
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-2xl"
        >
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">What We Do</h2>
          <h3 className="text-5xl font-serif text-zinc-900 leading-tight">Capabilities designed for real-world impact.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-200 border border-zinc-200 overflow-hidden rounded-3xl">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white p-12 group hover:bg-zinc-50 transition-colors duration-500 ${
                idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5'
              }`}
            >
              <div className="text-zinc-900 mb-8 p-3 bg-zinc-50 rounded-xl inline-block group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif text-zinc-900 mb-4">{service.title}</h4>
              <p className="text-zinc-500 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
