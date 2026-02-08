
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <Link to="/" className="text-3xl font-serif text-zinc-900">Devific</Link>
            <p className="text-lg text-zinc-500 max-w-sm leading-relaxed font-light">
              Thoughtful web development for businesses that value clarity, speed, and integrity.
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@devific.com" className="text-zinc-500 hover:text-indigo-600 transition-colors">hello@devific.com</a>
              </li>
              <li>
                <span className="text-zinc-400 text-sm">Based in Goa, India — Working Globally</span>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest">Studio</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-zinc-500 hover:text-indigo-600 transition-colors">Philosophy</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-indigo-600 transition-colors">Capability</a></li>
              <li><a href="#process" className="text-zinc-500 hover:text-indigo-600 transition-colors">Approach</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm gap-4">
          <p>© {currentYear} Devific. Built with intention.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
