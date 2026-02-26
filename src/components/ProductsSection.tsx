import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import pumpDewatering from "@/assets/pump-dewatering.jpg";
import pumpOffshore from "@/assets/pump-offshore.jpg";
import pumpMining from "@/assets/pump-mining.jpg";

const products = [
  {
    id: 1,
    name: "10 HP Dewatering Pump",
    image: pumpDewatering,
    hpRange: "10",
    flowRate: "50 m³/h",
    head: "30 m",
    industry: "Industrial Dewatering",
    application: "Construction sites, basements, flood control, and general dewatering applications.",
  },
  {
    id: 2,
    name: "75–150 HP Offshore Submersible Pump",
    image: pumpOffshore,
    hpRange: "75-150",
    flowRate: "200 m³/h",
    head: "120 m",
    industry: "Oil & Gas",
    application: "Offshore drilling platforms, oil rigs, subsea extraction and processing.",
  },
  {
    id: 3,
    name: "Mining Pump",
    image: pumpMining,
    hpRange: "50-100",
    flowRate: "150 m³/h",
    head: "80 m",
    industry: "Mining",
    application: "Underground and open-pit mining, slurry handling, mine dewatering.",
  },
];

const hpFilters = ["All", "10", "50-100", "75-150"];
const industryFilters = ["All", "Industrial Dewatering", "Oil & Gas", "Mining"];
const applicationFilters = ["All", "Construction", "Offshore", "Mining"];

const ProductsSection = () => {
  const [hpFilter, setHpFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [appFilter, setAppFilter] = useState("All");

  const filtered = products.filter((p) => {
    const hpMatch = hpFilter === "All" || p.hpRange === hpFilter;
    const indMatch = industryFilter === "All" || p.industry === industryFilter;
    const appMatch = appFilter === "All" || p.application.toLowerCase().includes(appFilter.toLowerCase());
    return hpMatch && indMatch && appMatch;
  });

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Filters */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center flex-wrap">
            <div>
              <label className="text-sm text-muted-foreground mr-2">HP Range:</label>
              <select value={hpFilter} onChange={(e) => setHpFilter(e.target.value)} className="bg-card text-foreground border border-border rounded px-3 py-2 text-sm">
                {hpFilters.map((f) => <option key={f} value={f}>{f === "All" ? "All HP" : `${f} HP`}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mr-2">Industry:</label>
              <select value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value)} className="bg-card text-foreground border border-border rounded px-3 py-2 text-sm">
                {industryFilters.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mr-2">Application:</label>
              <select value={appFilter} onChange={(e) => setAppFilter(e.target.value)} className="bg-card text-foreground border border-border rounded px-3 py-2 text-sm">
                {applicationFilters.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>
        </AnimatedSection>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">No products match your filters.</p>
          )}
          {filtered.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{p.name}</h3>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{p.hpRange} HP</span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{p.industry}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                    <span>Flow: {p.flowRate}</span>
                    <span>Head: {p.head}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{p.application}</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-orange-dark transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
