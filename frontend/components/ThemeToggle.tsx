"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const baseClass = "px-4 py-2 rounded-lg font-semibold cursor-pointer transition";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const getButtonClass = () => {
    if (!isMounted) {
      return `${baseClass} bg-white text-[#0a2279] border border-[#0a2279]`;
    }
    return `${baseClass} bg-white text-[#0a2279] border border-[#0a2279] hover:bg-blue-50`;
  };

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className={getButtonClass()}
      disabled={!isMounted}
    >
      {isMounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
    </button>
  );
}