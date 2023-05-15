import React, { useState, useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { download } from "../data/svg";

function Navbar({ projectsRef, timelineRef, contactRef }) {
  const [isMenuOpen, SetIsMenuOpen] = useState(null);
  const navBarRef = useRef(null);
  const scrollToRef = (ref,height) => {
    window.scrollTo({
      top: ref.current.offsetTop - navBarRef.current.offsetHeight-height,
      behavior: "smooth",
    });
  };
  return (
    <div>
      
      <nav className=" z-20 hidden md:block fixed w-full bg-stone-900 border-b-2  border-gray-700  bg-opacity-95">
        <div ref={navBarRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DarkModeToggle position="z-30 fixed"></DarkModeToggle>
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToRef(projectsRef,0)}
                className="ml-4 text-white font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToRef(timelineRef,0)}
                className="ml-4 text-white font-medium"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToRef(contactRef,0)}
                className="ml-4 text-white font-medium"
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
      <nav className=" md:hidden z-20 flex fixed w-full h-16  bg-stone-900 border-b-2  border-gray-700  bg-opacity-95 dark:bg-opacity-95">
      <DarkModeToggle position="z-30 fixed right-3"></DarkModeToggle>
        <button
          className={`${
            isMenuOpen && "open"
          } rounded-full px-4 mt-2 focus:ouline-none hamburger`}
          onClick={() => {
            SetIsMenuOpen((open) => !open);
          }}
          style={{ transform:"scale(1.3)" }}
        >
          <span className="hamburger-top bg-white"></span>
          <span className="hamburger-middle bg-white"></span>
          <span className="hamburger-bottom bg-white"></span>
        </button>

        <div class="md:hidden">
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            }  absolute  h-screen flex-col items-center   py-12 mt-16 space-y-6 font-bold bg-stone-900 w-full left-0 right-0 self-center drop-shadow-md`}
            
          >
            <div className=" flex flex-col items-center self-end px-6 py-1 pt-24 pb-4 divide-y w-screen opacity-90 bg-background">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  SetIsMenuOpen(false);
                }}
                className="text-white pb-5  pfont-medium  text-xl "
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToRef(projectsRef,50);
                  SetIsMenuOpen(false);
                }}
                className=" text-white py-5 font-medium text-xl "
              >
                Projects
              </button>
              <button
                onClick={() => {
                  scrollToRef(timelineRef,50);
                  SetIsMenuOpen(false);
                }}
                className="text-white py-5 font-medium text-xl "
              >
                Timeline
              </button>
              <button
                onClick={() => {
                  scrollToRef(contactRef,50);
                  SetIsMenuOpen(false);
                }}
                className=" text-white py-5 font-medium  text-xl "
              >
                Contact Me
              </button>
              <button className=" p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
