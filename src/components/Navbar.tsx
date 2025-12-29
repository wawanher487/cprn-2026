"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header
      className={` fixed top-0 z-50 w-full bg-background border-b border-border transition-transform duration-300 ease-in-out ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo_cprn.png"
            alt="CPRN 2026 Logo"
            width={175}
            height={40}
            priority
          />
        </Link>

        {/* Desktop MENU */}
        <ul className="hidden md:flex items-center gap-8 text-secondary font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          {/* Programme group*/}
          <li className="relative group">
            <span className="cursor-pointer">Programme ▾</span>
            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/Programme/Brief_programme"
                className="block px-4 py-2 hover:bg-surface"
              >
                Brief Programme
              </Link>
              <Link
                href="/Programme/Event_programmes"
                className="block px-4 py-2 hover:bg-surface"
              >
                Event Programmes
              </Link>
              <Link
                href="/Programme/Important_dates"
                className="block px-4 py-2 hover:bg-surface"
              >
                Important Dates
              </Link>
              <Link
                href="/Programme/Important_dates#summit-fee"
                className="block px-4 py-2 hover:bg-surface"
              >
                Summit Fees
              </Link>
            </div>
          </li>
          <li>
            <Link href="#themes">Themes</Link>
          </li>

          {/* Venue group*/}
          <li className="relative group">
            <span className="cursor-pointer">Venue ▾</span>
            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/Venue/Venue_information"
                className="block px-4 py-2 hover:bg-surface"
              >
                Venue Information
              </Link>
              <Link
                href="/Venue/Accommodation"
                className="block px-4 py-2 hover:bg-surface"
              >
                Accommodation
              </Link>
            </div>
          </li>

          <li>
            <Link href="/Testimonials">Testimonials</Link>
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

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-secondary heading-3"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden overflow-hidden bg-background border-t border-border transition-all duration-300 ease-out ${
            menuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 space-y-4 text-secondary font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleSubmenu("programme")}
                className="flex w-full items-center justify-between font-semibold"
              >
                Programme
                <span className="text-small">
                  {openSubmenu === "programme" ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openSubmenu === "programme"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-2 space-y-2 text-small text-secondary">
                  <li>
                    <Link href="/Programme/Brief_programme">
                      Brief Programme
                    </Link>
                  </li>
                  <li>
                    <Link href="/Programme/Event_programmes">
                      Event Programmes
                    </Link>
                  </li>
                  <li>
                    <Link href="/Programme/Important_dates">
                      Important Dates
                    </Link>
                  </li>
                  <li>
                    <Link href="/Programme/Important_dates#summit-fee">
                      Summit Fees
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="#themes" onClick={() => setMenuOpen(false)}>
                Themes
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleSubmenu("venue")}
                className="flex w-full items-center justify-between font-semibold"
              >
                Venue
                <span className="text-small">
                  {openSubmenu === "venue" ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openSubmenu === "venue"
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-2 space-y-2 text-small text-secondary">
                  <li>
                    <Link href="/venue/venue_information">
                      Venue Information
                    </Link>
                  </li>
                  <li>
                    <Link href="/venue/accommodation">Accommodation</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleSubmenu("download")}
                className="flex w-full items-center justify-between font-semibold"
              >
                Download
                <span>{openSubmenu === "download" ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openSubmenu === "download"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-2 space-y-2 text-small text-secondary">
                  <li>
                    <Link href="/download/Presentation_Slides">
                      Presentation Slides
                    </Link>
                  </li>
                  <li>
                    <Link href="/download/Abstract_Guideline_Template">
                      Abstract Guideline & Template
                    </Link>
                  </li>
                  <li>
                    <Link href="/download/Concept_Notes">Concept Notes</Link>
                  </li>
                  <li>
                    <Link href="/download/CPRN_Poster">CPRN Poster</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
