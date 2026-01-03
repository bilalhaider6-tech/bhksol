import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
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
  {
    icon: Heart,
    title: "Client First",
    description: "Your success is our success. We prioritize understanding your needs and delivering solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality. Every website we build meets the highest standards of design and functionality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends and technologies to bring fresh, innovative solutions to every project.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Clear communication and honest pricing. No hidden fees, no surprises – just straightforward partnership.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              About <span className="text-primary">BHK Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              We're a passionate team of web developers dedicated to helping businesses succeed online through stunning, high-performing websites.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BHK Solutions was founded with a simple mission: to help businesses of all sizes establish a powerful online presence without the complexity and confusion that often comes with web development.
                </p>
                <p>
                  We noticed that many small and medium businesses struggle to find reliable web development partners who understand their needs, deliver on time, and don't break the bank. That's where we come in.
                </p>
                <p>
                  Today, we've helped over 100 businesses transform their digital presence, from local startups to established brands. Our approach combines technical expertise with genuine care for our clients' success.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold">B</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">BHK Solutions</h3>
                    <p className="text-muted-foreground text-sm">Building Digital Success</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with websites that not only look stunning but also drive real results. We believe every business deserves a professional online presence that helps them grow and succeed.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted web development partner for businesses worldwide, known for delivering exceptional quality, outstanding service, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">BHK Solutions?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
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
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Let's discuss your project and see how we can help your business grow online.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="gap-2">
                Get In Touch <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
