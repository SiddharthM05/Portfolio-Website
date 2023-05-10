import React, { useState, useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { download } from "../data/svg";

function Navbar({ projectsRef, timelineRef, contactRef }) {
  const [isMenuOpen, SetIsMenuOpen] = useState(null);
  const navBarRef = useRef(null);
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - navBarRef.current.offsetHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <nav className=" z-20 hidden md:block fixed w-full dark:bg-stone-900 border-b-2 border-gray-200 dark:border-gray-700 bg-white bg-opacity-95 dark:bg-opacity-95">
        <div ref={navBarRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DarkModeToggle position="fixed"></DarkModeToggle>
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

              <button className="fixed p-2 z-10 right-24 top-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                {download}
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" md:hidden z-20 flex fixed w-full h-16  dark:bg-stone-900 border-b-2 border-gray-200 dark:border-gray-700 bg-white bg-opacity-95 dark:bg-opacity-95">
        <button
          className={`${
            isMenuOpen && "open"
          } rounded-full px-4 py-2 focus:ouline-none hamburger`}
          onClick={() => {
            SetIsMenuOpen((open) => !open);
          }}
        >
          <span className="hamburger-top bg-stone-900 dark:bg-white"></span>
          <span className="hamburger-middle bg-stone-900 dark:bg-white"></span>
          <span className="hamburger-bottom bg-stone-900 dark:bg-white"></span>
        </button>

        <div class="md:hidden">
          <DarkModeToggle position="fixed"></DarkModeToggle>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            }  absolute  flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-stone-800 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <div className="flex flex-col items-center">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  SetIsMenuOpen(false);
                }}
                className="text-white font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToRef(projectsRef);
                  SetIsMenuOpen(false);
                }}
                className="ml-4 text-white font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  scrollToRef(timelineRef);
                  SetIsMenuOpen(false);
                }}
                className="ml-4 text-white font-medium"
              >
                Timeline
              </button>
              <button
                onClick={() => {
                  scrollToRef(contactRef);
                  SetIsMenuOpen(false);
                }}
                className="ml-4 text-white font-medium"
              >
                Contact Me
              </button>

              <button className="p-2 z-10 right-24 top-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                {download}
                DownloadCV
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
