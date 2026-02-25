import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "CEO", company: "TechStart Inc.", content: "BQ Solutions transformed our online presence completely. Our leads increased by 300% within the first month! The team was professional, responsive, and truly understood our vision.", rating: 5, featured: true },
  { id: 2, name: "Michael Chen", role: "Founder", company: "LocalBrew Coffee", content: "Professional, fast, and incredibly talented. They understood our vision from day one and delivered a website that exceeded all expectations. Our customers love the new design!", rating: 5, featured: true },
  { id: 3, name: "Emily Rodriguez", role: "Marketing Director", company: "StyleHub Fashion", content: "The best investment we made for our business. The website pays for itself every single month through increased online sales. BQ Solutions is truly outstanding.", rating: 5, featured: true },
  { id: 4, name: "David Thompson", role: "Owner", company: "FitLife Gym", content: "They created a website that perfectly captures our gym's energy and vibe. The booking system works flawlessly, and our membership inquiries have doubled since launch.", rating: 5, featured: false },
  { id: 5, name: "Amanda White", role: "Partner", company: "LegalPro Associates", content: "As a law firm, we needed a website that conveyed trust and professionalism. BQ Solutions delivered exactly that. Our clients often compliment our online presence.", rating: 5, featured: false },
  { id: 6, name: "Robert Garcia", role: "Creative Director", company: "HomeStyle Interiors", content: "The portfolio website they built for us is stunning. It showcases our work beautifully and has helped us attract high-end clients we couldn't reach before.", rating: 5, featured: false },
  { id: 7, name: "Jennifer Lee", role: "Founder", company: "Bloom Florist", content: "From start to finish, working with BQ Solutions was a pleasure. They were patient with our requests and delivered a beautiful, functional website on time.", rating: 5, featured: false },
  { id: 8, name: "Mark Wilson", role: "CEO", company: "TechCore Solutions", content: "We've worked with many agencies, but BQ Solutions stands out. Their attention to detail, technical expertise, and customer service are unmatched in the industry.", rating: 5, featured: false },
];

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const otherTestimonials = testimonials.filter((t) => !t.featured);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Client <span className="gradient-text">Reviews</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with BQ Solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-primary text-primary-foreground wave-divider">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Satisfaction Rate" },
              { value: "100+", label: "Happy Clients" },
              { value: "5★", label: "Average Rating" },
              { value: "85%", label: "Return Clients" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100} direction="scale">
                <div className="text-3xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm font-medium">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
              Featured <span className="gradient-text">Testimonials</span>
            </h2>
          </AnimatedSection>

          {/* Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((t) => (
                  <div key={t.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-2xl p-10 shadow-card border border-border/50 text-center relative">
                      <Quote size={48} className="text-primary/15 mx-auto mb-4" />
                      <div className="flex gap-1 justify-center mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground text-lg leading-relaxed mb-8">"{t.content}"</p>
                      <div className="font-display font-semibold text-foreground text-lg">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card shadow-lg border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card shadow-lg border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight size={20} />
            </button>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {featuredTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-8" : "bg-primary/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
              More <span className="gradient-text">Reviews</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 80}>
                <div className="bg-card rounded-2xl p-7 shadow-card border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-display font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="font-display font-semibold text-foreground">{testimonial.name}</div>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={12} className="fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">{testimonial.role}, {testimonial.company}</div>
                      <p className="text-foreground text-sm leading-relaxed">"{testimonial.content}"</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-5">Ready to Join Our Happy Clients?</h2>
                <p className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg">
                  Start your project today and experience the BQ Solutions difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="gap-2 font-bold">
                      Get Started Today <ArrowRight size={18} />
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

export default Reviews;
