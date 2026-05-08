"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white transition"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}