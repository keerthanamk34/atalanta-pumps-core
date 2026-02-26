import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import ProductsSection from "@/components/ProductsSection";
import PumpSelector from "@/components/PumpSelector";
import AnimatedSection from "@/components/AnimatedSection";

const Products = () => (
  <PageTransition>
    <SEOHead
      title="Submersible & Dewatering Pumps | Atalanta Pumps Product Range"
      description="Explore our range of submersible pumps, dewatering pumps, mining pumps, and offshore pumps. 10 HP to 150 HP. Filter by HP, industry, and application."
      keywords="submersible pumps, dewatering pumps, mining pumps, offshore pumps, pump selector tool"
    />
    <section className="pt-24 section-padding bg-background">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Engineered for extreme conditions and maximum reliability across critical industries.
          </p>
        </AnimatedSection>
      </div>
    </section>
    <ProductsSection />
    <PumpSelector />
  </PageTransition>
);

export default Products;
