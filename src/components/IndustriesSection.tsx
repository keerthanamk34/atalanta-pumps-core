import { Droplets, Anchor, Mountain, Building2, Waves } from "lucide-react";

const industries = [
  { icon: Droplets, name: "Oil & Gas", desc: "High-pressure submersible systems for extraction and processing" },
  { icon: Anchor, name: "Offshore Drilling", desc: "Marine-grade pumps for offshore platforms and rigs" },
  { icon: Mountain, name: "Mining", desc: "Heavy-duty dewatering solutions for mining operations" },
  { icon: Building2, name: "Infrastructure", desc: "Water management for construction and civil projects" },
  { icon: Waves, name: "Industrial Dewatering", desc: "Efficient water removal for industrial facilities" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delivering engineered pump solutions across critical sectors worldwide.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group bg-card border border-border rounded p-6 text-center hover:border-primary transition-all hover:-translate-y-1"
            >
              <ind.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ind.name}</h3>
              <p className="text-muted-foreground text-sm">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
