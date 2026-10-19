
/* Import the arrow icon for project links. */
import { ArrowUpRight } from "lucide-react";

/* Display the selected property projects. */
export default function Projects() {
  // Demo listings are illustrative, not real properties.
  const projects = [
    {
      number: "01",
      name: "The Glass Residence",
      type: "Contemporary residence",
      location: "Chennai, Tamil Nadu",
      price: "₹2.40 Cr",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      name: "Courtyard House",
      type: "Private villa",
      location: "Coimbatore, Tamil Nadu",
      price: "₹1.85 Cr",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "03",
      name: "The Urban Residence",
      type: "Modern apartment",
      location: "Madurai, Tamil Nadu",
      price: "₹92 Lakh",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      {/* Section heading and project index. */}
      <div className="mb-12 flex flex-col justify-between gap-5 border-t border-black pt-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#E5392D]">
            01 / Selected projects
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Spaces worth looking closer at.
          </h2>
        </div>

        <span className="text-xs text-[#626262]">
          A curated collection / 2026
        </span>
      </div>

      {/* Responsive editorial project grid. */}
      <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.number} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D9D3]">
              <img
                src={project.image}
                alt={`${project.name} architectural concept`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              
            </div>

            {/* Property information stays outside the image. */}
            <div className="mt-4 border-t border-black pt-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#E5392D]">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#626262]">
                    {project.location}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <p className="mt-5 text-sm font-bold">{project.price}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Clarify that the displayed property information is a demo. */}
      <p className="mt-10 text-xs leading-6 text-[#777777]">
        Concept listings for demonstration only. Prices, locations and
        availability are illustrative and are not verified offers.
      </p>
    </section>
  );
}
