import AboutSection from "./components/homepage/about";
import AiAssistant from "./components/homepage/ai-assistant";
import ContactSection from "./components/homepage/contact";
import Credentials from "./components/homepage/credentials";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Highlights from "./components/homepage/highlights";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Credentials />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Highlights />
      <AiAssistant />
      <Education />
      <ContactSection />
    </>
  );
}
