import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 container mx-auto text-center px-4 py-32">
        <div className="inline-block mb-6 px-4 py-1.5 border border-primary/40 rounded-full">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            ISO 9001:2008 Certified
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 max-w-4xl mx-auto text-foreground">
          Engineering High Performance{" "}
          <span className="text-primary">Submersible Pump Systems</span>{" "}
          Since 1973
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          ISO 9001:2008 Certified Manufacturer of Submersible & Dewatering Pumps.
          Trusted by ONGC and exported to 4+ countries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold text-lg hover:bg-orange-dark transition-colors"
          >
            View Products
          </a>
          <a
            href="#contact"
            className="border-2 border-foreground/30 text-foreground px-8 py-3.5 rounded font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
          >
            Request Technical Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
