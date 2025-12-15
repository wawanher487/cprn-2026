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
    <section className="bg-surface">
        <div id="about"  className="mx-auto max-w-7xl px-6 py-10">
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
                    className="heading-1 inline-block rounded-full bg-background px-4 py-1 text-secondary"
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

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="body-text mt-6 text-text-muted"
                >
                    The Collaborative Practices and Research Network (CPRN) Summit 2026
                    is an international forum designed to bring together educators,
                    researchers, policymakers, and practitioners to share knowledge,
                    foster collaboration, and strengthen research networks across the
                    region.
                </motion.p>
            </motion.div>

            {/* VALUE CARDS */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
            >
                {/* Card 1 */}
                <motion.div
                    variants={itemVariants}
                    className="rounded-2xl border border-border bg-background p-8 text-center"
                >
                    <h3 className="heading-3 text-text-primary">
                    Knowledge Exchange
                    </h3>
                    <p className="body-text mt-4 text-text-muted">
                    A platform for sharing research findings, best practices, and
                    innovative ideas among academic and professional communities.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    variants={itemVariants}
                    className="rounded-2xl border border-border bg-background p-8 text-center"
                >
                    <h3 className="heading-3 text-text-primary">
                    Regional Collaboration
                    </h3>
                    <p className="body-text mt-4 text-text-muted">
                    Encouraging cross-country partnerships to address shared
                    challenges in education, research, and development.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    variants={itemVariants}
                    className="rounded-2xl border border-border bg-background p-8 text-center"
                >
                    <h3 className="heading-3 text-text-primary">
                    Sustainable Impact
                    </h3>
                    <p className="body-text mt-4 text-text-muted">
                    Supporting long-term research networks and collaborative practices
                    that contribute to sustainable regional growth.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
}
