"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants : Variants = {
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

const imageVariants : Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface md:my-5">
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* TEXT Left */}
            <motion.div variants={containerVariants} initial="hidden" animate="show">
                {/* Subtitle */}
                <motion.span variants={itemVariants} className="inline-block rounded-full bg-surface py-1 text-body text-secondary">
                CPRN SUMMIT 2026
                </motion.span>

                {/* Heading */}
                <motion.h1 variants={itemVariants} className="heading-1 mt-6 text-text-primary">
                Collaborative Practices and Research Network Summit 2026
                </motion.h1>

                {/* Description */}
                <motion.p variants={itemVariants} className="body-text mt-6 text-text-muted">
                Bridging Research, Policy, and Practice: Pathways toward an Inclusive, Equitable, and Sustainable Futures
                </motion.p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                <Link
                    href="/registration"
                    className="rounded-xl bg-primary px-6 py-3 text-white transition hover:opacity-90"
                >
                    Register Now
                </Link>

                <Link
                    href="/Programme/Important_dates"
                    className="rounded-xl border border-border px-6 py-3 text-secondary transition hover:bg-surface"
                >
                    View Programme
                </Link>
                </div>
            </motion.div>

            {/* IMAGE AREA RIGHT */}
            <motion.div variants={imageVariants} initial="hidden" animate="show" className="relative">
                <Image
                src="/hero_image.jpeg"
                alt="CPRN Summit Illustration"
                width={600}
                height={420}
                className="w-full rounded-2xl object-cover"
                priority
                />
            </motion.div>

        </div>
    </div>
    </section>
);
}
