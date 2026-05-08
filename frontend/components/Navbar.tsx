"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const baseClass = "border px-4 py-2 rounded-lg transition cursor-pointer";

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const isActive = (href: string) => {
    return isMounted && pathname === href;
  };

  const getLinkClass = (href: string) => {
    const active = isActive(href);
    
    if (!isMounted) {
      return baseClass;
    }
    
    if (active) {
      return `${baseClass} ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`;
    }
    
    return `${baseClass} ${theme === "dark" ? "hover:bg-gray-700 hover:text-white" : "hover:bg-gray-200 hover:text-black"}`;
  };

  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <h2 className="text-2xl font-bold">
        Polialfa Expert Contab
      </h2>

      <div className="flex items-center gap-4">
        <Link href="/" className={getLinkClass("/")}> Acasă</Link>
        <Link href="/despre-noi" className={getLinkClass("/despre-noi")}>Despre noi</Link>
        <Link href="/servicii" className={getLinkClass("/servicii")}>Servicii</Link>
        <Link href="/tarife" className={getLinkClass("/tarife")}>Tarife</Link>
        <Link href="/contact" className={getLinkClass("/contact")}>Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}