import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";

export default function Page() {
  return <>
     <HeroSection />
     <Experience />
      <Education />
      <FAQ />
      <Contact />
  </>
}