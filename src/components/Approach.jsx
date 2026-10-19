
/* Import a minimal icon for the section marker. */
import { ArrowUpRight } from "lucide-react";

/* Explain the studio's property-selection philosophy. */
export default function Approach() {
  // Keep the principles in data so they're easy to update.
  const principles = [
    {
      number: "01",
      title: "Location before everything.",
      description:
        "We consider the surrounding streets, daily conveniences and the character of a neighborhood.",
    },
    {
      number: "02",
      title: "Architecture with purpose.",
      description:
        "We look beyond appearances to spatial planning, natural light, materials and functionality.",
    },
    {
      number: "03",
      title: "Clarity at every step.",
      description:
        "Property specifications and buying information should be presented clearly, without unnecessary noise.",
    },
  ];

  return (
    <section id="approach" className="border-t border-black bg-[#EAEAE5] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      {/* Editorial introduction. */}
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E5392D]">
            02 / Our approach
          </p>
          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Good spaces
            <br />
            change everything.
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="max-w-xl text-base leading-8 text-[#555555]">
            Finding a property is about more than square footage. It's
            about how a space works, where it sits and how it fits the
            life you want to build.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest"
          >
            Discuss your requirements
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Numbered principles form a structured editorial grid. */}
      <div className="mt-16 grid border-t border-black/20 md:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle.number}
            className="border-b border-black/20 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
          >
            <p className="text-xs font-bold text-[#E5392D]">
              {principle.number}
            </p>
            <h3 className="mt-8 text-xl font-bold">{principle.title}</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#626262]">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
