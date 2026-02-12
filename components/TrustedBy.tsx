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
    { name: "Ashton Sofas", src: "/logos/ashton-sofas.png" },
    { name: "Digiket Solution", src: "/logos/digiket-solution.png" },
    { name: "Sea Queen", src: "/logos/sea-queen.png" },
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
    <section className={cn("w-full py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12 max-w-xl mx-auto">
          <h2 className="mb-3 text-xs font-medium text-muted-foreground text-center uppercase opacity-70">
            Trusted by
          </h2>
        </div>

        {/* Logos */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            className={cn(
              "flex items-center gap-14",
              !shouldMarquee && "flex-wrap justify-center ",
            )}
            animate={
              shouldMarquee
                ? {
                    x: ["0%", "-50%"],
                  }
                : undefined
            }
            transition={
              shouldMarquee
                ? {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  }
                : undefined
            }
          >
            {/* First set */}
            {logos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}

            {/* Duplicate set for seamless marquee */}
            {shouldMarquee &&
              logos.map((logo) => (
                <LogoItem key={`${logo.name}-duplicate`} logo={logo} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ logo }: { logo: Logo }) {
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
