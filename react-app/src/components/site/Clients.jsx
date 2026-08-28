import { Hexagon, Triangle, Circle, Square, Diamond, Octagon, Star } from "lucide-react";

const clients = [
  { icon: Hexagon, name: "Aurora Tech" },
  { icon: Triangle, name: "Grandview" },
  { icon: Circle, name: "Meridian" },
  { icon: Square, name: "Northgate" },
  { icon: Diamond, name: "Sterling" },
  { icon: Octagon, name: "Vertex Group" },
  { icon: Star, name: "Ironclad" },
];

export const Clients = () => {
  const row = [...clients, ...clients];
  return (
    <section data-testid="clients-section" className="border-y border-[#27272A] py-12 overflow-hidden bg-[#050505]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-8">
        <span className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA]">Current client base</span>
      </div>
      <div className="relative">
        <div className="marquee-track">
          {row.map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-10 shrink-0 text-[#A1A1AA] hover:text-[#9333EA] transition-colors">
              <c.icon className="w-7 h-7" strokeWidth={1.5} />
              <span className="font-display text-lg md:text-2xl font-bold tracking-tight whitespace-nowrap">{c.name}</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
      </div>
    </section>
  );
};

