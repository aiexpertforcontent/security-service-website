import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { MaskLine } from "./Reveal";
import { buildWhatsAppLink } from "../../config";

const HERO_IMG =
  "https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjBzZWN1cml0eSUyMGd1YXJkfGVufDB8fHx8MTc4NTA3MDUxNHww&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="hero" ref={ref} data-testid="hero-section" className="relative min-h-screen flex items-end overflow-hidden pt-28 pb-16">
      {/* parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img src={HERO_IMG} alt="Elite security officer" className="w-full h-full object-cover object-center grayscale contrast-125 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-[#030303]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-8 text-[#A1A1AA]"
        >
          <ShieldCheck className="w-4 h-4 text-[#9333EA]" />
          <span className="text-xs tracking-[0.3em] uppercase">Private Security · Est. Trust</span>
        </motion.div>

        <h1 className="font-display font-900 text-[13vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.9] tracking-tighter uppercase">
          <MaskLine delay={0.15}>Precision.</MaskLine>
          <MaskLine delay={0.3}>
            <span className="text-[#9333EA]">Protection.</span>
          </MaskLine>
          <MaskLine delay={0.45}>Peace of mind.</MaskLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-col lg:flex-row lg:items-end gap-8 lg:justify-between"
        >
          <p className="max-w-xl text-[#A1A1AA] text-base md:text-lg leading-relaxed">
            ShieldX Security System, founded by <span className="text-white font-medium">Jaspal Singh</span>, deploys elite, hand-picked personnel and modern surveillance to safeguard people, assets and events — with an unbroken record of trust.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              data-testid="hero-whatsapp-btn"
              href={buildWhatsAppLink("Hi XYZ Security, I want to secure my premises. Please reach out.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#9333EA] hover:bg-[#a855f7] text-white font-medium px-8 py-4 rounded-sm transition-colors"
            >
              Secure Your World
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              data-testid="hero-explore-btn"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-[#27272A] hover:border-[#9333EA] text-white px-8 py-4 rounded-sm transition-colors"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

