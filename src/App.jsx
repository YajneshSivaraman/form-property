
/* Import each page section separately. */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Approach from "./components/Approach";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* Compose the FORM / PROPERTY homepage. */
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Approach />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
