import { Link } from "react-router-dom";
import { quickLinks } from "@/config/navigation.config";
import { companyConfig } from "@/config/company.config";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground section-padding">
    <div className="section-container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
        <div>
          <Link to="/" className="font-heading text-lg font-bold text-accent">
            ATALANTA<span className="text-primary-foreground"> PUMPS</span>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mt-3">
            {companyConfig.manufacturer} — {companyConfig.isoCertification} Certified Manufacturer of Submersible & Dewatering Pumps since {companyConfig.established}.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/70 hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Dewatering Pumps</li>
            <li>Submersible Pumps</li>
            <li>Mining Pumps</li>
            <li>Offshore Pumps</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Certifications</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>{companyConfig.isoCertification}</li>
            <li>ONGC Empanelled</li>
            <li>ISO 9906/2 Testing</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} {companyConfig.name} All rights reserved. | GST: {companyConfig.gst}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
