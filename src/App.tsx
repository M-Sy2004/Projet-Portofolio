import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Formation />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default App
