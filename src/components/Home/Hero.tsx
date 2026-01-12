"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="pt-20 md:pt-0 relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-blue-50">
      {/* decorative soft accent */}

      <div className="mx-auto max-w-7xl px-6 py-2 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* TEXT LEFT */}
          <motion.div
            variants={containerVariants}
            initial={false}
            animate="show"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-sm font-medium text-green-700"
            >
              Organized by SEAMEO CECCEP
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="heading-1 max-w-xl leading-tight text-secondary text-3xl sm:text-4xl lg:text-5xl"
            >
              SEAMEO Centre Policy Research Network (CPRN) Summit 2026
            </motion.h1>

            {/* Location */}
            <motion.p
              variants={itemVariants}
              className="mt-3 text-lg font-semibold text-accent"
            >
              09–11 June 2026 | Jakarta, Indonesia
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl body-text text-text-primary"
            >
              “Bridging Research, Policy, and Practice: Pathways toward an
              Inclusive, Equitable, and Sustainable Futures”
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/"
                target="_blank"
                className="rounded-xl bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-accent-hover"
              >
                Register Now
              </a>

              <Link
                href="/Programme/Important_dates"
                className="rounded-xl border border-secondary px-6 py-3 font-semibold text-secondary transition hover:bg-accent-hover hover:text-white"
              >
                View Programme
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE RIGHT */}
          <motion.div
            variants={imageVariants}
            initial={false}
            animate="show"
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-orange-100/40 to-transparent"/>
            <Image
              src="/home/home_CPRN2025.jpg"
              alt="CPRN Summit Illustration"
              width={600}
              height={420}
              className="relative w-full rounded-2xl object-cover shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
