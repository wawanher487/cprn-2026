"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { summitThemes } from "./themes-data";
import { useState } from "react";

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
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden">
      {/* aurora background */}
      <div className="pointer-events-none absolute inset-0 aurora-bg"/>

      {/* content */}
      <div id="themes" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
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

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-1"> 
            {/* menganti asalnya md:grid-cols-3 */}
            {/* Speaker 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/keynote/1.png"
                  alt="Dr Margarita Pavlova"
                  width={300}
                  height={300}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Prof. Dr. Abdul Mu&apos;ti, M.Ed
              </h3>
              <p className="body-text mt-2 text-text-muted">
                Indonesia Minister of Primary and Secondary Education
              </p>
            </motion.div>

            {/* Speaker 2 */}
            {/* <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/keynote/2.png"
                  alt="Dr Margarita Pavlova"
                  width={300}
                  height={300}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="heading-3 mt-6 text-text-primary transition-colors duration-300 group-hover:text-secondary">
                Prof. Dr. Ir. Rachmat Pambudi, M.S.
              </h3>
              <p className="body-text mt-2 text-text-muted">
                National Development Planning Agency of Republic Indonesia (BAPPENAS)
              </p>
            </motion.div> */}

            {/* Speaker 3 */}
            {/* <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/keynote/3.png"
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
            </motion.div> */}

            {/* Speaker 4 */}
            {/* <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/keynote/4.png"
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
                Melbourne University
              </p>
            </motion.div> */}

            {/* Speaker 5 */}
            {/* <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <div className="mx-auto w-48 overflow-hidden rounded-2xl">
                <Image
                  src="/keynote/5.png"
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
                Director of SEAMEO Secretariat
              </p>
            </motion.div> */}
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

          <div className="mt-12 space-y-16 border-t border-border pt-10">
            {summitThemes.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                {/* Pillar Title */}
                <div className="md:col-span-1">
                  <h3 className="heading-3 text-text-primary">
                    {pillar.pillar}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{pillar.title}</p>
                </div>

                {/* Sub Themes Accordion */}
                <div className="md:col-span-2 space-y-4">
                  {pillar.themes.map((theme, idx) => {
                    const themeId = `${index}-${idx}`;
                    const isOpen = activeTheme === themeId;

                    return (
                      <div
                        key={themeId}
                        className={`rounded-xl border p-5 transition ${
                          isOpen
                            ? "bg-secondary text-white"
                            : "bg-white/70 hover:shadow-md"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setActiveTheme(isOpen ? null : themeId)
                          }
                          className="flex w-full items-start justify-between gap-4 text-left"
                        >
                          <h4 className="font-semibold">
                            {idx + 1}. {theme.title}
                          </h4>
                          <span className="text-xl">{isOpen ? "−" : "+"}</span>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-sm leading-relaxed text-justify">
                            {theme.description}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
