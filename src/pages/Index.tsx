import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <PortfolioPreview />
        <ServicesPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
