import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Themes from "@/components/Themes";
import WhyJoin from "@/components/WhyJoin";
import SponsorBy from "@/components/Sponsor/SponsorBy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* content */}
        <Hero />
        <About />
        <Themes/>
        <WhyJoin/>
        <SponsorBy/>
      </main>
      <Footer/>
    </>
  );
}
