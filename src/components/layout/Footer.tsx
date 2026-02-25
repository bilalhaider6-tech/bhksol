import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Corporate Websites",
  "Export Company Websites",
  "Ecommerce Websites",
  "Personal Brand Websites",
  "Landing Pages",
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/bq_solutions26", label: "Instagram" },
  { icon: Instagram, href: "https://www.instagram.com/bq_solutions26", label: "Instagram" },
  { icon: Mail, href: "mailto:bqsolutions26@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-gradient-to-b from-background via-background to-foreground">
        <div className="container-custom py-20">
          <div className="relative rounded-[2rem] p-10 md:p-16 text-center overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/[0.04] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px"
            }} />

            <div className="relative z-10 text-primary-foreground">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-5">
                Ready to start?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
                Ready to Upgrade Your{" "}
                <br className="hidden sm:block" />
                Online Presence?
              </h2>
              <p className="text-primary-foreground/70 mb-10 max-w-2xl mx-auto text-base md:text-lg">
                Let's build a website that makes your competitors nervous.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center px-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="gap-2 font-bold w-full sm:w-auto text-sm sm:text-base shadow-lg hover:shadow-xl">
                    Book Your Strategy Call <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="https://wa.me/923708099033" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold w-full sm:w-auto text-sm sm:text-base">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground">
        <div className="container-custom pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand — takes more space */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <img src={logo} alt="BQ Solutions Logo" className="w-16 h-16 object-contain" />
                <div className="flex flex-col">
                  <span className="text-base font-display font-bold text-background leading-tight">
                    BQ <span className="text-primary">Solutions</span>
                  </span>
                  <span className="text-[9px] text-background/30 font-medium tracking-[0.15em] uppercase">
                    Premium Web Agency
                  </span>
                </div>
              </Link>
              <p className="text-background/40 text-sm leading-relaxed max-w-xs">
                We build premium, conversion-driven websites that position your business as an authority in your industry.
              </p>
              <div className="flex gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-background/[0.06] hover:bg-primary transition-all duration-300 flex items-center justify-center text-background/40 hover:text-primary-foreground hover:scale-105 border border-background/[0.06] hover:border-primary"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/50 mb-5">
                Navigate
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/35 hover:text-primary transition-all duration-300 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/50 mb-5">
                We Build
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-background/35 hover:text-primary transition-all duration-300 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/50 mb-5">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:bqsolutions26@gmail.com" className="flex items-start gap-3 text-background/35 hover:text-background/60 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <span className="text-sm pt-1.5">bqsolutions26@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+9203708099033" className="flex items-start gap-3 text-background/35 hover:text-background/60 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone size={14} className="text-primary" />
                    </div>
                    <span className="text-sm pt-1.5">+92 0370-8099033</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-background/35">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span className="text-sm pt-1.5">B-245 Block 13, F.B Area,<br />Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/[0.06] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/20 text-xs">
              © {currentYear} BQ Solutions. Crafted with precision.
            </p>
            <div className="flex gap-6">
              <span className="text-background/20 text-xs">Privacy Policy</span>
              <span className="text-background/20 text-xs">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
