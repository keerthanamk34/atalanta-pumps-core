import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import pumpOffshore from "@/assets/pump-offshore.jpg";
import { useEffect, useRef, useState } from "react";

const heroStats = [
  { value: 50, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Pumps Delivered" },
  { value: 40, suffix: "+", label: "Years Servicing" },
];

function HeroCounter({ target, suffix }: { target: number; suffix: string }) {
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
          }, 1500 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{count}{suffix}</div>
    </div>
  );
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${heroBg})` }} />
    <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent/5" />

    {/* SVG pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A3D62' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />

    <div className="relative z-10 section-container w-full px-6 lg:px-8 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">ISO 9001:2008 Certified</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-tight mb-6 text-foreground"
          >
            Precision Engineered{" "}
            <span className="text-gradient">Submersible Pump Systems</span>{" "}
            Built for Extreme Industrial Environments
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Trusted by leading Oil & Gas and Mining corporations, delivering high-efficiency pumping solutions for over 50 years.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/products"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            >
              View Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary px-8 py-3.5 rounded-2xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 text-center"
            >
              Request Technical Quote
            </Link>
          </motion.div>

          {/* Stats inline */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <HeroCounter target={s.value} suffix={s.suffix} />
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Product image + floating badge */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={pumpOffshore}
                alt="Atalanta Submersible Pump for Offshore Applications"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating ISO badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl flex items-center gap-3"
            >
              <Shield className="w-8 h-8" />
              <div>
                <p className="font-heading font-bold text-sm">ISO 9906/2</p>
                <p className="text-xs opacity-80">Testing Certified</p>
              </div>
            </motion.div>

            {/* Floating accent shape */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/10 border border-accent/20"
            />
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
