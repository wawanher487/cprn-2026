"use client";

import Image from "next/image";
import Link from "next/link";
import VisitorFlags from "./Visitor/VisitorFlag";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* GRID UTAMA */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* ===== BRANDING ===== */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo_navbar/logo_cprn_2026.png"
                alt="CPRN 2026 Logo"
                width={175}
                height={85}
                sizes="(max-width: 868px) 140px, 175px"
                className="w-35 lg:w-43.75 h-auto bg-white rounded-xl px-2"
                priority
              />
            </div>

            <p className="mt-4 max-w-xs body-text text-text-primary">
              SEAMEO Centre Policy Research Network
            </p>
          </div>

          {/* ===== CPRN ===== */}
          <div>
            <h4 className="heading-4 text-text-primary">CPRN</h4>
            <ul className="mt-4 space-y-2 text-small text-text-muted">
              <li>
                <Link href="/#about" className="hover:text-background">
                  About CPRN
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-background">
                  CPRN 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== PARTICIPANTS ===== */}
          <div>
            <h4 className="heading-4 text-text-primary">Participants</h4>
            <ul className="mt-4 space-y-2 text-small text-text-muted">
              <li>
                <Link href="/" className="hover:text-background">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-background">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-background">
                  Concept Notes
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-background">
                  Summit Fee
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== GET IN TOUCH ===== */}
          <div>
            <h4 className="heading-4 text-text-primary">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-small text-text-muted">
              <li>
                <p className="hover:text-background">Contact Us</p>
              </li>
              <li>
                <a
                  href="https://web.seameo-ceccep.org"
                  target="_blank"
                  className="hover:text-background"
                >
                  SEAMEO CECCEP
                </a>
              </li>
            </ul>
          </div>

          {/* visitor country stats */}
          <VisitorFlags />
        </div>
      </div>
    </footer>
  );
}
