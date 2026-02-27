import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../utils";

type Logo = {
  name: string;
  src: string;
};

interface TrustedByProps {
  logos?: Logo[];
  className?: string;
}

export function TrustedBy({
  logos = [
    { name: "Digiket Solution", src: "/logos/digiket-solution.png" },
    { name: "Luminati", src: "/logos/luminati.png" },
  ],
  className,
}: TrustedByProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [shouldMarquee, setShouldMarquee] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;

    setShouldMarquee(trackWidth > containerWidth);
  }, [logos]);

  return (
    <section className="py-10 border-y border-zinc-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] whitespace-nowrap">
            Trusted by
          </span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-16 gap-y-8 opacity-30 grayscale hover:opacity-100 transition-opacity duration-700">
            {logos.map((logo, i) => (
              <LogoItem key={i} logo={logo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoItem({ logo, key }: { logo: Logo; key: number }) {
  return (
    <div className="flex h-12 items-center justify-center">
      <img
        src={logo.src}
        alt={logo.name}
        className="
          h-full
          w-auto
          max-w-[160px]
          object-contain
          opacity-30
          grayscale
          transition-opacity
          duration-300
          hover:opacity-50
        "
        loading="lazy"
      />
    </div>
  );
}
