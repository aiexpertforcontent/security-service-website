import { Shield, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "../../config";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-[#27272A] bg-[#030303]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="border-b border-[#27272A] pb-16">
        <h2 className="font-display font-900 text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none">
          Ready to secure <br /> your world?
        </h2>
        <a
          data-testid="footer-whatsapp-btn"
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-2 bg-[#9333EA] hover:bg-[#a855f7] text-white font-medium px-8 py-4 rounded-sm transition-colors"
        >
          Talk to ShieldX Security
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-[#9333EA]" strokeWidth={2.2} />
          <div>
            <div className="font-display text-sm tracking-[0.35em] font-bold uppercase">ShieldX Security</div>
            <div className="text-xs text-[#A1A1AA] mt-1">Founded by Jaspal Singh</div>
          </div>
        </div>
        <div className="text-sm text-[#A1A1AA] max-w-md">
          Precision. Protection. Peace of mind. Elite private security services for corporate, event, residential and personal mandates.
        </div>
        <div className="text-xs text-[#52525b]">© {new Date().getFullYear()} ShieldX Security System. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

