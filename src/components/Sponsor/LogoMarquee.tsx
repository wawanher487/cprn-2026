"use client";

import { motion } from "framer-motion";

interface Logo {
  name: string;
  logo: string;
}

export function LogoMarquee({ logos }: { logos: Logo[] }) {
  return (
    <div className="relative overflow-hidden">
        <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
            repeat: Infinity,
            repeatType: "loop",
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
