// Central site configuration — edit WhatsApp number here anytime.
export const WHATSAPP_NUMBER = "910000000000"; // placeholder — replace with real number (no +, no spaces)

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || "Hello ShieldX Security, I would like to know more about your security services."
  )}`;

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const SERVICE_TYPES = ["Corporate", "Event", "Personal / Executive", "Residential", "Industrial"];

