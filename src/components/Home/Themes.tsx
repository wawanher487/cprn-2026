"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Themes() {
  return (
    <section className="bg-surface">
      <div id="themes" className="mx-auto max-w-7xl px-6 py-20">
        {/* ===================== */}
        {/* KEYNOTE SPEAKERS */}
        {/* ===================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="heading-2 items-center text-secondary"
          >
            Keynote Speakers
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Speaker 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl border-2 border-secondary transition-colors duration-300 group-hover:border-sencondary">
                <Image
                  src="/avatar_keynote.png"
                  alt="Dr Margarita Pavlova"
                  width={300}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Prof. Dr. Abdul Mu'ti, M.Ed
              </h3>
              <p className="body-text mt-2 text-text-muted">
                Indonesia Minister of Primary and Secondary Education (TBC)
              </p>
            </motion.div>

            {/* Speaker 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl border-2 border-secondary transition-colors duration-300 group-hover:border-sencondary">
                <Image
                  src="/avatar_keynote.png"
                  alt="Dr Margarita Pavlova"
                  width={300}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Prof. Dr. Ir. Rachmat Pambudi, M.S.
              </h3>
              <p className="body-text mt-2 text-text-muted">
                Indonesia Ministry of BAPPENAS RI (TBC)
              </p>
            </motion.div>

            {/* Speaker 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl border-2 border-secondary transition-colors duration-300 group-hover:border-seoncondary">
                <Image
                  src="/avatar_keynote.png"
                  alt="Tony McAleavy"
                  width={300}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Asec. Janir T. Datukan
              </h3>
              <p className="body-text mt-2 text-text-muted">
                Assistant Secretary for Learning Systems Strand, Department of
                Education Philippines
              </p>
            </motion.div>

            {/* Speaker 4 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl border-2 border-secondary transition-colors duration-300 group-hover:border-seoncondary">
                <Image
                  src="/avatar_keynote.png"
                  alt="Tony McAleavy"
                  width={300}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Prof. Marek Tesar
              </h3>
              <p className="body-text mt-2 text-text-muted">
                Melbourne University (TBC)
              </p>
            </motion.div>

            {/* Speaker 5 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl border-2 border-secondary transition-colors duration-300 group-hover:border-seoncondary">
                <Image
                  src="/avatar_keynote.png"
                  alt="Tony McAleavy"
                  width={300}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Datuk Dr. Habibah Abdul Rahim
              </h3>
              <p className="body-text mt-2 text-text-muted">
                Direktur Sekretariat SEAMEO
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ===================== */}
        {/* SUB THEMES */}
        {/* ===================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h2
            variants={itemVariants}
            className="heading-2 text-secondary"
          >
            Summit Sub-Themes
          </motion.h2>

          <div className="mt-12 space-y-12 border-t border-border pt-8">
            {/* Theme Item */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              <h3 className="heading-3 text-text-primary md:col-span-1">
                EDUCATION
              </h3>
              <div className="md:col-span-2">
                <h4 className="heading-4 text-text-primary">
                  Education Transformation for an Inclusive and Future-Ready
                  Society
                </h4>
                <p className="body-text mt-3 text-text-muted text-justify">
                  Explore how education systems can be transformed to promote
                  equity, strengthen access and participation, and improve
                  learning quality across all levels. This pillar highlights
                  inclusive policies that address structural barriers, the
                  integration of future-oriented skills and digital
                  technologies, seamless transitions throughout the education
                  lifecycle, strengthened teacher professionalism, and robust
                  assessment and governance systems to ensure resilient,
                  high-quality, and lifelong learning for all.
                </p>
              </div>
            </motion.div>

            {/* Theme Item */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-3"
            >
              <h3 className="heading-3 text-text-primary md:col-span-1">
                SCIENCE
              </h3>
              <div className="md:col-span-2">
                <h4 className="heading-4 text-text-primary">
                  Science, Innovation, and Inclusive Policy for Sustainable
                  Development
                </h4>
                <p className="body-text mt-3 text-text-muted text-justify">
                  Explore the role of science and innovation in shaping
                  evidence-based public policies that address societal
                  challenges across health, education, environment, and
                  technology. This pillar highlights STEAM education for
                  sustainability, inclusive participation of youth, women, and
                  marginalized groups in science, regional collaboration through
                  science diplomacy, and responsible innovation that integrates
                  ethical considerations and indigenous knowledge to support
                  sustainable and equitable development.
                </p>
              </div>
            </motion.div>

            {/* Theme Item */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-3"
            >
              <h3 className="heading-3 text-text-primary md:col-span-1">
                CULTURE
              </h3>
              <div className="md:col-span-2">
                <h4 className="heading-4 text-text-primary">
                  Culture, Creativity, and Inclusive Societies
                </h4>
                <p className="body-text mt-3 text-text-muted text-justify">
                  Explore how cultural policies and creative practices
                  strengthen identity, inclusion, and peacebuilding in diverse
                  societies. This pillar highlights the safeguarding of
                  intangible cultural heritage, the growth of creative and
                  cultural industries for inclusive economic development, the
                  integration of cultural rights into education, and the ethical
                  use of digital technologies to ensure fair representation,
                  community participation, and intergenerational justice.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
