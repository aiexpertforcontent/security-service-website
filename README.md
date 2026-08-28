# ShieldX Security Website

A replicated, pixel-perfect, mobile-responsive dark luxury security business website matching the Emergent design for **ShieldX Security System** (Private Security · Founded by Jaspal Singh).

---

## 🚀 Quick Start (Instant Preview — No Installation Needed!)

You don't need to install Node.js or run any build commands to view and use the website:

1. Navigate to:
   ```
   c:\Users\shubh\Downloads\shieldx-security\
   ```
2. Double-click **`index.html`** or right-click and open with your preferred browser (Chrome, Edge, Brave, Firefox, etc.).
3. The website is immediately 100% interactive, responsive, animated, and fully functional!

---

## 📱 How to Set Your WhatsApp Number

To connect the action buttons and lead form to your real WhatsApp number:

1. Open `index.html` in any text editor (Notepad, VS Code, etc.).
2. Near line 460, locate the configuration line:
   ```javascript
   const WHATSAPP_NUMBER = "910000000000";
   ```
3. Replace `"910000000000"` with your actual WhatsApp business number with country code (no `+`, no spaces, e.g. `"919876543210"`).
4. Save the file. All CTA buttons ("Get Protected", "Secure Your World", "Talk to ShieldX Security", "Chat on WhatsApp", and the Lead Form submission) will automatically redirect to your number with pre-formatted enquiry messages!

---

## 💻 Modular React Source Code (`react-app/`)

If you want to edit or develop the project using modern React:

```bash
cd c:\Users\shubh\Downloads\shieldx-security\react-app
npm install
npm start
```

### React Structure:
- `src/config.js`: Centralized WhatsApp phone number and API endpoint settings
- `src/components/site/Header.jsx`: Sticky blur navigation, logo, desktop links, mobile hamburger drawer
- `src/components/site/Hero.jsx`: Parallax hero background, masked typography reveals, CTA actions
- `src/components/site/Stats.jsx`: Easing animated count-up numbers on scroll
- `src/components/site/Services.jsx`: Responsive bento grid of security services
- `src/components/site/WhyUs.jsx`: Sticky left sidebar with 4 numbered operational standards
- `src/components/site/Clients.jsx`: Continuous smooth marquee ticker with client logos
- `src/components/site/Testimonials.jsx`: Testimonial review cards
- `src/components/site/LeadForm.jsx`: Interactive validation form with WhatsApp handoff
- `src/components/site/Footer.jsx`: Bottom call-to-action, branding, founder credits, and copyright

---

## ✨ Features & Design System
- **Color Scheme**: Obsidian dark `#030303`, zinc borders `#27272A`, rich purple accent `#9333EA` / `#a855f7`, crisp typography `#FAFAFA` / `#A1A1AA`.
- **Typography**: Google Fonts `Unbounded` (display headings) + `IBM Plex Sans` (body).
- **Subtle Texture**: SVG fractal noise grain overlay.
- **Full Mobile Responsiveness**: Dynamic layout scaling across mobile (375px+), tablet, and desktop screens.
- **Interactive Lead Form**: Complete field validation (name, service type, contact number, email, personnel count, location, budget), toast feedback, and direct redirection to WhatsApp with a pre-filled structured message.
