import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./Presentations";

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