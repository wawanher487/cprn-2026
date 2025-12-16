import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Themes from "@/components/Themes";
import WhyJoin from "@/components/WhyJoin";

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
      </main>
    </>
  );
}
