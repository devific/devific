
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenDialog: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDialog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Capability', href: '#services' },
    { name: 'Approach', href: '#process' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4 border-b border-zinc-100 shadow-sm' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-tight text-zinc-900">Devific</Link>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenDialog}
            className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200"
          >
            Start a project
          </button>
        </div>

        <button className="md:hidden p-2 text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="absolute top-8 right-6">
          <button className="p-2 text-zinc-900" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-3xl font-serif my-6 text-zinc-900 hover:text-indigo-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => { setMobileMenuOpen(false); onOpenDialog(); }}
          className="mt-8 text-2xl font-medium text-indigo-600 underline underline-offset-8"
        >
          Start a project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
