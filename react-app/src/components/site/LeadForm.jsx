import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Send, MessageCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { API, SERVICE_TYPES, buildWhatsAppLink } from "../../config";

const initial = {
  name: "",
  service_type: "",
  contact_number: "",
  email: "",
  num_people: "",
  location: "",
  budget_per_person: "",
};

const Field = ({ label, children }) => (
  <label className="block">
    <span className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">{label}</span>
    <div className="mt-2">{children}</div>
  </label>
);

const inputCls =
  "w-full bg-transparent border-b border-[#27272A] focus:border-[#9333EA] rounded-none py-3 text-white placeholder:text-[#52525b] outline-none transition-colors";

export const LeadForm = () => {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.service_type) return "Please select a security type.";
    if (!/^[+\d][\d\s-]{6,}$/.test(form.contact_number)) return "Please enter a valid contact number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.num_people || Number(form.num_people) < 1) return "Enter number of people required.";
    if (!form.location.trim()) return "Please enter a location.";
    if (!form.budget_per_person.trim()) return "Please enter budget per person.";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, num_people: Number(form.num_people) });
      toast.success("Request received! Redirecting you to WhatsApp…");
      const msg = `New security enquiry from ${form.name}%0A- Type: ${form.service_type}%0A- People: ${form.num_people}%0A- Location: ${form.location}%0A- Budget/person: ${form.budget_per_person}%0A- Contact: ${form.contact_number}`;
      setTimeout(() => {
        window.open(buildWhatsAppLink(decodeURIComponent(msg)), "_blank");
      }, 800);
      setForm(initial);
    } catch (e2) {
      toast.error("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" data-testid="lead-form-section" className="border-t border-[#27272A] bg-[#050505]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <span className="text-xs tracking-[0.3em] uppercase text-[#9333EA]">Reach out</span>
          <h2 className="font-display font-900 text-4xl md:text-5xl lg:text-6xl tracking-tighter mt-4 leading-none uppercase">
            Request your <br /> security detail
          </h2>
          <p className="mt-6 text-[#A1A1AA] leading-relaxed max-w-md">
            Share your requirement and our team responds within hours. Prefer to talk now? Message us directly on WhatsApp.
          </p>
          <a
            data-testid="form-whatsapp-direct"
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-[#27272A] hover:border-[#9333EA] text-white px-6 py-3 rounded-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#9333EA]" />
            Chat on WhatsApp
          </a>
        </div>

        <motion.form
          data-testid="lead-form"
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 border border-[#27272A] bg-[#09090B] p-8 lg:p-12 rounded-sm"
          style={{ boxShadow: "0 0 60px -20px rgba(147,51,234,0.35)" }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Field label="Full Name">
              <input data-testid="input-name" className={inputCls} placeholder="John Doe" value={form.name} onChange={(e) => set("name", e.target.value)} />
            </Field>

            <Field label="Type of Security">
              <Select value={form.service_type} onValueChange={(v) => set("service_type", v)}>
                <SelectTrigger data-testid="select-service-type" className="w-full bg-transparent border-0 border-b border-[#27272A] rounded-none px-0 py-3 h-auto text-white focus:ring-0 data-[state=open]:border-[#9333EA]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-[#121214] border-[#27272A] text-white">
                  {SERVICE_TYPES.map((t) => (
                    <SelectItem key={t} value={t} data-testid={`option-${t}`} className="focus:bg-[#9333EA] focus:text-white cursor-pointer">
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Contact Number">
              <input data-testid="input-contact" className={inputCls} placeholder="+91 98XXXXXXXX" value={form.contact_number} onChange={(e) => set("contact_number", e.target.value)} />
            </Field>

            <Field label="Email Address">
              <input data-testid="input-email" type="email" className={inputCls} placeholder="you@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
            </Field>

            <Field label="People Required">
              <input data-testid="input-people" type="number" min="1" className={inputCls} placeholder="e.g. 6" value={form.num_people} onChange={(e) => set("num_people", e.target.value)} />
            </Field>

            <Field label="Location">
              <input data-testid="input-location" className={inputCls} placeholder="City / Site address" value={form.location} onChange={(e) => set("location", e.target.value)} />
            </Field>

            <div className="md:col-span-2">
              <Field label="Budget Per Person (monthly)">
                <input data-testid="input-budget" className={inputCls} placeholder="e.g. ₹20,000" value={form.budget_per_person} onChange={(e) => set("budget_per_person", e.target.value)} />
              </Field>
            </div>
          </div>

          <button
            data-testid="lead-form-submit"
            type="submit"
            disabled={loading}
            className="mt-10 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#9333EA] hover:bg-[#a855f7] disabled:opacity-60 text-white font-medium px-10 py-4 rounded-sm transition-colors"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            {loading ? "Submitting…" : "Submit & Continue on WhatsApp"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

