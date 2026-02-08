
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-12 tracking-tight">Terms of Service</h1>
        <div className="prose prose-zinc prose-lg max-w-none space-y-8 text-zinc-600 font-light leading-relaxed">
          <p>Last updated: June 2025</p>
          <p>By accessing and using the Devific website, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">1. Services</h2>
          <p>Devific provides web design and development services. All project engagements are subject to a separate written agreement that outlines scope, timelines, and payment terms.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">2. Intellectual Property</h2>
          <p>Unless otherwise stated, all content, design, and code on this website are the intellectual property of Devific. Reproduction or redistribution of our work without explicit permission is prohibited.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">3. Limitation of Liability</h2>
          <p>Devific shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services beyond the amount paid for those specific services.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">4. Governing Law</h2>
          <p>These terms are governed by the laws of India, specifically the jurisdiction of Goa, without regard to its conflict of law provisions.</p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
