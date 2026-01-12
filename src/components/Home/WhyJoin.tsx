"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WhyJoin() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const reasons = [
    {
      title: "Drive Impact through Equity & Sustainability",
      content:
        "Join the CPRN Summit 2026 to contribute to advancing intersectional equity and sustainable green human capital development in Southeast Asia. Engage in critical discussions on localizing the SDGs across education, science, and culture, ensuring that research and policy address the region’s diverse social, cultural, and economic contexts.",
    },
    {
      title: "Turn Research into Actionable Policy",
      content:
        "Strengthen the link between research, policy, and practice through participatory and community-based approaches. The summit provides a platform where evidence-based research is transformed into actionable insights for policymakers, practitioners, and institutions working on real-world challenges.",
    },
    {
      title: "Collaborate Across Education, Science, and Culture",
      content:
        "Be part of a multi-stakeholder platform that brings together researchers, policymakers, and practitioners across sectors. The CPRN Summit fosters inclusive dialogue and cross-pillar collaboration, enabling integrated solutions at the intersection of education, science, and culture.",
    },
    {
      title: "Learn Best Practices & Grow Your Network",
      content:
        "Exchange best practices and case studies from across the SEAMEO region, including the use of technology for personalized learning and accessibility. Expand your professional network, initiate collaborative partnerships, and explore joint research opportunities with leading institutions and member centers.",
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
                ? "bg-secondary text-white"
                : "border border-border"
            }`}
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="flex w-full items-start justify-between gap-4 py-4 md:py-6"
            >
              <h3 className="font-heading text-justify font-semibold text-base md:text-lg lg:text-lg">
                {String(index + 1).padStart(2)+ "."}  {item.title}
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
