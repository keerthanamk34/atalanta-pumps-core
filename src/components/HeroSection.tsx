import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
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
      <div className="text-4xl md:text-5xl font-heading font-bold text-accent">{count}{suffix}</div>
    </div>
  );
}

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />

    <div className="relative z-10 container mx-auto text-center px-4 pt-32 pb-16 flex-1 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-block mb-6 px-4 py-1.5 border border-primary-foreground/30 rounded-full bg-primary-foreground/10 mx-auto"
      >
        <span className="text-primary-foreground text-sm font-semibold tracking-wide uppercase">ISO 9001:2008 Certified</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 max-w-4xl mx-auto text-primary-foreground"
      >
        Engineering High Performance{" "}
        <span className="text-accent">Submersible Pump Systems</span> Since 1973
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
      >
        ISO 9001:2008 Certified Manufacturer of Submersible & Dewatering Pumps. Trusted by ONGC and exported globally.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/products"
          className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:brightness-110 hover:scale-105 transition-all shadow-lg"
        >
          View Products
        </Link>
        <Link
          to="/contact"
          className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 hover:scale-105 transition-all"
        >
          Request Technical Quote
        </Link>
      </motion.div>
    </div>

    {/* Animated Stats */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      className="relative z-10 w-full max-w-3xl mx-auto pb-16"
    >
      <div className="grid grid-cols-3 gap-6">
        {heroStats.map((s) => (
          <div key={s.label} className="text-center">
            <HeroCounter target={s.value} suffix={s.suffix} />
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
