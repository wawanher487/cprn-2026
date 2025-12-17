"use client";

import { motion } from "framer-motion";
import { LogoMarquee } from "./LogoMarquee";

export default function SponsorBy() {
  const organizers = [
    { name: "SEAMEO CECCEP", logo: "/logos/ceccep.png" },
    { name: "SEAMEO Secretariat", logo: "/logos/seameo-secretariat.png" },
    { name: "MoPSE Indonesia", logo: "/logos/mopse.png" }
  ];

  const coOrganizers = [
    { name: "SEAMEO BIOTROP", logo: "/logos/biotrop.png" },
    { name: "SEAMEO QITEP Language", logo: "/logos/qitep-language.png" },
    { name: "SEAMEO QITEP Math", logo: "/logos/qitep-math.png" },
    { name: "SEAMEO QITEP Science", logo: "/logos/qitep-science.png" },
    { name: "SEAMEO RECFON", logo: "/logos/recfon.png" },
    { name: "SEAMEO SEAMOLEC", logo: "/logos/seamolec.jpg" },
  ];

  return (
    <section className="bg-background py-10 md:py-20 space-y-14">
        {/* ORGANIZERS */}
        <div className="mx-auto max-w-5xl px-4">
            <p className="text-small text-center uppercase tracking-widest text-text-muted">
            Organized by
            </p>

            {/* Desktop */}
            <div className="mt-6 hidden md:grid grid-cols-3 gap-6">
            {organizers.map((item) => (
                <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition"
                >
                <img src={item.logo} alt={item.name} className="max-h-20" />
                </motion.div>
            ))}
            </div>

            {/* Mobile Auto */}
            <div className="mt-6 md:hidden">
            <LogoMarquee logos={organizers} />
            </div>
        </div>
        
        {/* CO-ORGANIZERS */}
        <div className="mx-auto max-w-5xl px-4">
            <p className="text-small text-center uppercase tracking-widest text-text-muted">
            Co-Organizing by
            </p>

            {/* Desktop */}
            <div className="mt-6 hidden md:grid grid-cols-4 gap-6">
            {coOrganizers.map((item) => (
                <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition"
                >
                <img src={item.logo} alt={item.name} className="max-h-20" />
                </motion.div>
            ))}
            </div>

            {/* Mobile Auto */}
            <div className="mt-6 md:hidden">
            <LogoMarquee logos={coOrganizers} />
            </div>
        </div>
    </section>
  );
}
