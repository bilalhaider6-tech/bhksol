import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-glass py-3 border-b border-white/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="BQ Solutions Logo" className="w-20 h-20 object-contain transition-transform group-hover:scale-110 duration-300" />
            <span className="text-xl font-display font-bold text-foreground">
              BQ <span className="gradient-text">Solutions</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "navActive" : "nav"}
                  size="sm"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="default" size="default" className="shadow-glow">
                Get Your Website
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-card-strong rounded-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block">
                <Button
                  variant={location.pathname === link.path ? "navActive" : "ghost"}
                  className="w-full justify-start rounded-xl"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/contact" className="block pt-2">
              <Button variant="default" className="w-full">
                Get Your Website
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
