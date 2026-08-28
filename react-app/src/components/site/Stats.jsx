import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 800, suffix: "+", label: "Guards Deployed" },
  { value: 350, suffix: "+", label: "Clients Protected" },
  { value: 18, suffix: " yrs", label: "Operational Legacy" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

const Counter = ({ value, suffix, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [n, setN] = useState(0);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    let t0 = null;
    let timer = setTimeout(() => {
      const tick = (now) => {
        if (!t0) t0 = now;
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setN(Math.floor(eased * value));
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          setN(value);
          setPopped(true);
          setTimeout(() => setPopped(false), 450);
        }
      };
      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, value, delay]);

  return (
    <motion.span
      ref={ref}
      animate={popped ? { scale: [1, 1.15, 1], color: ["#fafafa", "#a855f7", "#fafafa"] } : {}}
      transition={{ duration: 0.45 }}
      className="inline-block"
    >
      {n.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export const Stats = () => (
  <section data-testid="stats-section" className="relative border-y border-[#27272A] bg-[#030303]/60">
    <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
          className="border-[#27272A] border-r border-b px-6 py-12 lg:py-16 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:last-child]:border-r-0 hover:bg-[#09090B] transition-colors"
        >
          <div className="font-display font-900 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            <Counter value={s.value} suffix={s.suffix} delay={i * 120} />
          </div>
          <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-[#A1A1AA] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA] inline-block animate-pulse" />
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
