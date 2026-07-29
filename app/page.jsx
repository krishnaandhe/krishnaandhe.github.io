import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Training from "@/components/Training";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import DigitalTransformation from "@/components/DigitalTransformation";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Credentials />
        <Training />
        <DigitalTransformation />  
        <Testimonials />
        <Events />
        <Contact />
      </main>
    </>
  );
}
