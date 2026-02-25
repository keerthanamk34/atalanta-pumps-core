import { useState } from "react";
import pumpDewatering from "@/assets/pump-dewatering.jpg";
import pumpOffshore from "@/assets/pump-offshore.jpg";
import pumpMining from "@/assets/pump-mining.jpg";

const products = [
  {
    id: 1,
    name: "10 HP Dewatering Pump",
    image: pumpDewatering,
    hpRange: "10",
    industry: "Industrial Dewatering",
    application: "Construction sites, basements, flood control, and general dewatering applications.",
  },
  {
    id: 2,
    name: "75–150 HP Offshore Submersible Pump",
    image: pumpOffshore,
    hpRange: "75-150",
    industry: "Oil & Gas",
    application: "Offshore drilling platforms, oil rigs, subsea extraction and processing.",
  },
  {
    id: 3,
    name: "Mining Pump",
    image: pumpMining,
    hpRange: "50-100",
    industry: "Mining",
    application: "Underground and open-pit mining, slurry handling, mine dewatering.",
  },
];

const hpFilters = ["All", "10", "50-100", "75-150"];
const industryFilters = ["All", "Industrial Dewatering", "Oil & Gas", "Mining"];

const ProductsSection = () => {
  const [hpFilter, setHpFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");

  const filtered = products.filter((p) => {
    const hpMatch = hpFilter === "All" || p.hpRange === hpFilter;
    const indMatch = industryFilter === "All" || p.industry === industryFilter;
    return hpMatch && indMatch;
  });

  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Engineered for extreme conditions and maximum reliability.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
          <div>
            <label className="text-sm text-muted-foreground mr-2">HP Range:</label>
            <select
              value={hpFilter}
              onChange={(e) => setHpFilter(e.target.value)}
              className="bg-card text-foreground border border-border rounded px-3 py-2 text-sm"
            >
              {hpFilters.map((f) => (
                <option key={f} value={f}>{f === "All" ? "All HP" : `${f} HP`}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mr-2">Industry:</label>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="bg-card text-foreground border border-border rounded px-3 py-2 text-sm"
            >
              {industryFilters.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">No products match your filters.</p>
          )}
          {filtered.map((p) => (
            <div key={p.id} className="bg-card border border-border rounded overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{p.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{p.hpRange} HP</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{p.industry}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{p.application}</p>
                <a
                  href="#contact"
                  className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-orange-dark transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
