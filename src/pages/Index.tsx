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
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built from scratch that perfectly represent your brand and convert visitors into customers.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing platform that stands out.",
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    description: "Complete setup of your domain and reliable hosting so your website is always fast and accessible.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Websites that look and work perfectly on all devices - phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Speed optimization to ensure your website loads fast and keeps visitors engaged.",
  },
  {
    icon: Search,
    title: "SEO-Friendly",
    description: "Built with search engines in mind so your business gets found by the right customers.",
  },
];

const stats = [
  { value: "100+", label: "Websites Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
  { value: "24/7", label: "Support Available" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "BHK Solutions transformed our online presence completely. Our leads increased by 300% within the first month!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, LocalBrew Coffee",
    content: "Professional, fast, and incredibly talented. They understood our vision and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleHub",
    content: "The best investment we made for our business. The website pays for itself every single month.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
          <img
            src={heroBg}
            alt="Website development"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="opacity-0 animate-fade-in-down animation-delay-100 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              Professional Website Development Agency
            </div>

            <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Business Deserves a Website That{" "}
              <span className="text-primary">Actually Works</span>
            </h1>

            <p className="opacity-0 animate-fade-in-up animation-delay-300 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We build stunning, high-converting websites that turn visitors into customers. No website? Weak website? We fix that.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2">
                  Get Your Website <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Free Consultation
                </Button>
              </Link>
            </div>

            <div className="opacity-0 animate-fade-in-up animation-delay-500 mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to <span className="text-primary">Succeed Online</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide complete website solutions that help your business grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                View All Services <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Businesses Trust <span className="text-primary">BHK Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We don't just build websites – we build digital experiences that drive real business results. Here's what sets us apart:
              </p>

              <div className="space-y-6">
                {[
                  { icon: Users, title: "Client-Focused Approach", description: "Your goals are our priority. We listen, understand, and deliver solutions tailored to your business." },
                  { icon: Award, title: "Premium Quality", description: "Every website we build is crafted with attention to detail, modern design standards, and best practices." },
                  { icon: TrendingUp, title: "Results That Matter", description: "Our websites are designed to convert visitors into customers and grow your business." },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button variant="default" size="lg" className="gap-2">
                    Learn More About Us <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-card rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">100+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">5★</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from businesses we've helped succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="gap-2">
                View All Reviews <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
                Let's build a website that takes your business to the next level. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="xl" className="gap-2">
                    Get Your Website <ArrowRight size={20} />
                  </Button>
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
