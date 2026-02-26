import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";
import PumpSelector from "@/components/PumpSelector";
import { products, categories, getProductsByCategory, type Product } from "@/data/products";

const hpRanges = [
  { label: "All HP", value: "all" },
  { label: "≤ 3 HP", value: "0-3" },
  { label: "3–10 HP", value: "3-10" },
  { label: "10–100 HP", value: "10-100" },
  { label: "100+ HP", value: "100+" },
];

const dischargeRanges = [
  { label: "All Discharge", value: "all" },
  { label: "≤ 50 m³/h", value: "0-50" },
  { label: "50–100 m³/h", value: "50-100" },
  { label: "100+ m³/h", value: "100+" },
];

const headRanges = [
  { label: "All Head", value: "all" },
  { label: "≤ 15 m", value: "0-15" },
  { label: "15–50 m", value: "15-50" },
  { label: "50+ m", value: "50+" },
];

function matchRange(value: number, range: string): boolean {
  if (range === "all") return true;
  if (range.endsWith("+")) return value >= parseInt(range);
  const [min, max] = range.split("-").map(Number);
  return value >= min && value <= max;
}

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const [hpFilter, setHpFilter] = useState("all");
  const [dischargeFilter, setDischargeFilter] = useState("all");
  const [headFilter, setHeadFilter] = useState("all");
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);

  const baseProducts = category ? getProductsByCategory(category) : products;

  const filtered = useMemo(() => {
    return baseProducts.filter((p) =>
      matchRange(p.hpNumeric, hpFilter) &&
      matchRange(p.dischargeNumeric, dischargeFilter) &&
      matchRange(p.headNumeric, headFilter)
    );
  }, [baseProducts, hpFilter, dischargeFilter, headFilter]);

  const currentCategory = categories.find((c) => c.slug === category);
  const title = currentCategory ? currentCategory.label : "All Products";

  return (
    <PageTransition>
      <SEOHead
        title={`${title} | Atalanta Pumps – Submersible & Dewatering Pumps`}
        description={`Explore Atalanta Pumps ${title.toLowerCase()}. Filter by HP, discharge, and head. ISO 9001:2008 certified, ONGC empanelled manufacturer.`}
        keywords="submersible pumps, dewatering pumps, mining pumps, offshore pumps, pump manufacturer India"
      />

      <section className="pt-24 section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              {currentCategory ? (
                <>Our <span className="text-primary">{currentCategory.label}</span></>
              ) : (
                <>Our <span className="text-primary">Products</span></>
              )}
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-lg">
              Engineered for extreme conditions and maximum reliability across critical industries.
            </p>
          </AnimatedSection>

          {/* Category Tabs */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link
                to="/products"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!category ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40"}`}
              >
                All Products
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${category === c.slug ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40"}`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center flex-wrap">
              <div>
                <label className="text-sm text-muted-foreground mr-2">HP Range:</label>
                <select value={hpFilter} onChange={(e) => setHpFilter(e.target.value)} className="bg-card text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                  {hpRanges.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mr-2">Discharge:</label>
                <select value={dischargeFilter} onChange={(e) => setDischargeFilter(e.target.value)} className="bg-card text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                  {dischargeRanges.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mr-2">Head:</label>
                <select value={headFilter} onChange={(e) => setHeadFilter(e.target.value)} className="bg-card text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                  {headRanges.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
            </div>
          </AnimatedSection>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground py-12">No products match your filters.</p>
            )}
            {filtered.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <ProductCard product={p} onEnquire={() => setEnquiryProduct(p)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PumpSelector />

      <EnquiryModal
        open={!!enquiryProduct}
        onClose={() => setEnquiryProduct(null)}
        productName={enquiryProduct?.name}
      />
    </PageTransition>
  );
};

export default Products;
