import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-gradient-to-b from-background to-muted/50">
        <div className="container-custom py-16">
          <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 text-primary-foreground">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
                Let's build a website that turns visitors into customers. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="gap-2 font-bold">
                    Get Free Consultation <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="https://wa.me/923708099033" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[hsl(215_25%_10%)]">
        <div className="container-custom pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="BQ Solutions Logo" className="w-18 h-18 object-contain" />
                <span className="text-xl font-display font-bold text-white">
                  BQ <span className="text-[hsl(199_89%_48%)]">Solutions</span>
                </span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed">
                Professional, modern, and results-driven web development that turns visitors into customers.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Mail, href: "mailto:bilalhaidermuhammad6@gmail.com", label: "Email" },
                ].map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-[hsl(199_89%_48%)] transition-all duration-300 flex items-center justify-center text-white/60 hover:text-white hover:scale-105">
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {["Home", "Services", "About", "Portfolio", "Reviews", "Contact"].map((link) => (
                  <li key={link}>
                    <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-white/45 hover:text-[hsl(199_89%_48%)] transition-colors text-sm inline-flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-2 h-px bg-[hsl(199_89%_48%)] transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">Services</h4>
              <ul className="space-y-2.5">
                {["Business Websites", "E-commerce Stores", "Landing Pages", "AI-Powered Websites", "Website Redesign", "SEO Optimization"].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-white/45 hover:text-[hsl(199_89%_48%)] transition-colors text-sm inline-flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-2 h-px bg-[hsl(199_89%_48%)] transition-all duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:bilalhaidermuhammad6@gmail.com" className="flex items-start gap-3 text-white/45 hover:text-white/70 transition-colors group">
                    <Mail size={16} className="text-[hsl(199_89%_48%)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">bilalhaidermuhammad6@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+9203708099033" className="flex items-start gap-3 text-white/45 hover:text-white/70 transition-colors group">
                    <Phone size={16} className="text-[hsl(199_89%_48%)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">+92 0370-8099033</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/45">
                  <MapPin size={16} className="text-[hsl(199_89%_48%)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">B-245 Block 13, F.B Area, Karachi</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider & Bottom */}
          <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/30 text-xs">© {currentYear} BQ Solutions. All rights reserved.</p>
            <div className="flex gap-5">
              <Link to="/privacy" className="text-white/30 hover:text-white/50 transition-colors text-xs">Privacy Policy</Link>
              <Link to="/terms" className="text-white/30 hover:text-white/50 transition-colors text-xs">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
