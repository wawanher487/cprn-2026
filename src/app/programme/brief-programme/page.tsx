import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./BriefProgramme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brief Programme | CPRN 2026",
  description:
    "Brief programme of CPRN 2026 including keynote sessions, plenary discussions, workshops, and networking agenda.",
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
