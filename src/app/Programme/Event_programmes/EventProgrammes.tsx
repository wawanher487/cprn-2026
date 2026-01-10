// import Link from "next/link";
// import { Download } from "lucide-react";

// const programmes = [
//   {
//     title: "Opening Programme",
//     file: "/brosur/opening-programme.pdf",
//   },
//   {
//     title: "Closing Programme",
//     file: "/brosur/closing-programme.pdf",
//   },
//   {
//     title: "Full Programme",
//     file: "/brosur/full-programme.pdf",
//   },
//   {
//     title: "Gala Dinner Programme",
//     file: "/brosur/dinner-programme.pdf",
//   },
// ];

// export default function EventProgrammes() {
//   return (
//     <section className="bg-background mt-24 mb-16">
//       {/* HERO */}
//       <div className="bg-secondary mx-3 rounded-2xl py-16 text-center">
//         <span className="inline-block px-4 py-1 bg-white text-secondary rounded-full font-medium mb-4">
//           CPRN 2026
//         </span>
//         <h1 className="heading-1 text-white">Event Programmes</h1>
//         <p className="body-text text-white mt-2">
//           Download the official programme documents
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="mx-auto max-w-3xl mt-10 px-4">
//         <ul className="space-y-5">
//           {programmes.map((item) => (
//             <li key={item.title}>
//               <Link
//                 href={item.file}
//                 download
//                 target="_blank"
//                 className="group flex items-center justify-between rounded-xl border border-border bg-white px-6 py-4 transition hover:shadow-md"
//               >
//                 {/* TITLE */}
//                 <span className="text-lg font-medium text-text-primary group-hover:text-secondary">
//                   {item.title}
//                 </span>

//                 {/* ACTION */}
//                 <span className="flex items-center gap-2 text-sm font-medium text-secondary">
//                   Download
//                   <Download className="h-4 w-4" />
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* NOTE */}
//         <p className="mt-8 text-sm text-text-muted">
//           *Programme details are subject to change.
//         </p>
//       </div>
//     </section>
//   );
// }

// untuk sementara

import { Clock } from "lucide-react";

const programmes = [
  { title: "Opening Programme" },
  { title: "Closing Programme" },
  { title: "Full Programme" },
  { title: "Gala Dinner Programme" },
];

export default function EventProgrammes() {
  return (
    <section className="bg-background mt-24 mb-16">
      {/* HERO */}
      <div className="bg-secondary mx-3 rounded-2xl py-16 text-center">
        <span className="inline-block px-4 py-1 bg-white text-secondary rounded-full font-medium mb-4">
          CPRN 2026
        </span>
        <h1 className="heading-1 text-white">Event Programmes</h1>
        <p className="body-text text-white mt-2">
          Programme details will be available soon
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-3xl mt-10 px-4">
        <ul className="space-y-5">
          {programmes.map((item) => (
            <li
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-border bg-white px-6 py-4"
            >
              <span className="text-lg font-medium text-text-primary">
                {item.title}
              </span>

              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock className="h-4 w-4" />
                Coming Soon
              </span>
            </li>
          ))}
        </ul>

        {/* INFO BOX */}
        <div className="mt-8 rounded-xl bg-gray-50 p-6 text-sm text-text-muted">
          <p>
            The detailed programme is currently being finalized to ensure a
            high-quality experience.
          </p>
          <p className="mt-2">
            The event will include keynote sessions, panel discussions,
            networking opportunities, and cultural activities.
          </p>
        </div>
      </div>
    </section>
  );
}
