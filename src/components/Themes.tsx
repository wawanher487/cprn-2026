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
    <section className="bg-background">
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
                    whileHover={{ y: -6}}
                    transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
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
                            Dr Margarita Pavlova
                        </h3>
                        <p className="body-text mt-2 text-text-muted">
                            Director of the UNESCO-UNEVOC Centre (Hong Kong)
                        </p>
                    </motion.div>

                    {/* Speaker 2 */}
                    <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -6}}
                    transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
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
                            Dr Margarita Pavlova
                        </h3>
                        <p className="body-text mt-2 text-text-muted">
                            Director of the UNESCO-UNEVOC Centre (Hong Kong)
                        </p>
                    </motion.div>

                    {/* Speaker 3 */}
                    <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -6}}
                    transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
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
                            Tony McAleavy
                        </h3>
                        <p className="body-text mt-2 text-text-muted">
                            Chief Education & Skills Officer, Education Development Trust
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
                whileHover={{x: 6}} 
                transition={{duration: 0.3, ease: [0.16,1,0.3, 1]}}
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    <h3 className="heading-3 text-text-primary md:col-span-1">
                        EDUCATION
                    </h3>
                    <div className="md:col-span-2">
                        <h4 className="heading-4 text-text-primary">
                        Equity & Diversity in Learning
                        </h4>
                        <p className="body-text mt-3 text-text-muted">
                        Explore the transformative role of technology in education by
                        highlighting how digital tools are revolutionising teaching
                        and learning, while enhancing accessibility, inclusivity,
                        and quality.
                        </p>
                    </div>
                </motion.div>

                {/* Theme Item */}
                <motion.div
                variants={itemVariants}
                whileHover={{x: 6}} 
                transition={{duration: 0.3, ease: [0.16,1,0.3, 1]}}
                className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-3"
                >
                    <h3 className="heading-3 text-text-primary md:col-span-1">
                        SCIENCE
                    </h3>
                    <div className="md:col-span-2">
                        <h4 className="heading-4 text-text-primary">
                        Inclusive STEM & Research
                        </h4>
                        <p className="body-text mt-3 text-text-muted">
                        Highlight sustainable practices in science and innovation by
                        adopting environmentally responsible approaches, leveraging
                        artificial intelligence, and advancing research aimed at
                        long-term environmental and social impact.
                        </p>
                    </div>
                </motion.div>

                {/* Theme Item */}
                <motion.div
                variants={itemVariants}
                whileHover={{x: 6}} 
                transition={{duration: 0.3, ease: [0.16,1,0.3, 1]}}
                className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-3"
                >
                    <h3 className="heading-3 text-text-primary md:col-span-1">
                        CULTURE
                    </h3>
                    <div className="md:col-span-2">
                        <h4 className="heading-4 text-text-primary">
                        Preserving Southeast Asian Heritage
                        </h4>
                        <p className="body-text mt-3 text-text-muted">
                        Discuss approaches to preserve and revitalise cultural traditions in diverse societies by embracing inclusive platforms that encourage cultural dialogue, mutual understanding, and innovation rooted in heritage.
                        </p>
                    </div>
                </motion.div>
            </div>
            </motion.div>
        </div>
    </section>
  );
}
