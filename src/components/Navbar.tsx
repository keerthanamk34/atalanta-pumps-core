import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/navigation.config";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl font-bold tracking-wider text-primary">
          ATALANTA<span className="text-foreground"> PUMPS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-industrial-dark transition-colors shadow-md"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-2 text-sm",
                pathname === l.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold text-center"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
