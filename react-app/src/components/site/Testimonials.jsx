import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "XYZ transformed security at our corporate campus. Their officers are sharp, disciplined and genuinely proactive. Incidents dropped to zero within a quarter.",
    name: "Rajesh Mehta",
    role: "Facilities Head, Aurora Technologies",
  },
  {
    quote:
      "We hired them for a 5,000-guest gala. Flawless crowd control, invisible when it needed to be, decisive when it mattered. Jitendra's team is world-class.",
    name: "Priya Nair",
    role: "Director, Grandview Events",
  },
  {
    quote:
      "Our warehouses span three cities. XYZ standardised guarding across all of them with real-time reporting. Total peace of mind.",
    name: "Sandeep Rao",
    role: "COO, Meridian Logistics",
  },
  {
    quote:
      "As a family, personal safety is priceless. Their close-protection team is professional, discreet and deeply trustworthy. We wouldn't go anywhere else.",
    name: "Anita Kapoor",
    role: "Private Client",
  },
];

export const Testimonials = () => (
  <section id="testimonials" data-testid="testimonials-section" className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
    <Reveal>
      <div className="mb-16">
        <span className="text-xs tracking-[0.3em] uppercase text-[#9333EA]">Client testimony</span>
        <h2 className="font-display font-900 text-4xl md:text-5xl lg:text-6xl tracking-tighter mt-4 leading-none uppercase">
          Trusted by those <br /> who can&apos;t afford risk
        </h2>
      </div>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-4">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={(i % 2) * 0.1}>
          <div
            data-testid={`testimonial-${i}`}
            className="group h-full border border-[#27272A] hover:border-[#9333EA] bg-[#09090B] p-8 lg:p-10 transition-colors duration-300"
          >
            <Quote className="w-10 h-10 text-[#9333EA] mb-6" fill="#9333EA" />
            <p className="text-lg md:text-xl leading-relaxed text-[#FAFAFA]">{t.quote}</p>
            <div className="mt-8 pt-6 border-t border-[#27272A]">
              <div className="font-display font-bold tracking-tight">{t.name}</div>
              <div className="text-sm text-[#A1A1AA] mt-1">{t.role}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

