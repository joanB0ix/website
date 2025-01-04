"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 transition"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-400" data-testid="sun-icon" />
      ) : (
        <MoonIcon className="h-6 w-6 text-blue-500" data-testid="moon-icon" />
      )}
    </button>
  );
}
