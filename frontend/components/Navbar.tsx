"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const baseClass = "px-4 py-2 rounded-lg font-semibold transition cursor-pointer";

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

  const isDark = theme === 'dark';
  const navBg = isDark ? 'bg-gray-800' : 'bg-white';
  const navBorder = isDark ? 'border-gray-700' : 'border-gray-200';

  const getLinkClass = (href: string) => {
    const active = isActive(href);
    
    if (!isMounted) {
      return `${baseClass} bg-white text-[#0a2279] border border-[#0a2279]`;
    }
    
    return `${baseClass} bg-white text-[#0a2279] border border-[#0a2279] hover:bg-blue-50`;
  };

  return (
    <nav className={`flex items-center justify-between p-6 border-b theme-transition ${navBg} ${navBorder}`}>
      <Link href="/" className="flex items-center">
        <div className="relative w-40 h-12 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Polialfa Expert Contab"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80px, 80px"
            priority
          />
        </div>
      </Link>

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