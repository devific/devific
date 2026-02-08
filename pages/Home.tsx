
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';

interface HomeProps {
  onOpenDialog: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenDialog }) => {
  return (
    <>
      <Hero onOpenDialog={onOpenDialog} />
      <About />
      <Projects />
      <Services />
      <Process />
      <WhyUs />
      <CTA onOpenDialog={onOpenDialog} />
    </>
  );
};

export default Home;
