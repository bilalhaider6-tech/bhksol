import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
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

const thumb = (url: string) => `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

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
  { title: "Temla Rice", category: "Rice Brand & E-commerce", image: temlaRiceImg, url: "https://temlarice.com" },
  { title: "Oak & Iron Carpentry", category: "Carpentry", image: thumb("https://www.oak-iron-carpentry.com/"), url: "https://www.oak-iron-carpentry.com/" },
  { title: "Heritage Woodworks", category: "Carpentry", image: thumb("https://heritage-woodworks.com/"), url: "https://heritage-woodworks.com/" },
  { title: "Benjamin Franklin Plumbing", category: "Plumbing", image: thumb("https://www.benjaminfranklinplumbing.com/"), url: "https://www.benjaminfranklinplumbing.com/" },
  { title: "Roto-Rooter", category: "Plumbing", image: thumb("https://www.rotorooter.com/"), url: "https://www.rotorooter.com/" },
  { title: "WOW 1 DAY PAINTING", category: "Painting", image: thumb("https://www.wow1day.com/"), url: "https://www.wow1day.com/" },
  { title: "SOHO Painters", category: "Painting", image: thumb("https://sohopainters.com/"), url: "https://sohopainters.com/" },
  { title: "Safia Rice Mills", category: "Rice Export Business", image: safiaRiceImg, url: "https://safiaricemills.lovable.app" },
  { title: "Falak Rice E-Store", category: "E-commerce Store", image: falakRiceImg, url: "https://estore.falakrice.com" },
];

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0, 20, 0],
      x: [0, 15, -10, 5, 0],
      opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const Index = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" style={{ background: "var(--gradient-hero)" }}>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.15, 0.9, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
            animate={{ x: [0, -25, 15, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
            animate={{ x: [0, 20, -30, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* Extra glow orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Floating particles */}
          <FloatingParticle delay={0} x="10%" y="20%" size={6} />
          <FloatingParticle delay={1} x="80%" y="30%" size={4} />
          <FloatingParticle delay={2} x="60%" y="70%" size={8} />
          <FloatingParticle delay={3} x="25%" y="60%" size={5} />
          <FloatingParticle delay={1.5} x="70%" y="80%" size={6} />
          <FloatingParticle delay={2.5} x="40%" y="15%" size={4} />
          <FloatingParticle delay={0.5} x="90%" y="50%" size={7} />
          <FloatingParticle delay={3.5} x="15%" y="85%" size={5} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-foreground/5 text-foreground/70 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-foreground/10">
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Premium Website Agency
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-8">
                Premium Websites Built to{" "}
                <br className="hidden md:block" />
                <motion.span
                  className="gradient-text inline-block"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Dominate Your Industry
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                We design high-converting, modern, international-standard websites that turn visitors into customers and position your brand as the obvious choice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="hero" size="xl" className="gap-2 shadow-glow w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8">
                      Book Your Free Strategy Call <ArrowRight size={20} />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="heroOutline" size="xl" className="gap-2 w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8">
                      View Our Work
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                {["International Standard Designs", "Conversion-Focused Structure", "Mobile Optimized", "Fast Loading Speed"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.15, duration: 0.5 }}
                  >
                    <CheckCircle size={18} className="text-primary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-2.5 bg-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 – THE PROBLEM */}
      <section className="section-padding bg-foreground text-background relative overflow-hidden">
        {/* Animated background accents */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-[60px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-8"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <AlertTriangle size={24} className="text-primary" />
            </motion.div>
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
      <section className="section-padding relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container-custom relative z-10">
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

            <div className="max-w-2xl mx-auto">
              <AnimatedSection direction="up">
                <motion.div
                  className="bg-primary/5 border border-primary/10 rounded-2xl p-8"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px hsl(199 89% 48% / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-display font-bold text-foreground mb-5">We specialize in:</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    High-performance, conversion-focused website design & development.
                  </p>
                  <p className="text-foreground font-display font-semibold text-lg italic border-l-4 border-primary pl-4">
                    "Because mastery demands focus."
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR PROCESS */}
      <section className="section-padding bg-secondary/30 wave-divider-top relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Our Proven <span className="gradient-text">4-Step Website System</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <motion.div
                  className="relative text-center p-8 pt-12 rounded-2xl glass-card hover:shadow-xl transition-all duration-500 group h-full border border-border/50"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-bold px-4 py-1.5 rounded-full shadow-glow tracking-wider">
                    STEP {item.step}
                  </span>
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <item.icon size={28} />
                  </motion.div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION – RESULTS OF A PREMIUM WEBSITE */}
      <section className="section-padding relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-[80px]"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
        <div className="container-custom relative z-10">
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
                <motion.div
                  className="relative bg-card rounded-2xl p-8 pl-10 border border-border/50 shadow-card group h-full overflow-hidden"
                  whileHover={{ y: -6, boxShadow: "0 24px 48px -8px hsl(199 20% 20% / 0.12)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="absolute top-6 right-6 text-5xl font-display font-black text-primary/10 select-none"
                    whileHover={{ scale: 1.2 }}
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {item.num}
                  </motion.span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="section-padding relative overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
                Why Choose <span className="gradient-text">BQ Solutions</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item, index) => (
                <AnimatedSection key={item.text} delay={index * 80}>
                  <motion.div
                    className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card border border-border/50 group"
                    whileHover={{ y: -4, boxShadow: "0 24px 48px -8px hsl(199 20% 20% / 0.12)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <item.icon size={22} />
                    </motion.div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – PORTFOLIO SHOWCASE */}
      <section className="section-padding bg-secondary/30 wave-divider-top relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="container-custom relative z-10">
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
                  <motion.div
                    className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50"
                    whileHover={{ y: -12, boxShadow: "0 24px 48px -8px hsl(199 20% 20% / 0.15)" }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        >
                          <ExternalLink size={20} />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                  </motion.div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/portfolio">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Projects <ArrowRight size={18} />
                </Button>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <motion.div
              className="relative rounded-3xl p-10 md:p-20 text-center text-primary-foreground overflow-hidden"
              style={{ background: "var(--gradient-primary)" }}
              whileInView={{ scale: [0.97, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/[0.03] rounded-full"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="secondary" size="xl" className="gap-2 font-bold w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8">
                        Schedule Your Free Strategy Call <ArrowRight size={20} />
                      </Button>
                    </motion.div>
                  </Link>
                  <a href="https://wa.me/923708099033" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="xl"
                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8"
                      >
                        WhatsApp Us
                      </Button>
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
