"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const baseClass = "border px-4 py-2 rounded-lg cursor-pointer transition";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const getButtonClass = () => {
    if (!isMounted) {
      return baseClass;
    }
    return `${baseClass} ${theme === "dark" ? "hover:bg-gray-700 hover:text-white" : "hover:bg-gray-200 hover:text-black"}`;
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