"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BriefProgramme() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const programmes = [
    {
      label: "DAY 1 THURSDAY (AM), 03 JULY 2025",
      sessions: [
        {
          time: "08:00 – 08:30",
          title: "Arrival of delegates & registration",
        },
        {
          time: "08:30 – 09:30",
          title: "Group Photo",
          details: [
            "Brunei Darussalam National Anthem",
            "SEAMEO Colours",
            "Recital of Doa",
            "Welcoming Remarks by SEAMEO VOCTECH Centre Director",
            "Speech by SEAMEO Secretariat Director",
            "Speech by the Guest of Honour",
            "Launching of the SEAMEO CPRN Summit 2025 Video",
          ],
        },
        {
          time: "09:30 – 09:50",
          title: "Keynote Speech 1 (Education sub-theme)",
        },
        {
          time: "09:50 – 10:30",
          title: "Morning Break",
        },
      ],
    },
    {
      label: "DAY 2 THURSDAY (AM), 04 JULY 2025",
      sessions: [
        {
          time: "08:00 – 08:30",
          title: "Arrival of delegates & registration",
        },
        {
          time: "08:30 – 09:30",
          title: "Group Photo",
          details: [
            "Brunei Darussalam National Anthem",
            "SEAMEO Colours",
            "Recital of Doa",
            "Welcoming Remarks by SEAMEO VOCTECH Centre Director",
            "Speech by SEAMEO Secretariat Director",
            "Speech by the Guest of Honour",
            "Launching of the SEAMEO CPRN Summit 2025 Video",
          ],
        },
        {
          time: "09:30 – 09:50",
          title: "Keynote Speech 1 (Education sub-theme)",
        },
        {
          time: "09:50 – 10:30",
          title: "Morning Break",
        },
      ],
    },
  ];

  return (
    <section className="bg-background mt-15">
      {/* HERO */}
      <div className="bg-secondary border border-border py-24 text-center">
        <h1 className="heading-1 text-white">Brief Programme</h1>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-4">
          {programmes.map((day, index) => (
            <div
              key={day.label}
              className="border-b border-border"
            >
              {/* HEADER */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <h3 className="font-semibold text-secondary">
                  {day.label}
                </h3>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* BODY */}
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6 space-y-4">
                  {day.sessions.map((session, i) => (
                    <div key={i}>
                      <p className="font-semibold text-secondary">
                        {session.time}
                      </p>
                      <p className="body-text text-text-primary">
                        {session.title}
                      </p>

                      {session.details && (
                        <ul className="ml-5 mt-2 list-disc space-y-1 text-text-muted">
                          {session.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
