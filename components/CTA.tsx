
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onOpenDialog: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenDialog }) => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto p-12 md:p-24 bg-white rounded-[40px] shadow-2xl shadow-zinc-200 border border-zinc-100 relative overflow-hidden">
          {/* Subtle Accent blobs */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 space-y-10">
            <h3 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
              Let's see if we're <br className="hidden md:block" /> the right fit.
            </h3>
            <p className="text-xl text-zinc-500 max-w-lg mx-auto font-light leading-relaxed">
              Have a project in mind or just exploring ideas? We're happy to talk through your goals and find a path forward.
            </p>
            <div className="pt-4">
              <button 
                onClick={onOpenDialog}
                className="group relative inline-flex items-center px-12 py-5 bg-indigo-600 text-white text-xl font-medium rounded-full overflow-hidden transition-all hover:bg-zinc-900 shadow-xl shadow-indigo-200"
              >
                <span className="relative z-10 flex items-center">
                  Get in touch
                  <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
