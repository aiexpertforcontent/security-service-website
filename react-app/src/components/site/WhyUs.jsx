import { Reveal } from "./Reveal";

const chapters = [
  {
    n: "01",
    title: "Hand-picked, verified personnel",
    desc: "Every officer is background-checked, police-verified and put through rigorous physical and situational training before deployment. No shortcuts, ever.",
  },
  {
    n: "02",
    title: "Technology-backed vigilance",
    desc: "GPS-tracked patrols, real-time incident reporting apps and a central command room mean nothing slips through the cracks — day or night.",
  },
  {
    n: "03",
    title: "Command-level accountability",
    desc: "Dedicated supervisors, surprise audits and transparent reporting keep standards uncompromising. You always know your assets are watched.",
  },
  {
    n: "04",
    title: "Rapid, trained response",
    desc: "From medical emergencies to breach attempts, our teams are drilled to act within seconds — calmly, decisively and lawfully.",
  },
];

export const WhyUs = () => (
  <section id="why-us" data-testid="why-us-section" className="border-t border-[#27272A] bg-[#050505]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#9333EA]">The XYZ standard</span>
            <h2 className="font-display font-900 text-4xl md:text-5xl tracking-tighter mt-4 leading-none uppercase">
              Why clients trust us
            </h2>
            <p className="mt-6 text-[#A1A1AA] text-sm leading-relaxed max-w-xs">
              Trust isn&apos;t claimed — it&apos;s earned across thousands of shifts. This is the code we operate by.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="lg:col-span-8 flex flex-col">
        {chapters.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.05}>
            <div
              data-testid={`why-chapter-${c.n}`}
              className="group relative border-t border-[#27272A] py-10 grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-[#09090B] transition-colors duration-300"
            >
              <span className="md:col-span-2 font-display font-900 text-5xl md:text-6xl text-[#1c1c1f] group-hover:text-[#9333EA] transition-colors duration-300">
                {c.n}
              </span>
              <div className="md:col-span-10 md:pl-4">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3">{c.title}</h3>
                <p className="text-[#A1A1AA] leading-relaxed max-w-2xl">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

