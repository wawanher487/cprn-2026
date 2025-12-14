"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-border">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_cprn.png"
            alt="CPRN 2026 Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <ul className="flex items-center gap-8 text-secondary font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Programme group*/}
          <li className="relative group">
            <span className="cursor-pointer">Programme ▾</span>
            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/venue/programme_overview"
                className="block px-4 py-2 hover:bg-surface"
              >
                Brief Programme
              </Link>
              <Link
                href="/venue/event_programmes"
                className="block px-4 py-2 hover:bg-surface"
              >
                Event Programmes
              </Link>
              <Link
                href="/venue/important_dates"
                className="block px-4 py-2 hover:bg-surface"
              >
                Important Dates
              </Link>
              <Link
                href="/venue/summit_fees"
                className="block px-4 py-2 hover:bg-surface"
              >
                Summit Fees
              </Link>
            </div>
          </li>
          <li>
            <Link href="/themes">Themes</Link>
          </li>

          {/* Venue group*/}
          <li className="relative group">
            <span className="cursor-pointer">Venue ▾</span>
            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/venue/venue_information"
                className="block px-4 py-2 hover:bg-surface"
              >
                Venue Information
              </Link>
              <Link
                href="/venue/accommodation"
                className="block px-4 py-2 hover:bg-surface"
              >
                Accommodation
              </Link>
            </div>
          </li>

          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>

          {/* DOWNLOAD  group*/}
          <li className="relative group">
            <span className="cursor-pointer">Download ▾</span>

            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/download/Presentation_Slides"
                className="block px-4 py-2 hover:bg-surface"
              >
                Presentasion Slides
              </Link>
              <Link
                href="/download/Abstract_Guideline_Template"
                className="block px-4 py-2 hover:bg-surface"
              >
                Abstract Guideline & Template
              </Link>
              <Link
                href="/download/Concept_Notes"
                className="block px-4 py-2 hover:bg-surface"
              >
                Concept Notes
              </Link>
              <Link
                href="/download/CPRN_Poster"
                className="block px-4 py-2 hover:bg-surface"
              >
                CPRN Poster
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
