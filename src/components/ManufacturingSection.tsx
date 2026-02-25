import facilityChakan from "@/assets/facility-chakan.jpg";
import facilityAmbethan from "@/assets/facility-ambethan.jpg";

const facilities = [
  {
    name: "Chakan Manufacturing Unit",
    area: "33,500 sq ft",
    image: facilityChakan,
    desc: "Our primary manufacturing facility featuring state-of-the-art CNC machining, assembly lines, and quality control labs for high-volume pump production.",
  },
  {
    name: "Ambethan Manufacturing Unit",
    area: "5,000 sq ft",
    image: facilityAmbethan,
    desc: "Specialized workshop facility focused on custom engineering, prototype development, and precision component manufacturing.",
  },
];

const ManufacturingSection = () => {
  return (
    <section id="facilities" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Manufacturing <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Two purpose-built facilities powering our production capabilities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((f) => (
            <div key={f.name} className="bg-card border border-border rounded overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-bold text-foreground">{f.name}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded font-semibold">{f.area}</span>
                </div>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
