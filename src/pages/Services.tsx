import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Globe,
  ShoppingCart,
  User,
  Zap,
  Building,
  ArrowRight,
  CheckCircle,
  Target,
  Layers,
  Paintbrush,
  Rocket,
} from "lucide-react";

const websiteTypes = [
  { icon: Building, title: "Corporate Websites", description: "Professional websites that establish credibility and authority for your business." },
  { icon: Globe, title: "Export Company Websites", description: "International-standard websites built for global trade and export businesses." },
  { icon: ShoppingCart, title: "Ecommerce Websites", description: "High-converting online stores with seamless shopping experience and secure payments." },
  { icon: User, title: "Personal Brand Websites", description: "Websites that position you as the go-to expert in your industry." },
  { icon: Zap, title: "High-Converting Landing Pages", description: "Laser-focused pages designed to capture leads and drive specific actions." },
];

const includes = [
  "Custom Modern Design",
  "Mobile & Tablet Optimization",
  "Speed Optimization",
  "SEO-Friendly Structure",
  "Clear Conversion Strategy",
  "Professional UI/UX Layout",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary/6 rounded-full blur-3xl animate-blob-delay" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Premium <span className="gradient-text">Website Development</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do one thing exceptionally well — build premium, conversion-focused websites that position your business as the obvious choice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Website Types */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              What We <span className="gradient-text">Build</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 80}>
                <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Every Project <span className="gradient-text">Includes</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {includes.map((item, index) => (
              <AnimatedSection key={item} delay={index * 80}>
                <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <CheckCircle size={22} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Our <span className="gradient-text">Process</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Research", description: "We analyze your market, competitors, and goals.", icon: Target },
              { step: "02", title: "Wireframe & UX", description: "We plan user flows and structure for conversions.", icon: Layers },
              { step: "03", title: "Premium Design", description: "Pixel-perfect designs that reflect your authority.", icon: Paintbrush },
              { step: "04", title: "Development & Launch", description: "Clean code, optimization, and a flawless launch.", icon: Rocket },
            ].map((phase, index) => (
              <AnimatedSection key={phase.step} delay={index * 100}>
                <div className="relative bg-card rounded-2xl p-8 pt-12 text-center group border border-border/50 shadow-card hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-bold px-4 py-1.5 rounded-full shadow-glow tracking-wider">
                    STEP {phase.step}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <phase.icon size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl p-10 md:p-16 text-center text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-5">
                  Ready to Get Your Premium Website?
                </h2>
                <p className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg">
                  Let's discuss your project and build a website that dominates your industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="gap-2 font-bold">
                      Book Your Strategy Call <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
