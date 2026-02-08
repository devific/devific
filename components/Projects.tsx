import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  image: string;
  url: string;
  description: string;
}

const Projects: React.FC = () => {
  const highlight: Project = {
    name: "Sea Queen",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000",
    url: "//dev.gavn.in/sea-queen",
    description: "High-performance resort website.",
  };

  const others: Project[] = [
    {
      name: "Nexus Labs",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      url: "#",
      description:
        "A venture capital platform designed for high-speed analysis.",
    },
    {
      name: "Vellum Stationery",
      image:
        "https://images.unsplash.com/photo-1586075010620-2255bc972183?q=80&w=1000&auto=format&fit=crop",
      url: "#",
      description:
        "Minimalist boutique store with a focus on tactile typography.",
    },
    {
      name: "Stellar Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bbbda540257a?q=80&w=1000&auto=format&fit=crop",
      url: "#",
      description: "Data visualization tool for growing SaaS startups.",
    },
  ];

  return (
    <section id="work" className="pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">
            Selected Work
          </h2>
          <h3 className="text-5xl font-serif text-zinc-900 leading-tight">
            Projects built with <br />
            focus and intention.
          </h3>
        </motion.div>

        {/* Highlight Project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="group relative mb-12 overflow-hidden rounded-[40px] bg-zinc-100 aspect-[16/9] md:aspect-[21/9]"
        >
          <img
            src={highlight.image}
            alt={highlight.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-4xl md:text-6xl font-serif mb-4">
              {highlight.name}
            </h4>
            <p className="text-lg md:text-xl text-zinc-200 font-light mb-8 max-w-lg">
              {highlight.description}
            </p>
            <a
              href={highlight.url}
              className="inline-flex items-center space-x-2 text-white border-b border-white pb-1 group/link"
            >
              <span>Visit site</span>
              <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hidden">
          {others.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[32px] bg-zinc-100 aspect-square mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-serif text-zinc-900">
                    {project.name}
                  </h4>
                  <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-indigo-600 transition-colors" />
                </div>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
