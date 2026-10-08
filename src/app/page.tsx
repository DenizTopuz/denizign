import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { SelectedWork } from "@/components/SelectedWork";
import { LayerDiagram } from "@/components/LayerDiagram";
import { MethodSection } from "@/components/MethodSection";
import { Capabilities } from "@/components/Capabilities";
import { AboutBlock } from "@/components/AboutBlock";
import { ContactCTA } from "@/components/ContactCTA";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <Hero />
        <ClientLogos />
        <SelectedWork />
        <LayerDiagram />
        <MethodSection />
        <Capabilities />
        <AboutBlock />
        <ContactCTA />
      </main>

      <SiteFooter />
    </>
  );
}
