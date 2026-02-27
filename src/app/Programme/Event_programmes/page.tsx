import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./EventProgrammes";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Event Programmes | CPRN 2026 International Conference by SEAMEO CECCEP",
    description: "Official event programmes of CPRN 2026 International Summit, including opening, closing, gala dinner, and full conference programmes.",
}

export default function EventProgrammesPage() {
    return (
        <>
            <Navbar/>
            <main>  
                {/* content */}
                <Content />
            </main>
            <Footer/>
        </>
    )
}