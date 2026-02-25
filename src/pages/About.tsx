import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  { icon: Heart, title: "Client First", description: "Your success is our success. We prioritize understanding your needs and delivering solutions that exceed expectations." },
  { icon: Award, title: "Quality Excellence", description: "We never compromise on quality. Every website we build meets the highest standards of design and functionality." },
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of trends and technologies to bring fresh, innovative solutions to every project." },
  { icon: Users, title: "Transparency", description: "Clear communication and honest pricing. No hidden fees, no surprises – just straightforward partnership." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary/6 rounded-full blur-3xl animate-blob-delay" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              About <span className="gradient-text">BQ Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of web developers dedicated to helping businesses succeed online through stunning, high-performing websites.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>BQ Solutions was founded with a simple mission: to help businesses of all sizes establish a powerful online presence without the complexity and confusion that often comes with web development.</p>
                <p>We noticed that many small and medium businesses struggle to find reliable web development partners who understand their needs, deliver on time, and don't break the bank. That's where we come in.</p>
                <p>Today, we've helped over 100 businesses transform their digital presence, from local startups to established brands.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                  <div className="text-center p-8">
                    <img src={logo} alt="BQ Solutions Logo" className="w-32 h-32 object-contain mx-auto mb-5" />
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">BQ Solutions</h3>
                    <p className="text-muted-foreground text-sm">Building Digital Success</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/8 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with websites that not only look stunning but also drive real results. We believe every business deserves a professional online presence.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted web development partner for businesses worldwide, known for delivering exceptional quality, outstanding service, and measurable results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These principles guide everything we do and how we serve our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="text-center p-7 rounded-2xl glass-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">BQ Solutions?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We're not just another web development agency. Here's what makes us different:
              </p>
              <div className="space-y-4">
                {[
                  "Personalized attention to every project",
                  "Transparent pricing with no hidden fees",
                  "Fast turnaround without compromising quality",
                  "Ongoing support and maintenance",
                  "Results-driven approach focused on ROI",
                  "Modern, mobile-first designs",
                  "SEO-optimized from the ground up",
                  "24/7 customer support available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "100+", label: "Projects Completed" },
                  { value: "50+", label: "Happy Clients" },
                  { value: "5+", label: "Years Experience" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-6 shadow-card text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                    <div className="text-4xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl p-10 md:p-16 text-center text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-5">Ready to Work Together?</h2>
                <p className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg">
                  Let's discuss your project and see how we can help your business grow online.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="gap-2 font-bold">
                    Get In Touch <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
