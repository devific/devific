import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import { TrustedBy } from "@/components/TrustedBy";

interface HomeProps {
  onOpenDialog: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenDialog }) => {
  return (
    <section className="overflow-x-hidden">
      <Hero onOpenDialog={onOpenDialog} />
      <TrustedBy />
      <About />
      <Projects />
      <Services />
      <Process />
      {false && <WhyUs />}
      <CTA onOpenDialog={onOpenDialog} />
    </section>
  );
};

export default Home;
