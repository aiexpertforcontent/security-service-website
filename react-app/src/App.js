import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <div className="App grain bg-[#030303] text-[#FAFAFA] min-h-screen">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <WhyUs />
          <Clients />
          <Testimonials />
          <LeadForm />
        </main>
        <Footer />
        <Toaster
          theme="dark"
          position="top-center"
          toastOptions={{
            style: {
              background: "#121214",
              border: "1px solid #27272A",
              color: "#FAFAFA",
            },
          }}
        />
      </div>
    </ReactLenis>
  );
}

export default App;

