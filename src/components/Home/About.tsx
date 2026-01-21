"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    
    <section className="relative bg-white py-20">
      <div id="about" className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Image LEFT */}
          <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="relative order-2 md:order-1">
            <Image
              src="/home/about.jpeg"
              alt="CPRN Summit 2026"
              width={720}
              height={720}
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
          
          {/* konten RIGHT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2"
            >
              {/* Header  */}
              <motion.p
                variants={itemVariants}
                className="text-xl font-semibold uppercase tracking-wide  text-secondary"
              >
                About the Summit
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="mt-2 text-3xl font-semibold leading-tight text-text-primary md:text-4xl"
              >
                What is CPRN Summit 2026?
              </motion.h2>
              
              {/* Accent line */}
              <div className="mt-4 h-1 w-16 bg-secondary"/>

              {/* Description */}
              <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-justify text-base leading-relaxed text-text-muted"
              >
                Southeast Asia’s cultural and social diversity is a defining strength of the region, yet persistent inequality continues to hinder inclusive and sustainable development. Marginalized groups face barriers in accessing quality education and essential services. The CPRN Summit 2026, themed{" "}
                <span className="font-semibold text-text-primary"> 
                  “Bridging Research, Policy, and Practice”
                </span>
                , seeks to strengthen cross-sector collaboration to generate practical
                solutions and measurable impact across Southeast Asia.
              </motion.p>

               {/* HIGHLIGHTS */}
              <motion.div
                variants={containerVariants}
                className="mt-2 grid grid-cols-3 gap-6"
              >
                {[
                  { title: "Research", desc: "Evidence-based insights" },
                  { title: "Policy", desc: "Informed decision-making" },
                  { title: "Practice", desc: "Real-world implementation" },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="mt-3 py-3 text-center group rounded-2xl border border-border bg-background text-center transition-all duration-300 ease-out hover:-translate-y-2"
                  >
                    <div className="mx-auto w-10 rounded-full bg-secondary/10" />
                    <h4 className="font-semibold text-secondary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-text-muted">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
