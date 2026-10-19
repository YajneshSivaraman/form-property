
/* Import the arrow icon for the contact action. */
import { ArrowUpRight } from "lucide-react";

/* Render the final enquiry section. */
export default function Contact() {
  return (
    <section id="contact" className="bg-[#171717] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28">
      {/* Small label maintains the page's numbered structure. */}
      <p className="text-xs font-bold uppercase tracking-widest text-[#E5392D]">
        04 / Start a conversation
      </p>

      {/* Large closing headline creates a strong final impression. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:col-span-8">
          Have a space
          <br />
          in mind?
        </h2>

        <div className="lg:col-span-4">
          <p className="max-w-sm text-sm leading-7 text-white/65">
            Tell us what you're looking for. This demo can be connected
            to a real enquiry channel when the business details are ready.
          </p>

          {/* Replace this placeholder address before publishing. */}
          <a
            href="mailto:hello@example.com?subject=Property%20enquiry"
            className="mt-6 inline-flex items-center gap-4 bg-[#E5392D] px-5 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:!text-black"
          >
            Make an enquiry
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
