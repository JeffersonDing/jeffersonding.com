import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

import Activities from "./components/Activities";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 5, isArrowKeysEnabled: true });
  return (
    <>
      <div ref={scrollRef}>
        <Hero />
        <Intro />
        <Experiences />
        <Activities />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default App;
