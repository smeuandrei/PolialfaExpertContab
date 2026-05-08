import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
const navLinkClass = "border px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white transition";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <h2 className="text-2xl font-bold">
        Polialfa Expert Contab
      </h2>

      <div className="flex items-center gap-4">
        <Link href="/" className={navLinkClass}>
          Acasă
        </Link>
        <Link href="/despre-noi" className={navLinkClass}>
          Despre noi
        </Link>
        <Link href="/servicii" className={navLinkClass}>
          Servicii
        </Link>
        <Link href="/tarife" className={navLinkClass}>
          Tarife
        </Link>
        <Link href="/contact" className={navLinkClass}>
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}