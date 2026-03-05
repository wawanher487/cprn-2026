import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./Presentations";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Presentations | CPRN 2026 International Conference by SEAMEO CECCEP",
    description:
        "Presentations at CPRN 2026 International Conference by SEAMEO CECCEP, including keynote speeches, plenary sessions, workshops, and panel discussions.",
    keywords: [
        "CPRN 2026 Presentations",
        "CPRN 2026 Conference Presentations",
        "CPRN 2026 Keynote Speeches",
        "CPRN 2026 Plenary Sessions",
        "CPRN 2026 Workshops",
        "CPRN 2026 Panel Discussions",
    ]
};

export default function PresentationsPage() {
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