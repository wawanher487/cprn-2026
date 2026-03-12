import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SidebarFilters } from "@/components/SidebarFilters";
import Deadlines from "./sections/deadlinesPage/Deadlines";
import SummitFee from "./sections/summitFeePage/SummitFee";
import Accommodation from "./sections/Accommodation";
import SummitVenue from "./sections/SummitVenue";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Important Dates, Fees & Accommodation | CPRN 2026 International Conference by SEAMEO CECCEP",
  description:
    "Important dates, fees, and accommodation information for CPRN 2026 International Conference organized by SEAMEO CECCEP.",
  keywords: [
    "CPRN 2026 Important Dates",
    "CPRN 2026 Registration Deadlines",
    "CPRN 2026 Conference Fees",
    "CPRN 2026 Accommodation",
    "CPRN 2026 Summit Venue",
  ]
}


export default function ImportantDatesPage() {
  return (
    <>
      <Navbar />
        <div className="bg-secondary mx-3 mt-24 rounded-2xl py-16 text-center">
          <span className="inline-block px-4 py-1 bg-white text-secondary rounded-full font-medium mb-4">
            CPRN 2026
          </span>
          <h1 className="heading-1 text-white">Event Details</h1>
          <p className="body-text text-white mt-2">
            All you need to know about important dates, fees and accommodation
          </p>
        </div>
        
        {/* Layout */}
        <main className="max-w-7xl mx-auto flex gap-25 px-6 py-16">
          <SidebarFilters />
          <div className="flex-1 space-y-15">
            <Deadlines />
            <SummitFee />
            <Accommodation />
            <SummitVenue />
          </div>
        </main>
      <Footer />
    </>
  );
}
