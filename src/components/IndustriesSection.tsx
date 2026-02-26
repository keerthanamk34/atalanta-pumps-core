import { Droplets, Anchor, Mountain, Building2, Waves } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { industries } from "@/data/services.data";

const icons = [Droplets, Anchor, Mountain, Building2, Waves];

const IndustriesSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delivering engineered pump solutions across critical sectors worldwide.
          </p>
        </div>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {industries.map((ind, i) => {
          const Icon = icons[i % icons.length];
          return (
            <AnimatedSection key={ind.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ind.name}</h3>
                <p className="text-muted-foreground text-sm">{ind.desc}</p>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
