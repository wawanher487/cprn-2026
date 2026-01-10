import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/Home/About";
import Themes from "@/components/Home/Themes";
import WhyJoin from "@/components/Home/WhyJoin";
import SponsorBy from "@/components/Sponsor/SponsorBy";
import Footer from "@/components/Footer";
// import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* content */}
        <Hero />
        <About />
        <Themes />
        <WhyJoin />
        {/* <Testimonials/> */}
        <SponsorBy />
      </main>
      <Footer />
    </>
  );
}
