import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="bg-card border-t border-border py-12 px-4">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <Link to="/" className="font-heading text-lg font-bold text-primary">
            ATALANTA<span className="text-foreground"> PUMPS</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            Protecto Engineering Pvt. Ltd. — ISO 9001:2008 Certified Manufacturer of Submersible & Dewatering Pumps since 1973.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-foreground mb-3">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Dewatering Pumps</li>
            <li>Submersible Pumps</li>
            <li>Mining Pumps</li>
            <li>Offshore Pumps</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-foreground mb-3">Certifications</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>ISO 9001:2008</li>
            <li>ONGC Empanelled</li>
            <li>ISO 9906/2 Testing</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Atalanta Pumps Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
