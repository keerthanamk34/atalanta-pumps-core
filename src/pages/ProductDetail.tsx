import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, Download, CheckCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import ImageSlider from "@/components/ImageSlider";
import EnquiryModal from "@/components/EnquiryModal";
import { getProductBySlug } from "@/data/products";

const tabs = ["Specifications", "Features", "Applications"] as const;

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Specifications");
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <PageTransition>
      <SEOHead title={product.seoTitle} description={product.seoDescription} keywords={`${product.name}, ${product.categoryLabel}, Atalanta Pumps`} />

      <section className="pt-24 section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/products/${product.category}`} className="hover:text-primary transition-colors">{product.categoryLabel}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{product.shortName}</span>
            </nav>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <ImageSlider images={product.images} alt={product.name} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{product.categoryLabel}</span>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">{product.name}</h1>
                <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                  {[
                    { label: "Power", value: product.hp },
                    { label: "Head", value: product.head },
                    { label: "Discharge", value: product.discharge },
                    { label: "Construction", value: product.construction },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-card border border-border rounded-lg p-3">
                      <span className="text-muted-foreground text-xs">{spec.label}</span>
                      <p className="font-heading font-bold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6">{product.application}</p>
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => setEnquiryOpen(true)} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-industrial-dark transition-colors shadow-md">
                    Get Best Quote
                  </button>
                  <button className="border border-border text-muted-foreground px-6 py-3 rounded-lg font-semibold hover:text-primary hover:border-primary transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download Brochure
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Tabs */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16">
              <div className="flex border-b border-border mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-semibold transition-colors relative ${activeTab === tab ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Specifications" && (
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value], i) => (
                    <div key={key} className={`flex ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}>
                      <div className="w-1/3 p-4 text-sm font-medium text-muted-foreground border-r border-border">{key}</div>
                      <div className="w-2/3 p-4 text-sm text-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Features" && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Applications" && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((a) => (
                    <div key={a} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} productName={product.name} />
    </PageTransition>
  );
};

export default ProductDetail;
