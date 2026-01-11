"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Logo {
  name: string;
  logo: string;
}

export function LogoMarquee({ logos }: { logos: Logo[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, [logos]);

  //jika cuma 1 logo, tidak pakai marquee
  if (logos.length === 1) {
    return (
      <div className="flex justify-center py-4">
        <img
          src={logos[0].logo}
          alt={logos[0].name}
          className="max-h-12 object-contain"
        />
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex w-max gap-8"
        animate={{ x: [0, -width] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex min-w-30 items-center justify-center"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
