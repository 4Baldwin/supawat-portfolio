import React from 'react';

export default function Navbar({ activeSection }) {
  const sections = ["about", "skills", "projects", "contact"];

  return (
    <header className="sticky top-0 z-40 -mx-4 mb-6 border-b border-cyan-500/10 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-xs font-semibold tracking-[0.35em] text-cyan-300">
          SUPAWAT · PORTFOLIO
        </div>
        <nav className="hidden gap-8 text-xs font-medium text-slate-400 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition hover:text-cyan-300 ${activeSection === section
                  ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                  : ""
                }`}
            >
              {section.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
