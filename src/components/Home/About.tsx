"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

export default function About() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-orange-50 pb-20 pt-20 md:pt-10">
      <div id="about" className="mx-auto max-w-7xl px-6 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Subtitle */}
          <motion.h1
            variants={itemVariants}
            className="heading-1 inline-block rounded-full px-4 py-1 text-secondary"
          >
            About the Summit
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="heading-2 mt-6 text-text-primary"
          >
            What is CPRN Summit 2026?
          </motion.h2>
        </motion.div>

        {/* VALUE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1"
        >
          {/* Card */}
          <motion.div
            variants={itemVariants}
            className="group rounded-2xl border border-border bg-background p-4 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-secondary hover:bg-secondary"
          >
            <p className="body-text mt-2 text-justify  text-text-muted transition-colors duration-300 group-hover:text-white/90">
              Southeast Asia’s cultural and social diversity is a defining
              strength of the region, yet persistent inequality continues to
              hinder inclusive and sustainable development. Marginalized groups
              face barriers in accessing quality education and basic support,
              often shaped by policies that do not fully recognize their lived
              realities. The CPRN Summit 2026, themed{" "}
              <span className="font-bold">
                {" "}
                “Bridging Research, Policy, and Practice: Pathways toward
                Inclusive, Equitable, and Sustainable Futures,”
              </span>{" "}
              focuses on strengthening genuine partnership and cross-sector
              collaboration to connect research, policy, and practice. The
              Summit seeks to generate practical solutions and measurable change
              toward a more inclusive, equitable, and sustainable Southeast
              Asia.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
