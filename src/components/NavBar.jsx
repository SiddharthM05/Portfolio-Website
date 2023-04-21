import React, { useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { download } from "../data/svg";

function Navbar({ projectsRef, timelineRef, contactRef }) {
  const navBarRef = useRef(null);
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - navBarRef.current.offsetHeight,
      behavior: "smooth",
    });
  };
  return (
    <nav className=" z-20 hidden sm:block fixed w-full dark:bg-stone-900 border-b-2 border-gray-200 dark:border-gray-700 bg-white bg-opacity-95 dark:bg-opacity-95">
      <div ref={navBarRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DarkModeToggle></DarkModeToggle>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-white font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToRef(projectsRef)}
              className="ml-4 dark:text-white font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToRef(timelineRef)}
              className="ml-4 dark:text-white font-medium"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToRef(contactRef)}
              className="ml-4 dark:text-white font-medium"
            >
              Contact Me
            </button>

            <button class="fixed p-2 z-10 right-24 top-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              {download}
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
