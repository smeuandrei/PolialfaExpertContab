"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const baseClass = "px-4 py-2 rounded-lg font-semibold cursor-pointer transition";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const html = document.documentElement;
    
    // Fade out
    html.classList.add("theme-switching");
    
    // Change theme after fade-out starts
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      
      // Fade in after theme change has time to propagate
      setTimeout(() => {
        html.classList.remove("theme-switching");
        setIsTransitioning(false);
      }, 100);
    }, 150);
  };

  const getButtonClass = () => {
    if (!isMounted) {
      return `${baseClass} bg-white text-[#0a2279] border border-[#0a2279]`;
    }
    return `${baseClass} bg-white text-[#0a2279] border border-[#0a2279] hover:bg-blue-50 ${isTransitioning ? "opacity-50" : ""}`;
  };

  return (
    <button
      onClick={handleThemeChange}
      className={getButtonClass()}
      disabled={!isMounted || isTransitioning}
    >
      {isMounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
    </button>
  );
}