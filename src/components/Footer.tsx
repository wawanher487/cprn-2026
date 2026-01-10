"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* GRID UTAMA */}
        <div className="grid gap-10 md:grid-cols-4">
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

            <p className="mt-4 max-w-xs body-text text-text-muted">
              SEAMEO Centre Policy Research Network
            </p>
          </div>

          {/* ===== CPRN ===== */}
          <div>
            <h4 className="heading-4 text-text-primary">CPRN</h4>
            <ul className="mt-4 space-y-2 text-small text-text-muted">
              <li>
                <Link href="#about" className="hover:text-primary">
                  About CPRN
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
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
                <Link href="/" className="hover:text-primary">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Concept Notes
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
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
                <p className="hover:text-primary">Contact Us</p>
              </li>
              <li>
                <a
                  href="https://web.seameo-ceccep.org"
                  target="_blank"
                  className="hover:text-primary"
                >
                  SEAMEO CECCEP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
