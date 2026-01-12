"use client";

import { motion } from "framer-motion";
import { LogoMarquee } from "./LogoMarquee";

export default function SponsorBy() {
  const sterringCommittee = [
    { name: "MoPSE Indonesia", logo: "/logos/mopse.png" },
    { name: "SEAMEO Secretariat", logo: "/logos/seameo-secretariat.png" },
  ];

  const organizers = [
    { name: "SEAMEO CECCEP", logo: "/logos/logo_ceccep.png" },
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
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-background to-orange-50 py-10 md:py-20 space-y-14">
      {/* sterring committee */}
      <div className="mx-auto max-w-sm">
        <p className="text-small text-center uppercase tracking-widest text-text-muted">
          Steering Committee by
        </p>

        {/* Desktop */}
        <div className="mt-6 hidden md:grid grid-cols-2">
          {sterringCommittee.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.03 }}>
              <div className="flex h-28 items-center justify-center hover:grayscale-0 transition">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Auto */}
        <div className="mt-6 md:hidden">
          <LogoMarquee logos={sterringCommittee} />
        </div>
      </div>

      {/* ORGANIZERS */}
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-small text-center uppercase tracking-widest text-text-muted">
          Organized by
        </p>

        {/* Desktop */}
        {organizers.length === 1 ? (
          <div className="mt-6 hidden md:flex justify-center">
            <motion.div whileHover={{ scale: 1.03 }}>
              <div className="flex h-28 w-64 items-center justify-center hover:grayscale-0 transition">
                <img
                  src={organizers[0].logo}
                  alt={organizers[0].name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="mt-6 hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {organizers.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.03 }}>
                <div className="flex h-28 items-center justify-center hover:grayscale-0 transition">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile Auto */}
        <div className="mt-6 md:hidden">
          <LogoMarquee logos={organizers} />
        </div>
      </div>

      {/* CO-ORGANIZERS */}
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-small text-center uppercase tracking-widest text-text-muted">
          Co-Organizing by
        </p>

        {/* Desktop */}
        <div className="mt-6 hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coOrganizers.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
              <div className="flex h-28 items-center justify-center hover:grayscale-0 transition">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
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
