
import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-12 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-zinc prose-lg max-w-none space-y-8 text-zinc-600 font-light leading-relaxed">
          <p>Last updated: June 2025</p>
          <p>At Devific, we take your privacy seriously. This policy describes how we collect, use, and protect your information when you interact with our website and services.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">1. Information We Collect</h2>
          <p>We only collect information that is necessary for us to communicate with you regarding project inquiries. This usually includes your name, email address, and company details provided through our project inquiry form.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">2. How We Use Information</h2>
          <p>The information collected is strictly used to assess potential projects and facilitate communication during the discovery and development phases. We do not sell or share your personal data with third-party marketing companies.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">3. Data Security</h2>
          <p>We implement industry-standard security measures to ensure the protection of your data. While no method of transmission over the internet is 100% secure, we strive to use commercially acceptable means to protect your personal information.</p>
          
          <h2 className="text-2xl font-serif text-zinc-900 mt-12 mb-4">4. Your Rights</h2>
          <p>You have the right to request access to the personal data we hold about you or request its deletion at any time by contacting us directly.</p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
