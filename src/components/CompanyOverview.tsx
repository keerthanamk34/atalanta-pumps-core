import { useEffect, useRef, useState } from "react";
import { Shield, Award, Globe, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { companyConfig } from "@/config/company.config";

const highlights = [
  { icon: Shield, title: "ISO 9001:2008", desc: "Certified quality management system" },
  { icon: Award, title: "ONGC Empanelled", desc: "Approved vendor for India's largest oil company" },
  { icon: Globe, title: "Global Exports", desc: companyConfig.exportCountries.join(", ") },
  { icon: Users, title: `${companyConfig.employees} Employees`, desc: "Skilled engineering workforce" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary">{count}{suffix}</div>
    </div>
  );
}

const CompanyOverview = () => (
  <section className="section-padding bg-secondary">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Company <span className="text-primary">Overview</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {companyConfig.manufacturer} — Established {companyConfig.established}, led by CEO {companyConfig.ceo}.
            A trusted name in submersible and dewatering pump manufacturing.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {companyConfig.stats.map((s) => (
          <div key={s.label} className="text-center">
            <AnimatedCounter target={s.value} suffix={s.suffix} />
            <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {highlights.map((h, i) => (
          <AnimatedSection key={h.title} delay={i * 0.1}>
            <div className="bg-background p-8 rounded-2xl border border-border h-full hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <h.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyOverview;
