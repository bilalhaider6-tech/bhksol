import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Target,
  Layers,
  Paintbrush,
  Rocket,
  Monitor,
  Zap,
  Shield,
  Users,
  TrendingUp,
  ExternalLink,
  Eye,
} from "lucide-react";
import safiaRiceImg from "@/assets/portfolio-safia-rice.png";
import temlaRiceImg from "@/assets/portfolio-temla-rice.png";
import falakRiceImg from "@/assets/portfolio-falak-rice.png";

const processSteps = [
  { icon: Target, step: "01", title: "Strategy & Research", description: "We analyze your market, competitors, and goals to craft a winning strategy." },
  { icon: Layers, step: "02", title: "Wireframe & UX Planning", description: "We map out user flows and structure for maximum conversions." },
  { icon: Paintbrush, step: "03", title: "Premium UI Design", description: "Pixel-perfect designs that reflect your brand's authority and quality." },
  { icon: Rocket, step: "04", title: "Development & Launch", description: "Clean code, speed optimization, and a flawless launch." },
];

const whyUs = [
  { icon: Monitor, text: "Modern & international-standard design" },
  { icon: TrendingUp, text: "Conversion-focused structure" },
  { icon: Zap, text: "Mobile-optimized & fast loading" },
  { icon: Shield, text: "Built to build authority & trust" },
  { icon: Users, text: "Designed to attract high-quality clients" },
];

const portfolioItems = [
  { title: "Safia Rice Mills", category: "Rice Export Business", image: safiaRiceImg, url: "https://safiaricemills.lovable.app" },
  { title: "Temla Rice", category: "Rice Brand & E-commerce", image: temlaRiceImg, url: "https://temlarice.com" },
  { title: "Falak Rice E-Store", category: "E-commerce Store", image: falakRiceImg, url: "https://estore.falakrice.com" },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-blob-delay" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-blob-delay-2" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection delay={100}>
              <div className="inline-flex items-center gap-2 bg-foreground/5 text-foreground/70 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-foreground/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Premium Website Agency
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-8">
                Premium Websites Built to{" "}
                <br className="hidden md:block" />
                <span className="gradient-text">Dominate Your Industry</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                We design high-converting, modern, international-standard websites that turn visitors into customers and position your brand as the obvious choice.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="hero" size="xl" className="gap-2 shadow-glow w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8">
                    Book Your Free Strategy Call <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button variant="heroOutline" size="xl" className="gap-2 w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                {["International Standard Designs", "Conversion-Focused Structure", "Mobile Optimized", "Fast Loading Speed"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* SECTION 2 – THE PROBLEM */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8">
              <AlertTriangle size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Most Businesses Don't Have a Website —{" "}
              <span className="text-primary">They Have an Online Brochure.</span>
            </h2>
            <p className="text-background/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              If your website looks outdated, loads slowly, or fails to convert visitors into leads — you're losing money daily.
            </p>
            <p className="text-background/50 text-lg max-w-2xl mx-auto">
              Your website should work as a 24/7 sales machine, not just exist.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 – WHAT WE DO */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
                We Do One Thing.{" "}
                <span className="gradient-text">We Do It Exceptionally Well.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                At BQ Solutions, we focus exclusively on building premium websites.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <AnimatedSection direction="left">
                <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-8">
                  <h3 className="text-lg font-display font-bold text-foreground mb-5">We do NOT offer:</h3>
                  <ul className="space-y-3">
                    {["Social media management", "SEO packages", "Content marketing", "Random digital services"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs font-bold">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                  <h3 className="text-lg font-display font-bold text-foreground mb-5">We specialize in:</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    High-performance, conversion-focused website design & development.
                  </p>
                  <p className="text-foreground font-display font-semibold text-lg italic border-l-4 border-primary pl-4">
                    "Because mastery demands focus."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR PROCESS */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Our Proven <span className="gradient-text">4-Step Website System</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="relative text-center p-8 pt-12 rounded-2xl glass-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full border border-border/50">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-bold px-4 py-1.5 rounded-full shadow-glow tracking-wider">
                    STEP {item.step}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION – RESULTS OF A PREMIUM WEBSITE */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Results of a <span className="gradient-text">Premium Website</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", icon: TrendingUp, title: '"We Get More High-Quality Orders"', desc: "Serious buyers. Real inquiries. More closed deals." },
              { num: "02", icon: Users, title: '"We Attract International Clients"', desc: "Our website builds instant global trust." },
              { num: "03", icon: Eye, title: '"Our Brand Looks Premium"', desc: "Modern design that positions us as an authority." },
              { num: "04", icon: Zap, title: '"We Convert Visitors Faster"', desc: "Clear structure. Strong CTAs. More action." },
            ].map((item, index) => (
              <AnimatedSection key={item.num} delay={index * 100}>
                <div className="relative bg-card rounded-2xl p-8 pl-10 border border-border/50 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                  <span className="absolute top-6 right-6 text-5xl font-display font-black text-primary/10 group-hover:text-primary/20 transition-colors select-none">
                    {item.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
                Why Choose <span className="gradient-text">BQ Solutions</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item, index) => (
                <AnimatedSection key={item.text} delay={index * 80}>
                  <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – PORTFOLIO SHOWCASE */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Recent <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Premium websites we've built for businesses ready to dominate their industry.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 120}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-3">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex gap-3">
                          <div className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center">
                            <ExternalLink size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl p-10 md:p-20 text-center text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "30px 30px"
              }} />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
                  Your Website Should Work As Hard As You Do.
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
                  If you're serious about growing your business, let's build a website that reflects your true potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="secondary" size="xl" className="gap-2 font-bold w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8">
                      Schedule Your Free Strategy Call <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <a href="https://wa.me/923708099033" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="xl"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8"
                    >
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
