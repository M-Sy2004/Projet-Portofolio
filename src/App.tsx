import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
    </div>
  );
};
export default App
