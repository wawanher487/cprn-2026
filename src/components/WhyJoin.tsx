"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WhyJoin() {
const [activeIndex, setActiveIndex] = useState<number | null>(0);

const reasons = [
    {
      title: "Exclusive Networking",
      content:
        "The CPRN Summit 2025 offers unparalleled networking opportunities with Southeast Asia’s leading education and policy experts. Expand your professional network by connecting with policymakers, researchers, educators, and industry leaders from across Southeast Asia. The summit provides a unique platform for meaningful collaborations, potential funding opportunities, and strategic partnerships that can drive impactful projects in education, science, and cultural development.",
    },
    {
      title: "Influence Policy & Research",
      content:
        "Be at the forefront of policy discussions that shape the future of Southeast Asia’s education, science, and cultural sectors. Contribute to research-backed policy recommendations and gain insights into the latest trends, government priorities, and emerging challenges that influence regional and national decision-making.",
    },
    {
      title: "Cutting-Edge Insights",
      content:
        "Gain exclusive access to expert-led keynote speeches, thought-provoking panel discussions, and interactive workshops featuring renowned scholars and industry pioneers. Stay ahead with the latest research findings, innovative methodologies, and data-driven solutions addressing pressing issues in education, STEM, and cultural preservation.",
    },
    {
      title: "Professional Growth & Visibility",
      content:
        "Showcase your research, ideas, and expertise on a regional platform recognized by policymakers and institutions. Elevate your professional profile by presenting groundbreaking studies, publishing findings, and engaging with a like-minded community dedicated to knowledge advancement and policy impact.",
    },
];

return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <h2 className="heading-2 mb-6 md:mb-10 text-secondary text-center md:text-left">
            Why Join CPRN 2026?
        </h2>

        <div className="space-y-4">
            {reasons.map((item, index) => (
            <div
                key={index}
                className={`rounded-xl md:rounded-2xl px-4 py-1 md:px-8 transition-colors duration-300 ${
                activeIndex === index
                    ? "bg-primary text-white"
                    : "border border-border"
                }`}
            >
                <button
                onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-start justify-between gap-4 py-4 md:py-6"
                >
                <h3 className="font-heading font-semibold text-base md:text-lg lg:text-lg">
                    {String(index + 1).padStart(2, "0")} – {item.title}
                </h3>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-border text-lg md:text-2xl">
                    {activeIndex === index ? "×" : "+"}
                </span>
                </button>

                <motion.div
                initial={false}
                animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
                >
                <div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed">
                    {item.content}
                </div>
                </motion.div>
            </div>
            ))}
        </div>
    </section>
);
}
