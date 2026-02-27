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
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-transform duration-300 ease-in-out ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-16 lg:h-20  max-w-6xl items-center justify-between px-6 lg:px-0">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="border-b-3 border-green-600 py-1 pb-0.5">
            <Image
              src="/logo_navbar/logo_cprn.png"
              alt="CPRN 2026 Logo"
              width={175}
              height={85}
              sizes="(max-width: 868px) 140px, 175px"
              className="w-35 lg:w-43.75 h-auto bg-white rounded-xl px-2"
              priority
            />
          </div>
        </Link>

        {/* Desktop MENU */}
        <ul className="hidden lg:flex items-center gap-6 text-text-primary font-medium">
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
                href="/programme/brief-programme"
                className="block px-4 py-2 hover:bg-surface"
              >
                Brief Programme
              </Link>
              <Link
                href="/programme/event-programmes"
                className="block px-4 py-2 hover:bg-surface"
              >
                Event Programmes
              </Link>
              <Link
                href="/programme/important-dates"
                className="block px-4 py-2 hover:bg-surface"
              >
                Important Dates
              </Link>
              <Link
                href="/programme/important-dates#summit-fee"
                className="block px-4 py-2 hover:bg-surface"
              >
                Summit Fees
              </Link>
            </div>
          </li>
          <li>
            <Link href="/#themes">Themes</Link>
          </li>

          {/* Venue group*/}
          <li className="relative group">
            <span className="cursor-pointer">Venue ▾</span>
            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/programme/important-dates#summit-venue"
                className="block px-4 py-2 hover:bg-surface"
              >
                Venue Information
              </Link>
              <Link
                href="/programme/important-dates#accommodation"
                className="block px-4 py-2 hover:bg-surface"
              >
                Accommodation
              </Link>
            </div>
          </li>

          {/* <li>
            <Link href="/#testimonials">Testimonials</Link>
          </li> */}

          {/* DOWNLOAD  group*/}
          <li className="relative group">
            <span className="cursor-pointer">Download ▾</span>

            <div className="absolute left-0 top-full mt-3 w-44 rounded-xl border border-border bg-white shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              <Link
                href="/presentations"
                className="block px-4 py-2 hover:bg-surface"
              >
                Presentasion Slides
              </Link>
              {/* <Link
                href="/Download/Call-For-Papers-New-Extension-Submission-Dates-10May2025.pdf"
                className="block px-4 py-2 hover:bg-surface"
              >
                Abstract Guideline & Template
              </Link>
              <Link
                href="/Download/CPRN-2025-Concept-Note.pdf"
                className="block px-4 py-2 hover:bg-surface"
              >
                Concept Notes
              </Link>
              <Link
                href="/Download/Call-For-Papers-New-Extension-Submission-Dates-10May2025.pdf"
                className="block px-4 py-2 hover:bg-surface"
              >
                CPRN Poster
              </Link> */}
            </div>
          </li>

          <li>
            <Link 
            href="https://interconf.org/2026/cprn/kfz/" 
            target="_blank"
            className="rounded-xl bg-secondary px-3 py-2 font-semibold text-white transition hover:bg-accent-hover"
            >Login</Link>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-text-primary heading-3"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`lg:hidden overflow-hidden bg-background border-t border-border transition-all duration-300 ease-out ${
            menuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 space-y-4 text-text-primary font-medium">
            <li>
              <Link 
              href="https://interconf.org/2026/cprn/kfz/" 
              target="_blank"
              >Login</Link>
            </li>
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
                <ul className="ml-4 mt-2 space-y-2 text-small text-text-primary">
                  <li>
                    <Link href="/programme/brief-programme">
                      Brief Programme
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/event-programmes">
                      Event Programmes
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/important-dates">
                      Important Dates
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/important-dates#summit-fee">
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
                <ul className="ml-4 mt-2 space-y-2 text-small text-text-primary">
                  <li>
                    <Link href="/programme/important-dates#summit-venue">
                      Venue Information
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/important-dates#accommodation">
                      Accommodation
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* <li>
              <Link href="/#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </Link>
            </li> */}

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
                <ul className="ml-4 mt-2 space-y-2 text-small text-text-primary">
                  <li>
                    <Link href="/presentations">Presentation Slides</Link>
                  </li>
                  {/* <li>
                    <Link href="/Download/Call-For-Papers-New-Extension-Submission-Dates-10May2025.pdf">
                      Abstract Guideline & Template
                    </Link>
                  </li>
                  <li>
                    <Link href="/Download/CPRN-2025-Concept-Note.pdf">
                      Concept Notes
                    </Link>
                  </li>
                  <li>
                    <Link href="/Download/Call-For-Papers-New-Extension-Submission-Dates-10May2025.pdf">
                      CPRN Poster
                    </Link>
                  </li> */}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
