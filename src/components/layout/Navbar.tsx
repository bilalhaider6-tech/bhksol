import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "py-2"
          : "py-4"
      }`}
    >
      {/* Background layer with blur */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-2xl shadow-[0_1px_0_0_hsl(var(--border)/0.5),0_4px_20px_-4px_hsl(var(--foreground)/0.08)]"
            : "bg-transparent"
        }`}
      />

      <div className="container-custom relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.img
              src={logo}
              alt="BQ Solutions Logo"
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-display font-bold text-foreground leading-tight">
                BQ <span className="gradient-text">Solutions</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase hidden sm:block">
                Premium Web Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-foreground/[0.03] rounded-full px-1.5 py-1.5 border border-border/40">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full inline-block transition-colors duration-300 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="default" size="default" className="shadow-glow gap-2 group">
                Get Your Website
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 border border-border/40 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 px-4 pt-2 pb-4"
          >
            <div className="bg-background/95 backdrop-blur-2xl rounded-2xl p-3 space-y-1 shadow-xl border border-border/50">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                      {isActive && <ArrowRight size={14} className="ml-auto" />}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-2"
              >
                <Link to="/contact" className="block">
                  <Button variant="default" className="w-full shadow-glow gap-2">
                    Get Your Website <ArrowRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
