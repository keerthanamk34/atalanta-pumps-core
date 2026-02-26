import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import IndustriesSection from "@/components/IndustriesSection";

const Index = () => (
  <PageTransition>
    <SEOHead
      title="Atalanta Pumps Pvt. Ltd. | Submersible & Dewatering Pump Manufacturer Since 1973"
      description="ISO 9001:2008 certified manufacturer of submersible and dewatering pumps. ONGC empanelled. Exports to UAE, Ethiopia, Algeria, Kenya."
      keywords="submersible pump manufacturer, dewatering pump manufacturer, industrial pumps India, ONGC pump supplier"
    />
    <HeroSection />
    <CompanyOverview />
    <IndustriesSection />
  </PageTransition>
);

export default Index;
