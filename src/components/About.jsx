
/* Present the concept behind FORM / PROPERTY. */
export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      {/* Create an asymmetric layout for the studio introduction. */}
      <div className="grid gap-10 border-t border-black pt-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E5392D]">
            03 / About the studio
          </p>
          <p className="mt-8 text-sm leading-7 text-[#626262]">
            An independent property-studio concept focused on architecture,
            spaces and thoughtful presentation.
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            We believe the right space doesn't just look different.
            <span className="text-[#E5392D]"> It feels different.</span>
          </h2>

          <div className="mt-8 grid gap-5 border-t border-black/20 pt-5 sm:grid-cols-2">
            <p className="text-sm leading-7 text-[#626262]">
              From the first impression to the smallest detail, every
              property deserves clear information and considered design.
            </p>
            <p className="text-sm leading-7 text-[#626262]">
              FORM / PROPERTY is a fictional brand created to demonstrate
              an editorial real-estate website experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
