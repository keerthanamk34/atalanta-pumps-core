import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
    <div className="absolute inset-0 bg-background/80" />
    <div className="relative z-10 container mx-auto text-center px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-block mb-6 px-4 py-1.5 border border-primary/40 rounded-full"
      >
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">ISO 9001:2008 Certified</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 max-w-4xl mx-auto text-foreground"
      >
        Engineering High Performance{" "}
        <span className="text-primary">Submersible Pump Systems</span> Since 1973
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        ISO 9001:2008 Certified Manufacturer of Submersible & Dewatering Pumps. Trusted by ONGC and exported to 4+ countries.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/products"
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold text-lg hover:bg-orange-dark transition-colors"
        >
          View Products
        </Link>
        <Link
          to="/contact"
          className="border-2 border-foreground/30 text-foreground px-8 py-3.5 rounded font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
        >
          Request Technical Quote
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
