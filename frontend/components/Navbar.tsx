"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const linkClass =
  "px-4 py-2 rounded-lg font-semibold transition cursor-pointer bg-white text-[#0a2279] border border-[#0a2279] hover:bg-blue-50";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre" },
  { href: "/servicii", label: "Servicii" },
  { href: "/tarife", label: "Tarife" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 relative">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-12 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/logo.png"
              alt="Polialfa Expert Contab"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80px, 160px"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass}>
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#0a2279] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0a2279] transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0a2279] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 overflow-hidden transition-all ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 translate-y-0 duration-300"
            : "max-h-0 opacity-0 -translate-y-2 duration-150"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
