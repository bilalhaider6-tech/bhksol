import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(215 25% 12%) 0%, hsl(199 40% 15%) 50%, hsl(215 25% 10%) 100%)" }} />
      
      {/* CTA Section */}
      <div className="container-custom py-16 relative z-10">
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

      {/* Main Footer */}
      <div className="container-custom pb-12 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="BHK Solutions Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-display font-bold">
                BHK <span className="text-primary">Solutions</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              We build websites that turn visitors into customers. Professional, modern, and results-driven web development.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Mail, href: "mailto:bilalhaidermuhammad6@gmail.com" },
              ].map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center hover:scale-110">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Portfolio", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-white/60 hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Business Websites", "E-commerce Stores", "Landing Pages", "AI-Powered Websites", "Website Redesign", "SEO Optimization"].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:bilalhaidermuhammad6@gmail.com" className="text-white/60 hover:text-primary transition-colors text-sm">bilalhaidermuhammad6@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+9203708099033" className="text-white/60 hover:text-primary transition-colors text-sm">+92 0370-8099033</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">B-245 Block 13, F.B Area, Karachi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {currentYear} BHK Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-primary transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
