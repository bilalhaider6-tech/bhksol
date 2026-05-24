import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import safiaRiceImg from "@/assets/portfolio-safia-rice.png";
import temlaRiceImg from "@/assets/portfolio-temla-rice.png";
import falakRiceImg from "@/assets/portfolio-falak-rice.png";

const thumb = (url: string) => `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

const projects = [
  {
    id: 1, title: "Safia Rice Mills", category: "Rice Export Business",
    description: "A professional, conversion-focused website for a premium Pakistani rice exporter — showcasing products, processes, and 28+ years of excellence.",
    features: ["Custom Design", "Responsive", "SEO Optimized"],
    image: safiaRiceImg, url: "https://safiaricemills.lovable.app",
  },
  {
    id: 2, title: "Temla Rice", category: "Rice Brand & E-commerce",
    description: "A vibrant, modern website for Pakistan's longest rice grain brand with product catalog, recipes, and e-commerce functionality.",
    features: ["E-commerce", "Product Catalog", "Brand Identity"],
    image: temlaRiceImg, url: "https://temlarice.com",
  },
  {
    id: 3, title: "Falak Rice E-Store", category: "E-commerce Store",
    description: "A full-featured e-commerce platform for one of Pakistan's leading rice and food brands with seamless shopping experience.",
    features: ["Online Store", "Product Catalog", "Conversion Focused"],
    image: falakRiceImg, url: "https://estore.falakrice.com",
  },
  {
    id: 4, title: "Benjamin Franklin Plumbing", category: "Plumbing",
    description: "High-converting service site for a nationally trusted plumbing brand — built around bookings, trust signals, and fast local response.",
    features: ["Lead Generation", "Service Pages", "Trust Focused"],
    image: thumb("https://www.benjaminfranklinplumbing.com/"), url: "https://www.benjaminfranklinplumbing.com/",
  },
  {
    id: 5, title: "Roto-Rooter", category: "Plumbing",
    description: "A heavyweight plumbing & drain services experience — instant quotes, emergency CTAs, and a streamlined nationwide booking flow.",
    features: ["Emergency CTA", "Online Booking", "Nationwide Reach"],
    image: thumb("https://www.rotorooter.com/"), url: "https://www.rotorooter.com/",
  },
  {
    id: 6, title: "WOW 1 DAY PAINTING", category: "Painting",
    description: "A bold, conversion-first painting brand site with strong promise-driven messaging, quote forms, and crisp visual storytelling.",
    features: ["Quote Funnel", "Brand Storytelling", "Service Showcase"],
    image: thumb("https://www.wow1day.com/"), url: "https://www.wow1day.com/",
  },
  {
    id: 7, title: "SOHO Painters", category: "Painting",
    description: "A premium, editorial-style painting studio site — refined typography, project galleries, and a high-end residential feel.",
    features: ["Editorial Design", "Project Gallery", "Premium Feel"],
    image: thumb("https://sohopainters.com/"), url: "https://sohopainters.com/",
  },
  {
    id: 8, title: "Oak & Iron Carpentry", category: "Carpentry",
    description: "A craftsman-grade carpentry website that highlights bespoke woodwork with rich imagery, clean layouts, and clear inquiry paths.",
    features: ["Craft Showcase", "Portfolio Grid", "Inquiry Focused"],
    image: thumb("https://www.oak-iron-carpentry.com/"), url: "https://www.oak-iron-carpentry.com/",
  },
  {
    id: 9, title: "Heritage Woodworks", category: "Carpentry",
    description: "A heritage-inspired woodworking site blending warm visuals, story-driven content, and a refined showcase of fine carpentry work.",
    features: ["Storytelling", "Visual Showcase", "Premium Brand"],
    image: thumb("https://heritage-woodworks.com/"), url: "https://heritage-woodworks.com/",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium websites we've built for businesses ready to dominate their industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 120}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-3 h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-3">
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center hover:scale-110 transition-transform">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.features.map((feature) => (
                        <span key={feature} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{feature}</span>
                      ))}
                    </div>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex">
                        <Button variant="default" size="sm" className="gap-2">
                          Visit Website <ExternalLink size={14} />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-5">
              More Projects <span className="gradient-text">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We're constantly building premium websites for serious businesses. Want yours to be next?
            </p>
            <Link to="/contact">
              <Button variant="default" size="lg" className="gap-2">
                Start Your Project <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl p-10 md:p-16 text-center text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-5">Want a Website Like These?</h2>
                <p className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg">
                  Let's build a premium website that positions your business as the industry leader.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="gap-2 font-bold">
                      Book Your Strategy Call <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold">
                      View Our Services
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

export default Portfolio;
