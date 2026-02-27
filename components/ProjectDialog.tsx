import React, { useEffect, useState, useRef } from "react";
import { X, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("New Website");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const projectOptions = [
    "New Website",
    "Landing Page",
    "Website Revamp",
    "Other",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Netlify form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl overflow-hidden z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 rounded-full transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-zinc-900 mb-2">
                  Tell us about your project
                </h2>
                <p className="text-zinc-500 font-light">
                  Let's see if Devific is the right partner for you.
                </p>
              </div>

              <form
                name="project-inquiry"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
                netlify
              >
                {/* Netlify required hidden fields */}
                <input type="hidden" name="form-name" value="project-inquiry" />
                <input type="hidden" name="projectType" value={projectType} />

                {/* Honeypot */}
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 ml-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 ml-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 ml-1">
                    Project Type
                  </label>
                  <div className="relative" ref={selectRef}>
                    <button
                      type="button"
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-light text-zinc-600 flex items-center justify-between"
                    >
                      <span>{projectType}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelectOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isSelectOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute w-full mt-2 bg-white border border-zinc-100 rounded-xl shadow-xl z-50 overflow-hidden"
                        >
                          {projectOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setProjectType(option);
                                setIsSelectOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 hover:bg-zinc-50 transition-colors text-sm ${
                                projectType === option
                                  ? "text-indigo-600 bg-indigo-50/50"
                                  : "text-zinc-600"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    placeholder="Tell us a bit about your goals..."
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-indigo-600 transition-all flex items-center justify-center disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span>Send Inquiry</span>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full mb-4">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-serif text-zinc-900">
                Message Received
              </h2>
              <p className="text-lg text-zinc-500 font-light max-w-sm mx-auto">
                Thank you for reaching out. We'll review your details and get
                back to you within 48 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-8 py-3 border border-zinc-200 text-zinc-600 rounded-full hover:bg-zinc-50 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDialog;
