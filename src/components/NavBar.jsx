import React, { useRef } from "react";

function Navbar({ projectsRef, timelineRef, contactRef }){
    
    const navBarRef = useRef(null);
    const scrollToRef = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop - navBarRef.current.offsetHeight,
          behavior: 'smooth',
        });
      };
return (
  <nav  className="z-20 hidden sm:block fixed w-full dark:bg-stone-900 border-b-2 border-gray-200 dark:border-gray-700 bg-white bg-opacity-95 dark:bg-opacity-95">
  <div ref = {navBarRef}className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToRef(projectsRef)}
              className="ml-4 text-white font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToRef(timelineRef)}
              className="ml-4 text-white font-medium"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToRef(contactRef)}
              className="ml-4 text-white font-medium"
            >
              Contact Me
            </button>
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;