import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import QualitySection from "@/components/QualitySection";

const Quality = () => (
  <PageTransition>
    <SEOHead
      title="Quality & Testing | ISO 9906/2 Compliance | Atalanta Pumps"
      description="Every pump undergoes rigorous ISO 9906/2 testing — flow testing, head testing, load testing, with full service and test reports."
      keywords="ISO 9906 testing, pump quality testing, hydraulic performance testing India"
    />
    <section className="pt-24">
      <QualitySection />
    </section>
  </PageTransition>
);

export default Quality;
