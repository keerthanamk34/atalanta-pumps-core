import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/navigation.config";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="section-container flex items-center justify-between h-14 px-6 lg:px-8">
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
                "relative text-sm font-medium transition-colors py-1",
                pathname === l.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-2xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <Link
            to="/contact"
            className="ml-1 bg-primary text-primary-foreground px-5 py-2 rounded-2xl text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-lg"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-2xl border border-border text-muted-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-4 shadow-lg">
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
            className="block mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-2xl text-sm font-semibold text-center"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
