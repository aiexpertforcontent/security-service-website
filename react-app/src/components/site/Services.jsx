import { UserCheck, Video, Calendar, Building2, Truck, Home } from "lucide-react";
import { Reveal } from "./Reveal";

const IMG_GUARD =
  "https://images.pexels.com/photos/12304330/pexels-photo-12304330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const IMG_SURV =
  "https://images.unsplash.com/photo-1618482914248-29272d021005?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxzZWN1cml0eSUyMHN1cnZlaWxsYW5jZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzg1MDcwNTE0fDA&ixlib=rb-4.1.0&q=85";
const IMG_EVENT =
  "https://images.unsplash.com/photo-1760228604788-db8a36d5c1a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHNlY3VyaXR5fGVufDB8fHx8MTc4NTA3MDUxNHww&ixlib=rb-4.1.0&q=85";

const Card = ({ icon: Icon, title, desc, testid, className = "", image }) => (
  <div
    data-testid={testid}
    className={`group relative overflow-hidden border border-[#27272A] hover:border-[#9333EA] bg-[#09090B] p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 ${className}`}
  >
    {image && (
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale contrast-125 opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-[#09090B]/40" />
      </div>
    )}
    <div className="relative z-10 flex flex-col h-full">
      <Icon className="w-8 h-8 text-[#9333EA] mb-6" strokeWidth={1.7} />
      <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight mb-3">{title}</h3>
      <p className="text-[#A1A1AA] text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const Services = () => (
  <section id="services" data-testid="services-section" className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
    <Reveal>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-[#9333EA]">What we protect</span>
          <h2 className="font-display font-900 text-4xl md:text-5xl lg:text-6xl tracking-tighter mt-4 leading-none uppercase">
            Full-spectrum <br /> security services
          </h2>
        </div>
        <p className="max-w-sm text-[#A1A1AA] text-sm leading-relaxed">
          Every mandate is met with trained manpower, technology and command-level oversight — tailored to your threat profile.
        </p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <Reveal className="md:col-span-8" delay={0}>
        <Card testid="service-executive" icon={UserCheck} image={IMG_GUARD} title="Executive & Personal Protection" desc="Discreet, elite close-protection officers for VIPs, executives and families — trained in threat assessment, defensive driving and crisis response." className="h-full min-h-[280px]" />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0.1}>
        <Card testid="service-surveillance" icon={Video} image={IMG_SURV} title="Asset Surveillance" desc="24/7 CCTV monitoring, alarm response and access control from a central command room." className="h-full min-h-[280px]" />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0}>
        <Card testid="service-event" icon={Calendar} image={IMG_EVENT} title="Event Security" desc="Crowd management, access screening and rapid response for events of any scale." className="h-full min-h-[260px]" />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0.1}>
        <Card testid="service-corporate" icon={Building2} title="Corporate Guarding" desc="Uniformed and plain-clothes guards securing offices, campuses and reception points." className="h-full min-h-[260px]" />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0.2}>
        <Card testid="service-industrial" icon={Truck} title="Industrial & Logistics" desc="Perimeter security, material-gate control and cargo escort for plants and warehouses." className="h-full min-h-[260px]" />
      </Reveal>
      <Reveal className="md:col-span-12" delay={0}>
        <Card testid="service-residential" icon={Home} title="Residential & Society Security" desc="Gated-community guarding, visitor management and patrolling for apartments, villas and townships — backed by supervisor audits." className="h-full min-h-[180px]" />
      </Reveal>
    </div>
  </section>
);

