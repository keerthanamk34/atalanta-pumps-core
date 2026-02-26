import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import ServicesSection from "@/components/ServicesSection";
import QualitySection from "@/components/QualitySection";

const Services = () => (
  <PageTransition>
    <SEOHead
      title="Pump Services | Manufacturing, Repair & Custom Engineering | Atalanta Pumps"
      description="Expert pump manufacturing, repair & servicing, custom engineering, and ISO 9906/2 testing services. We service Pleuger, WILO, WPIL, Kirloskar, Mody."
      keywords="pump repair services, custom pump engineering, ISO testing, pump servicing India"
    />
    <section className="pt-24">
      <ServicesSection />
      <QualitySection />
    </section>
  </PageTransition>
);

export default Services;
