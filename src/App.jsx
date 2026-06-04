import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Education />
        <Experience />
        <Stats />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;