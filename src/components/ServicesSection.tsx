import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { services, brandsServiced, servicingStages } from "@/data/services.data";

const ServicesSection = () => (
  <section className="section-padding bg-secondary">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our Speciality — Over 40+ years of experience in pump manufacturing, servicing, and testing.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-background border border-border rounded-2xl p-8 h-full hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <s.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Brands Serviced */}
      <AnimatedSection delay={0.2}>
        <div className="bg-background border border-border rounded-2xl p-8 text-center mb-16">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Brands We Service</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {brandsServiced.map((b) => (
              <span key={b} className="bg-secondary text-foreground px-4 py-2 rounded-2xl text-sm font-medium border border-border">{b}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 7 Stages Timeline */}
      <AnimatedSection delay={0.3}>
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
            7 Stages of <span className="text-primary">Pump Servicing</span>
          </h3>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
          {servicingStages.map((stage, i) => (
            <AnimatedSection key={stage.step} delay={i * 0.08}>
              <div className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}>
                  <div className="bg-background border border-border rounded-2xl p-8 inline-block hover:shadow-xl transition-shadow">
                    <h4 className="font-heading text-lg font-bold text-foreground mb-1">{stage.title}</h4>
                    <p className="text-muted-foreground text-sm">{stage.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold z-10 shadow-lg">
                  {stage.step}
                </div>
                <div className="md:hidden ml-12">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">{stage.title}</h4>
                  <p className="text-muted-foreground text-sm">{stage.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
