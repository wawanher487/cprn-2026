// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function BriefProgramme() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const programmes = [
//     {
//       label: "DAY 1 TUESDAY (AM), 16 JUNE 2026",
//       sessions: [
//         {
//           time: "08:30 – 10:00",
//           title: "Opening Ceremony",
//           details: [
//             "Indonesia Raya and SEAMEO Colors",
//             "Committee Report by the Director of SEAMEO CECCEP",
//             "Welcoming Remarks from the Director of the SEAMEO Secretariat",
//             "Welcoming and Opening Remarks from Indonesia Ministry of Primary and Secondary Education"
//           ]
//         },
//         {
//           time: "10:00 – 10:30",
//           title: "Keynote Speech 1: Connecting Research, Policy, and Practice toward an Inclusive, Equitable, and Sustainable Future",
//         },
//         {
//           time: "10:30 – 12:00",
//           title: " Plenary Session 1: Transforming Education Systems for Equity: Tackling Structural Barriers to Access, Participation, and Learning",
//         },
//         {
//           time: "12:00 – 13:00",
//           title: "Lunch Break",
//         },
//         {
//           time: "13:00 – 14:30",
//           title: " Plenary Session 2: Science, Innovation, and Public Policy",
//         },
//         {
//           time: "14:30 – 15:00",
//           title: "Break",
//         },
//         {
//           time: "15:00 – 16:30",
//           title: " Parallel Sessions and Workshop",
//         },
//         {
//           time: "19:00 – 21:00",
//           title: "Gala Dinner and networking session",
//         },
//       ],
//     },
//     {
//       label: "DAY 2 WEDNESDAY (AM), 17 JUNE 2026",
//       sessions: [
//         {
//           time: "08:30 – 09:00",
//           title: "Arrival of delegates & registration",
//         },
//         {
//           time: "09:00 – 10:30",
//           title: " Plenary Session 3: Cultural Policies for Identity, Inclusion, and Peacebuilding ",
//         },
//         {
//           time: "10:30 – 12:00",
//           title: "Plenary Session 4: Education, Culture, and Science for sustainable economy and development",
//         },
//         {
//           time: "12:00 – 13:00",
//           title: "lunch break",
//         },
//         {
//           time: "13:00 – 15:00",
//           title: "Parallel Sessions and Workshop",
//         },
//       ],
//     },
//     {
//       label: "DAY 3 THURSDAY (AM), 18 JUNE 2026",
//       sessions: [
//         {
//           time: "08:30 – 10:00",
//           title: "Keynote speech 3",
//         },
//         {
//           time: "10:00 – 11:30",
//           title: "Presentation of wrap up results from parallel session",
//         },
//         {
//           time: "11:30 – 12:00",
//           title: "Closing Remarks",
//         },
//         {
//           time: "12:00 – 14:00",
//           title: "lunch break",
//         },
//         {
//           time: "14:00 – 15:00",
//           title: "Cultural visit",
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-background mt-24 mb-12">
//       {/* HERO */}
//       <div className="bg-secondary mx-3 mt-22 rounded-2xl border border-border py-20 text-center">
//         <h1 className="heading-1 text-white">Brief Programme</h1>
//       </div>
//       {/* CONTENT */}
//       <div className="mx-auto max-w-4xl pt-7 px-4 md:px-6">
//         <div className="space-y-4">
//           {programmes.map((day, index) => (
//             <div
//               key={day.label}
//               className="border-b border-border"
//             >
//               {/* HEADER */}
//               <button
//                 onClick={() =>
//                   setActiveIndex(activeIndex === index ? null : index)
//                 }
//                 className="flex w-full items-center justify-between py-4 text-left"
//               >
//                 <h3 className="font-semibold text-secondary">
//                   {day.label}
//                 </h3>
//                 <span className="text-xl text-secondary">
//                   {activeIndex === index ? "−" : "+"}
//                 </span>
//               </button>

//               {/* BODY */}
//               <motion.div
//                 initial={false}
//                 animate={{
//                   height: activeIndex === index ? "auto" : 0,
//                   opacity: activeIndex === index ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="overflow-hidden"
//               >
//                 <div className="pb-6 space-y-4">
//                   {day.sessions.map((session, i) => (
//                     <div key={i}>
//                       <p className="font-semibold text-secondary">
//                         {session.time}
//                       </p>
//                       <p className="body-text text-text-primary">
//                         {session.title}
//                       </p>

//                       {session.details && (
//                         <ul className="ml-5 mt-2 list-disc space-y-1 text-text-muted">
//                           {session.details.map((detail, j) => (
//                             <li key={j}>{detail}</li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// untuk sementara

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BriefProgramme() {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <section className="mt-24 mb-16">
      {/* ================= HERO ================= */}
      <div className="relative mx-3 overflow-hidden rounded-2xl bg-secondary">
        <div className="relative py-20 text-center">
          <h1 className="heading-1 text-white">Brief Programme</h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-4xl px-4 pt-10 md:px-6 space-y-4">
        <div className="rounded-xl border border-border bg-white">
          <button
            onClick={() => setOpenDay(openDay === 1 ? null : 1)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <h3 className="font-semibold text-secondary">ANNOUNCEMENT</h3>
            <span className="text-xl text-secondary">
              {openDay === 1 ? "−" : "+"}
            </span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openDay === 1 ? "auto" : 0,
              opacity: openDay === 1 ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="rounded-xl bg-gray-50 p-5 text-sm text-text-muted">
                <p>
                  The detailed schedule is currently finalized to ensure high
                  quality experience.
                </p>
                <p className="mt-2">
                  The program will intersperse discussion forums and networking
                  sessions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
