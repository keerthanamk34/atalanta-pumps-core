import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import ManufacturingSection from "@/components/ManufacturingSection";

const Facilities = () => (
  <PageTransition>
    <SEOHead
      title="Manufacturing Facilities | Chakan & Ambethan Units | Atalanta Pumps"
      description="Two purpose-built manufacturing facilities — Chakan (33,500 sq ft) and Ambethan (5,000 sq ft) — powering our pump production capabilities."
      keywords="pump manufacturing facility, Chakan factory, pump production plant India"
    />
    <section className="pt-24">
      <ManufacturingSection />
    </section>
  </PageTransition>
);

export default Facilities;
