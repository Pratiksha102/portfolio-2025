import Contact from "./components/Contact";
import Education from "./components/CaseStudies";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";

export default function Page() {
  return <>
     <HeroSection />
     <Experience />
      <Projects />
      {/* <CaseStudies/> */}
      <Contact />
  </>
}