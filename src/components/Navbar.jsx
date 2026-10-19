
/* Import the menu icons used on smaller screens. */
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

/* Render the Swiss editorial navigation. */
export default function Navbar() {
  // Track the mobile navigation's open/closed state.
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep navigation destinations consistent across screen sizes.
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
  ];

  return (
    /* Use a crisp white header with a thin black dividing line. */
    <header className="relative z-50 border-b border-black bg-[#F7F7F4]">
      <nav
        className="mx-auto flex max-w-[1800px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14"
        aria-label="Main navigation"
      >
        {/* Wordmark: deliberately typographic rather than decorative. */}
        <a href="#home" className="flex items-center gap-3">
          <span className="text-xl font-black tracking-[-0.09em]">
            F/P
          </span>
          <span className="hidden h-7 w-px bg-black sm:block" />
          <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.16em]">
            FORM
            <br />
            PROPERTY
          </span>
        </a>

        {/* Desktop navigation links. */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              <span className="text-[#E5392D]">
                0{index + 1}
              </span>
              <span className="transition-colors group-hover:text-[#E5392D]">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Desktop contact action. */}
        <a
          href="#contact"
          className="hidden items-center gap-3 border border-black px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#E5392D] hover:text-white hover:border-[#E5392D] sm:flex"
        >
          Start a conversation
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile menu toggle. */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-black md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Expandable mobile navigation. */}
      {menuOpen && (
        <div className="border-t border-black px-5 py-4 md:hidden">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-black/15 py-4 text-xs font-bold uppercase tracking-widest"
            >
              <span>
                <span className="mr-3 text-[#E5392D]">0{index + 1}</span>
                {link.label}
              </span>
              <ArrowUpRight size={16} />
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-between bg-[#E5392D] px-4 py-4 text-xs font-bold uppercase tracking-widest text-white"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
