import Link from "next/link";
import { Download } from "lucide-react";

const programmes = [
  {
    title: "Opening Programme",
    file: "/brosur/opening-programme.pdf",
  },
  {
    title: "Closing Programme",
    file: "/brosur/closing-programme.pdf",
  },
  {
    title: "Full Programme",
    file: "/brosur/full-programme.pdf",
  },
  {
    title: "Dinner Programme",
    file: "/brosur/dinner-programme.pdf",
  },
];

export default function EventProgrammes() {
  return (
    <section className="bg-background mt-24 mb-12">
      {/* HERO */}
      <div className="bg-secondary mx-3 mt-22 rounded-2xl border border-border py-15 text-center">
         <span className="inline-block px-4 py-1 bg-white text-secondary rounded-full font-medium mb-4">
          CPRN 2026
        </span>
        <h1 className="heading-1 text-white">Event Details</h1>
        <p className="body-text text-white">
          All you need to know about two-days programmes (Downloadable)
        </p>
      </div>
      <div className="mx-auto max-w-3xl mt-7 px-4 md:px-6">
        {/* TITLE */}
        <h2 className="heading-2 text-secondary">Event Programmes</h2>
        {/* LIST */}
        <ul className="mt-8 space-y-6">
          {programmes.map((item) => (
            <li key={item.title}>
              <Link
                href={item.file}
                download
                className="group flex items-center gap-4"
              >
                {/* DOT */}
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary transition group-hover:scale-110" />

                {/* TEXT */}
                <span className="flex text-xl items-center gap-2 text-text-primary transition group-hover:text-text-muted">
                  {item.title}
                  <Download className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
