
/* Import Motion for the hero's entrance animations. */
import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

/* Render the architectural editorial opening section. */
export default function Hero() {
  return (
    <section id="home" className="bg-[#F7F7F4]">
      {/* Use a large editorial grid with asymmetric columns. */}
      <div className="mx-auto grid max-w-[1800px] lg:min-h-[720px] lg:grid-cols-12">
        {/* Typography-led introduction. */}
        <div className="flex flex-col justify-between px-5 pb-10 pt-16 sm:px-8 sm:pt-24 lg:col-span-7 lg:px-14 lg:pb-14 lg:pt-20">
          <div>
            {/* Small issue-style label introduces the studio. */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex items-center gap-3"
            >
              <span className="h-2.5 w-2.5 bg-[#E5392D]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Independent Property Studio · Est. 2026
              </span>
            </motion.div>

            {/* Oversized headline defines the visual identity. */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(4.3rem,10vw,9.5rem)] font-black leading-[0.78] tracking-[-0.095em]"
            >
              SPACE.
              <br />
              <span className="text-[#E5392D]">SHAPED.</span>
            </motion.h1>

            {/* Supporting copy gives the fictional studio a clear purpose. */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 max-w-md text-sm leading-7 text-[#626262] sm:text-base"
            >
              A considered collection of spaces, architecture and places
              to call your own. Discover properties chosen for how they
              shape the way we live.
            </motion.p>

            {/* Primary link directs visitors to the project collection. */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#projects"
              className="mt-8 inline-flex items-center gap-4 bg-[#E5392D] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-black hover:!text-[#E5392D]"
            >
              Explore selected spaces
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* Bottom index details reinforce the editorial grid. */}
          <div className="mt-16 flex items-end justify-between border-t border-black pt-5">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#777777]">
                Our point of view
              </p>
              <p className="mt-2 text-xs font-semibold">
                Less noise. Better spaces.
              </p>
            </div>

            <a
              href="#projects"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
            >
              Scroll to explore
              <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        {/* Architectural image anchors the typography. */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[390px] overflow-hidden bg-[#D9D9D3] sm:min-h-[520px] lg:col-span-5 lg:min-h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
            alt="Contemporary architectural residence with carefully composed spaces"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Small image label adds a graphic editorial detail. */}
          <div className="absolute left-5 top-5 bg-[#F7F7F4] px-3 py-2 sm:left-8 sm:top-8">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
            The built environment
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
