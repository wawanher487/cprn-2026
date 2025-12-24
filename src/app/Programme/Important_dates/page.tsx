import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./ImportantDates";

export default function ImportantDates() {
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