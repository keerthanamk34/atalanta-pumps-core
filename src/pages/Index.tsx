import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cog, FlaskConical } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import IndustriesSection from "@/components/IndustriesSection";
import AnimatedSection from "@/components/AnimatedSection";

const categoryPreview = [
  { title: "Submersible Pumps", desc: "75HP–150HP offshore & desalination pumps for critical applications.", link: "/products/submersible-pumps" },
  { title: "Dewatering Pumps", desc: "1.5HP–10HP portable dewatering pumps for construction & mining.", link: "/products/dewatering-pumps" },
];

const servicePreview = [
  { icon: Cog, title: "Manufacturing", desc: "End-to-end pump production" },
  { icon: Shield, title: "Repair & Servicing", desc: "All major pump brands" },
  { icon: FlaskConical, title: "ISO Testing", desc: "9906/2 compliant testing" },
];

const whyChoose = [
  "ISO 9001:2008 Certified Quality",
  "50+ Years of Engineering Excellence",
  "ONGC Empanelled Manufacturer",
  "Exports to 4+ Countries",
  "In-house ISO 9906/2 Test Lab",
  "Custom Engineering Solutions",
];

const Index = () => (
  <PageTransition>
    <SEOHead
      title="Atalanta Pumps Pvt. Ltd. | Submersible & Dewatering Pump Manufacturer Since 1973"
      description="ISO 9001:2008 certified manufacturer of submersible and dewatering pumps. ONGC empanelled. Exports to UAE, Ethiopia, Algeria, Kenya."
      keywords="submersible pump manufacturer, dewatering pump manufacturer, industrial pumps India, ONGC pump supplier"
    />
    <HeroSection />
    <CompanyOverview />

    {/* Product Categories Preview */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Our <span className="text-primary">Product Range</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Engineered for extreme conditions and maximum reliability.</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {categoryPreview.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <Link to={c.link} className="block bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-muted-foreground mb-4">{c.desc}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Range <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          {servicePreview.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-background border border-border rounded-2xl p-8 h-full text-center hover:shadow-xl transition-shadow">
                <s.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    <IndustriesSection />

    {/* Why Choose Us */}
    <section className="section-padding bg-primary">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
              Why Choose Atalanta Pumps
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {whyChoose.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.06}>
              <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-2xl p-8 h-full">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-primary-foreground font-medium text-sm">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-2xl font-semibold text-lg hover:brightness-110 hover:scale-105 transition-all shadow-lg inline-block"
          >
            Request a Technical Quote
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Index;
