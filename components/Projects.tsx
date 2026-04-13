import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils";
import { fetchProjects, Project } from "../services/hygraph";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setIsLoading(false);
    };
    loadProjects();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerView(3);
      else if (window.innerWidth >= 1024) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const next = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  const getTranslateX = () => {
    if (itemsPerView === 1)
      return `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)`;
    if (itemsPerView === 2)
      return `calc(-${currentIndex * 50}% - ${currentIndex * 12}px)`;
    if (itemsPerView === 3)
      return `calc(-${currentIndex * 33.3333}% - ${currentIndex * 8}px)`;
    return "0%";
  };

  if (isLoading) {
    return (
      <section
        id="projects"
        className="py-32 bg-zinc-50 overflow-hidden min-h-[800px] flex items-center justify-center"
      >
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-32 bg-zinc-50 overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-3xl font-serif text-zinc-900 mb-4">
          No projects found
        </h2>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 leading-tight tracking-tighter">
              Featured <span className="text-zinc-400 italic">Projects</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-4 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-zinc-900" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="p-4 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-zinc-900" />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <motion.div
            className="flex gap-6"
            animate={{ x: getTranslateX() }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="w-full lg:w-[calc(50%-12px)] xl:w-[calc(33.3333%-16px)] shrink-0 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="block cursor-pointer"
                >
                  <div className="relative aspect-[20/9] overflow-hidden rounded-[12px_42px_12px_12px] bg-zinc-100 mb-6">
                    <img
                      src={project.coverImage.url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-500" />
                    <div className="absolute top-6 right-6 p-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <ArrowUpRight className="w-6 h-6 text-zinc-900" />
                    </div>
                  </div>
                </Link>

                <div className="space-y-3 px-2">
                  <h3 className="text-3xl font-serif text-zinc-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 font-light leading-relaxed text-lg line-clamp-2">
                    {project.excerpt}
                  </p>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      View live project
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === i
                  ? "w-8 bg-indigo-600"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400",
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
