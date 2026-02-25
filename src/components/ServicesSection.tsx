import { Wrench, Settings, Cog, FlaskConical } from "lucide-react";

const services = [
  { icon: Cog, title: "Manufacturing", desc: "End-to-end pump manufacturing from design to delivery with precision engineering." },
  { icon: Wrench, title: "Repair & Servicing", desc: "Expert maintenance and repair for all pump brands and models." },
  { icon: Settings, title: "Custom Engineering", desc: "Bespoke pump solutions designed for unique operational requirements." },
  { icon: FlaskConical, title: "ISO 9906/2 Testing", desc: "Comprehensive hydraulic testing and certification services." },
];

const brands = ["Pleuger (Flowserve)", "WILO", "WPIL", "Kirloskar", "Mody"];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded p-6 hover:border-primary/50 transition-colors">
              <s.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Brands We Service</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((b) => (
              <span key={b} className="bg-muted text-muted-foreground px-4 py-2 rounded text-sm font-medium">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
