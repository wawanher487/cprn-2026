import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/Home/About";
import Themes from "@/components/Home/themes/Themes";
import WhyJoin from "@/components/Home/WhyJoin";
import SponsorBy from "@/components/Sponsor/SponsorBy";
import Footer from "@/components/Footer";
import VisitorTracker from "@/components/Visitor/VisitorTracker";
import { Metadata } from "next";
// import Testimonials from "@/components/Home/Testimonials";

export const metadata: Metadata = {
  title: "CPRN 2026 | International Conference by SEAMEO CECCEP",
  description:
    "Official website of CPRN 2026, an international conference organized by SEAMEO CECCEP. Find call for papers, submission guidelines, and important dates.",
  keywords: [
    "CPRN 2026",
    "CPRN 2026 SEAMEO CECCEP",
    "CPRN 2026 Conference",
    "CPRN 2026 International Conference",
    "CPRN 2026 International Summit",
    "CPRN 2026 International Conference by SEAMEO CECCEP",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main >
        {/* content */}
        <Hero />
        <About />
        <Themes />
        <WhyJoin />
        {/* <Testimonials/> */}
        <SponsorBy />
      </main>
      <VisitorTracker />
      <Footer />
    </>
  );
}
