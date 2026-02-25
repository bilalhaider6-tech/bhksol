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
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
  Clock,
  DollarSign,
  Headphones,
  Rocket,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", description: "Custom websites that perfectly represent your brand and convert visitors into customers." },
  { icon: RefreshCw, title: "E-commerce Stores", description: "Full-featured online stores with product management, payments, and order tracking." },
  { icon: Zap, title: "Landing Pages", description: "High-converting landing pages designed to capture leads and drive sales." },
  { icon: Bot, title: "AI-Powered Websites", description: "Smart websites with AI chatbots, personalization, and intelligent automation." },
  { icon: Smartphone, title: "Website Redesign", description: "Transform your outdated website into a modern, high-performing platform." },
  { icon: Search, title: "SEO Optimization", description: "Get found by the right customers with search engine optimized websites." },
];

const stats = [
  { value: "100+", label: "Websites Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
  { value: "24/7", label: "Support Available" },
];

const whyChooseUs = [
  { icon: Rocket, title: "Fast Delivery", description: "Your website ready in 2-4 weeks with rapid development process." },
  { icon: Award, title: "International Quality", description: "World-class designs that compete with global digital agencies." },
  { icon: DollarSign, title: "Affordable Pricing", description: "Premium quality websites at prices that fit your budget." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock support to keep your website running perfectly." },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechStart Inc.", content: "BQ Solutions transformed our online presence completely. Our leads increased by 300% within the first month!", rating: 5 },
  { name: "Michael Chen", role: "Founder, LocalBrew Coffee", content: "Professional, fast, and incredibly talented. They understood our vision and delivered beyond expectations.", rating: 5 },
  { name: "Emily Rodriguez", role: "Marketing Director, StyleHub", content: "The best investment we made for our business. The website pays for itself every single month.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 z-0" style={{ background: "var(--gradient-hero)" }}>
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-blob-delay" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-blob-delay-2" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection delay={100}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-primary/20">
                <Zap size={16} className="animate-pulse" />
                Premium Digital Agency
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-8">
                We Build High-Converting{" "}
                <br className="hidden md:block" />
                Websites That{" "}
                <span className="gradient-text">Grow Your Business</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                We create stunning, premium websites for businesses worldwide. From startups to enterprises — we turn your vision into a digital masterpiece.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="gap-2 shadow-glow">
                    Get Free Consultation <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="heroOutline" size="xl" className="gap-2">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                {["Fast Delivery", "Mobile Responsive", "SEO Optimized", "24/7 Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-primary text-primary-foreground wave-divider">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100} direction="scale">
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed Online</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From concept to launch, we provide complete website solutions that help your business grow.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 80}>
                <div className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                View All Services <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Why Choose{" "}
              <span className="gradient-text">BQ Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We don't just build websites – we build digital experiences that drive real business results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="text-center p-8 rounded-2xl glass-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <item.icon size={30} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              What Our{" "}
              <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it – hear from businesses we've helped succeed online.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100}>
                <div className="bg-card rounded-2xl p-7 shadow-card border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed flex-1">"{testimonial.content}"</p>
                  <div className="border-t border-border/50 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="gap-2">
                View All Reviews <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl p-10 md:p-20 text-center text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "30px 30px"
              }} />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
                  Ready to Get Started?
                </h2>
                <p className="text-primary-foreground/90 max-w-xl mx-auto mb-10 text-lg">
                  Let's build a website that takes your business to the next level. Get a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="xl" className="gap-2 font-bold">
                      Get Your Website <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="xl"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold"
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
