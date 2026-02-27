import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils";

const projects = [
  {
    name: "Neo Majestic",
    category: "Casino & Entertainment",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=100&w=700&auto=format&fit=crop",
    url: "//dev.gavn.in/sea-queen",
  },
  {
    name: "Luminati",
    category: "Electric & Lighting",
    image:
      "https://framerusercontent.com/images/pg6PgJ51RzrHtafQBYRKoJ2D1Q.jpg?scale-down-to=1024&width=5472&height=3648",
    url: "//luminati.framer.website/",
  },
  {
    name: "Handstand",
    description: "",
    category: "Gym & Fitness",
    image: "/projects/handstand-bg.jpg",
    url: "//go.devific.in/handstand",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.3em] mb-6 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 leading-tight tracking-tighter">
            Projects built with <br />
            <span className="text-zinc-300 italic">focus and intention.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: index % 2 === 0 ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group cursor-pointer block",
                index % 2 !== 0 ? "md:mt-32" : "",
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-zinc-100 mb-8">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-500" />
                <div className="absolute top-10 right-10 p-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                  <ArrowUpRight className="w-6 h-6 text-zinc-900" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-indigo-400 z-10 opacity-30 pointer-events-none" />
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <div className="h-px w-8 bg-zinc-100" />
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 tracking-tight">
                  {project.name}
                </h3>

                {project.description && (
                  <p className="text-zinc-500 font-light leading-relaxed text-lg max-w-sm">
                    {project.description}
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
