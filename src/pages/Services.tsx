import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Globe,
  Smartphone,
  Zap,
  Search,
  RefreshCw,
  Bot,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe, title: "Business Websites", subtitle: "Custom Built",
    description: "Custom-built websites tailored to your brand and business goals. We create unique digital experiences that stand out.",
    benefits: ["Custom design matching your brand", "Clean, maintainable code", "Scalable architecture", "Fast loading speeds"],
  },
  {
    icon: RefreshCw, title: "E-commerce Stores", subtitle: "Full Featured",
    description: "Complete online stores with product management, secure payments, and order tracking systems.",
    benefits: ["Product catalog management", "Secure payment integration", "Order tracking system", "Inventory management"],
  },
  {
    icon: Zap, title: "Landing Pages", subtitle: "High Converting",
    description: "Conversion-focused landing pages designed to capture leads and maximize your marketing ROI.",
    benefits: ["A/B testing ready", "Lead capture forms", "Analytics integration", "Mobile optimized"],
  },
  {
    icon: Bot, title: "AI-Powered Websites", subtitle: "Smart & Intelligent",
    description: "Websites enhanced with AI chatbots, personalization engines, and intelligent automation.",
    benefits: ["AI chatbot integration", "Smart personalization", "Automated workflows", "Data-driven insights"],
  },
  {
    icon: Smartphone, title: "Website Redesign", subtitle: "& Enhancement",
    description: "Transform your outdated website into a modern, high-performing platform that drives results.",
    benefits: ["Modern fresh design", "Improved user experience", "Better conversion rates", "Updated technology"],
  },
  {
    icon: Search, title: "SEO Optimization", subtitle: "Get Found Online",
    description: "Built with search engines in mind from day one. Get found by the right customers.",
    benefits: ["Search engine optimized", "Proper meta tags", "Schema markup", "Sitemap & robots.txt"],
  },
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete website solutions designed to help your business grow online. From development to optimization, we've got you covered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 80}>
                <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-2 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-display font-bold text-foreground mb-1">{service.title}</h2>
                      <p className="text-primary font-medium text-sm mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2 text-sm">
                            <CheckCircle size={16} className="text-primary flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A streamlined approach to deliver your website efficiently and effectively.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Design", description: "We create mockups and designs that match your vision." },
              { step: "03", title: "Development", description: "We build your website with clean, efficient code." },
              { step: "04", title: "Launch", description: "We deploy your site and ensure everything runs smoothly." },
            ].map((phase, index) => (
              <AnimatedSection key={phase.step} delay={index * 100}>
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground text-xl font-display font-bold flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl p-10 md:p-16 text-center text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-5">
                  Ready to Start Your Project?
                </h2>
                <p className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg">
                  Let's discuss your needs and create a website that drives results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="gap-2 font-bold">
                      Get Free Consultation <ArrowRight size={18} />
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
