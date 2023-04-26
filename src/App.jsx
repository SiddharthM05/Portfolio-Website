import React, { useEffect, useState, useRef } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  const projectsRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        projectsRef={projectsRef}
        timelineRef={timelineRef}
        contactRef={contactRef}
      />

      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio ref={projectsRef} />
          <Skills/>
          <Timeline ref={timelineRef} />
          <Contact ref={contactRef} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
