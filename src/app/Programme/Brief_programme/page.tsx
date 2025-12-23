import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "./BriefProgramme";

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
