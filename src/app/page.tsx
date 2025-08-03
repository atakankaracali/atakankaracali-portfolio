import Hero from "components/Hero";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";
import Background from "components/Background";
import Experience from "components/Experience";
import Certifications from "components/Certifications";
import "./styles/globals.css"

export default function Home() {
  return (
    <div>
      <Background />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
