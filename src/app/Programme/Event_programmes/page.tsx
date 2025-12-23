import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./EventProgrammes";

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