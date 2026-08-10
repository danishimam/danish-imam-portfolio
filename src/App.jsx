import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="grain min-h-screen">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to work
      </a>

      <Nav />

      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
