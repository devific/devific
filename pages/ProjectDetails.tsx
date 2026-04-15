import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { fetchProjectBySlug, Project } from "../services/hygraph";
import ImageCarousel from "@/components/ImageCarousel";

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) return;
      setIsLoading(true);
      const data = await fetchProjectBySlug(slug);
      setProject(data);
      setIsLoading(false);
    };
    loadProject();
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24">
        <h1 className="text-4xl font-serif text-zinc-900 mb-4">
          Project not found
        </h1>
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          to="/"
          className="inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24"
        >
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-zinc-900 leading-tight tracking-tighter mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
              {project.description || project.excerpt}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-8">
            {project.completedAt && (
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Completed
                </h3>
                <p className="text-lg text-zinc-900">
                  {new Date(project.completedAt).getFullYear()}
                </p>
              </div>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-medium text-indigo-600 hover:text-indigo-700 transition-colors group"
              >
                Visit live site
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden mb-24"
        >
          <img
            src={project.coverImage.url}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {project.caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-8">
              The Challenge & Solution
            </h2>
            <div className="prose prose-lg prose-zinc max-w-none text-zinc-500 font-light leading-relaxed">
              <p>{project.caseStudy}</p>
            </div>
          </motion.div>
        )}

        {project.images && project.images.length > 0 && (
          <ImageCarousel images={project.images} title={project.title} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
