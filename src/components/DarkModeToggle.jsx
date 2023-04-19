import React, { useEffect, useState } from "react";
import { sun, moon } from "../data/svg";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-10 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? sun : moon}
      </button>
    </div>
  );
};

export default DarkModeToggle;
