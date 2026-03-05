import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./BriefProgramme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brief Programme | CPRN 2026 International Conference by SEAMEO CECCEP",
  description:
    "Brief programme of CPRN 2026 including keynote sessions, plenary discussions, workshops, and networking agenda.",
  keywords: [
    "CPRN 2026 Brief Programme",
    "CPRN 2026 Conference Schedule",
    "CPRN 2026 Keynote Sessions",
    "CPRN 2026 Plenary Discussions",
    "CPRN 2026 Workshops",
    "CPRN 2026 Networking Agenda",
  ]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* content */}
        <Content />
      </main>
      <Footer/>
    </>
  );
}
