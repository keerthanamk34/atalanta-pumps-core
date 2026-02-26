import AnimatedSection from "./AnimatedSection";
import facilityChakan from "@/assets/facility-chakan.jpg";
import facilityAmbethan from "@/assets/facility-ambethan.jpg";
import { companyConfig } from "@/config/company.config";

const facilityImages = [facilityChakan, facilityAmbethan];

const ManufacturingSection = () => (
  <section className="section-padding bg-secondary">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Manufacturing <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Two purpose-built facilities powering our production capabilities.
          </p>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-10">
        {companyConfig.facilities.map((f, i) => (
          <AnimatedSection key={f.name} delay={i * 0.15}>
            <div className="bg-background border border-border rounded-2xl overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img src={facilityImages[i]} alt={f.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-bold text-foreground">{f.name}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{f.area}</span>
                </div>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ManufacturingSection;
