import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import { buildWhatsAppLink } from "../../config";

const links = [
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why-us" },
  { label: "Clients", id: "testimonials" },
  { label: "Contact", id: "lead-form" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-[#030303]/80 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <button data-testid="brand-logo" onClick={() => go("hero")} className="flex items-center gap-3 group">
          <Shield className="w-6 h-6 text-[#9333EA] group-hover:text-[#a855f7] transition-colors" strokeWidth={2.2} />
          <span className="font-display text-sm tracking-[0.35em] font-bold uppercase">ShieldX Security</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className="text-sm text-[#A1A1AA] hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          data-testid="header-whatsapp-btn"
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-[#9333EA] hover:bg-[#a855f7] text-white text-sm font-medium px-6 py-2.5 rounded-sm transition-colors"
        >
          Get Protected
        </a>

        <button data-testid="mobile-menu-toggle" onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#030303]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="text-left text-[#A1A1AA] hover:text-white">
              {l.label}
            </button>
          ))}
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-[#9333EA] text-white text-center px-6 py-3 rounded-sm">
            Get Protected
          </a>
        </div>
      )}
    </motion.header>
  );
};

