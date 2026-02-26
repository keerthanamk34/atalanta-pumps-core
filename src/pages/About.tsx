import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import CompanyOverview from "@/components/CompanyOverview";
import IndustriesSection from "@/components/IndustriesSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Award, Globe, Users, Factory, Calendar } from "lucide-react";

const aboutDetails = [
  { icon: Calendar, title: "Established 1973", desc: "Over 50 years of engineering excellence in pump manufacturing." },
  { icon: Factory, title: "Manufacturer", desc: "Protecto Engineering Private Limited — a trusted name in heavy engineering." },
  { icon: Shield, title: "ISO 9001:2008", desc: "Certified quality management system ensuring world-class standards." },
  { icon: Award, title: "ONGC Empanelled", desc: "Approved vendor for India's largest oil and natural gas corporation." },
  { icon: Globe, title: "Global Exports", desc: "Serving clients across UAE, Ethiopia, Algeria, and Kenya." },
  { icon: Users, title: "CEO: Mallikarjun", desc: "Visionary leadership driving innovation in pump technology." },
];

const About = () => (
  <PageTransition>
    <SEOHead
      title="About Atalanta Pumps | 50+ Years of Pump Manufacturing Excellence"
      description="Protecto Engineering Pvt. Ltd. — Established 1973. ISO 9001:2008 certified, ONGC empanelled submersible pump manufacturer with global exports."
      keywords="about Atalanta Pumps, Protecto Engineering, pump manufacturer India, ONGC empanelled"
    />
    <section className="pt-24 section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 text-center">
            About <span className="text-primary">Atalanta Pumps</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
            With over five decades of engineering expertise, we design, manufacture, and export high-performance
            submersible and dewatering pump systems for the world's most demanding industries.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aboutDetails.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded p-6 h-full hover:border-primary/50 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
    <CompanyOverview />
    <IndustriesSection />
  </PageTransition>
);

export default About;
