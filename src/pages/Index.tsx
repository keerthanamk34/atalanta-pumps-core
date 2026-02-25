import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import IndustriesSection from "@/components/IndustriesSection";
import ProductsSection from "@/components/ProductsSection";
import PumpSelector from "@/components/PumpSelector";
import ManufacturingSection from "@/components/ManufacturingSection";
import QualitySection from "@/components/QualitySection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CompanyOverview />
        <IndustriesSection />
        <ProductsSection />
        <PumpSelector />
        <ManufacturingSection />
        <QualitySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
