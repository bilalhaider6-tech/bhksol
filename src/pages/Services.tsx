import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Globe,
  Smartphone,
  Zap,
  Search,
  RefreshCw,
  Server,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "From Scratch",
    description: "Custom-built websites tailored to your brand and business goals. We create unique digital experiences that stand out from the competition.",
    benefits: [
      "Custom design matching your brand",
      "Clean, maintainable code",
      "Scalable architecture",
      "Fast loading speeds",
    ],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    subtitle: "& Enhancement",
    description: "Transform your outdated website into a modern, high-performing platform. We improve both the look and functionality.",
    benefits: [
      "Modern, fresh design",
      "Improved user experience",
      "Better conversion rates",
      "Updated technology",
    ],
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    subtitle: "Complete Setup",
    description: "Hassle-free domain registration and reliable hosting setup. We handle all the technical details so you don't have to.",
    benefits: [
      "Domain registration assistance",
      "Reliable hosting setup",
      "SSL certificate included",
      "Email configuration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    subtitle: "Design",
    description: "Websites that look and function perfectly on all devices. From smartphones to desktops, your site will shine everywhere.",
    benefits: [
      "Optimized for all screen sizes",
      "Touch-friendly interfaces",
      "Fast mobile loading",
      "Consistent experience",
    ],
  },
  {
    icon: Zap,
    title: "Performance",
    subtitle: "Optimization",
    description: "Speed up your website for better user experience and search rankings. We optimize every aspect for maximum performance.",
    benefits: [
      "Faster page loading",
      "Optimized images & assets",
      "Code optimization",
      "Improved Core Web Vitals",
    ],
  },
  {
    icon: Search,
    title: "SEO-Friendly",
    subtitle: "Structure",
    description: "Built with search engines in mind from day one. Get found by the customers who are looking for businesses like yours.",
    benefits: [
      "Search engine optimized",
      "Proper meta tags",
      "Schema markup",
      "Sitemap & robots.txt",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Complete website solutions designed to help your business grow online. From development to optimization, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-border/50 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-1">
                      {service.title}
                    </h2>
                    <p className="text-primary font-medium text-sm mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver your website efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Design", description: "We create mockups and designs that match your vision." },
              { step: "03", title: "Development", description: "We build your website with clean, efficient code." },
              { step: "04", title: "Launch", description: "We deploy your site and ensure everything runs smoothly." },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Let's discuss your needs and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="gap-2">
                  Get Free Consultation <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
