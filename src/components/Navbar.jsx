import { useState } from "react";
// import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Beranda" },
    { href: "#projects", label: "Proyek" },
    { href: "#about", label: "Tentang" },
    { href: "#contact", label: "Kontak" },
  ]; 

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <nav className="mx-auto max-w-[var(--max-w)] px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg text-brand">
          Gogee
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-brand">
              {l.label}
            </a>
          ))}
          {/* <ThemeToggle /> */}
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {l.label}
              </a>
            ))}
              {/* <ThemeToggle /> */}
          </div>
        </div>
      )}
    </header>
  );
}
