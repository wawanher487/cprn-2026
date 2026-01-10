import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SidebarFilters } from "@/components/SidebarFilters";
import Deadlines from "./sections/Deadlines";
// import SummitFee from "./sections/SummitFee";
// import Accommodation from "./sections/Accommodation";
import SummitVenue from "./sections/SummitVenue";

export default function ImportantDatesPage() {
  return (
    <>
      <Navbar />

      {/* Gradient Header */}
      <div className="bg-secondary mx-3 mt-24 rounded-2xl border border-border text-white text-center py-16 px-6">
        <span className="inline-block px-4 py-1 bg-white text-secondary rounded-full font-medium mb-4">
          CPRN 2026
        </span>
        <h1 className="heading-1">Event Details</h1>
        <p>
          All you need to know about important dates, fees and accommodation
        </p>
      </div>

      {/* Layout */}
      <main className="max-w-7xl mx-auto flex gap-25 px-6 py-16">
        <SidebarFilters />

        <div className="flex-1 space-y-15">
          <Deadlines />
          {/* <SummitFee /> */}
          {/* <Accommodation /> */}
          <SummitVenue />
        </div>
      </main>

      <Footer />
    </>
  );
}
