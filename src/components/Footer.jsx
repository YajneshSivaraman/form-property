
/* Import the upward arrow used by the back-to-top link. */
import { ArrowUpRight } from "lucide-react";

/* Render the minimal editorial footer. */
export default function Footer() {
  return (
    <footer className="bg-[#F7F7F4] px-5 py-8 sm:px-8 lg:px-14">
      {/* Top rule and brand identity. */}
      <div className="flex flex-col justify-between gap-6 border-t border-black pt-6 sm:flex-row sm:items-end">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="text-xl font-black tracking-[-0.09em]">F/P</span>
          <span className="text-[10px] font-bold uppercase leading-tight tracking-widest">
            FORM
            <br />
            PROPERTY
          </span>
        </a>

        {/* Footer links return visitors to the relevant sections. */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-widest">
          <a href="#projects" className="hover:text-[#E5392D]">Projects</a>
          <a href="#approach" className="hover:text-[#E5392D]">Approach</a>
          <a href="#about" className="hover:text-[#E5392D]">About</a>
          <a href="#contact" className="hover:text-[#E5392D]">Contact</a>
        </div>

        <a
          href="#home"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#E5392D]"
        >
          Back to top
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Clearly identify the website as a design concept. */}
      <div className="mt-8 flex flex-col justify-between gap-2 border-t border-black/15 pt-4 text-[10px] text-[#777777] sm:flex-row">
        <p>FORM / PROPERTY — Independent design concept.</p>
        <p>© {new Date().getFullYear()} · Demo website</p>
      </div>
    </footer>
  );
}
