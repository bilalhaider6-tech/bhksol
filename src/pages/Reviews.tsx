import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "BHK Solutions transformed our online presence completely. Our leads increased by 300% within the first month! The team was professional, responsive, and truly understood our vision. I couldn't recommend them more highly.",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "LocalBrew Coffee",
    content: "Professional, fast, and incredibly talented. They understood our vision from day one and delivered a website that exceeded all expectations. Our customers love the new design!",
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "StyleHub Fashion",
    content: "The best investment we made for our business. The website pays for itself every single month through increased online sales. BHK Solutions is truly outstanding.",
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner",
    company: "FitLife Gym",
    content: "They created a website that perfectly captures our gym's energy and vibe. The booking system works flawlessly, and our membership inquiries have doubled since launch.",
    rating: 5,
    featured: false,
  },
  {
    id: 5,
    name: "Amanda White",
    role: "Partner",
    company: "LegalPro Associates",
    content: "As a law firm, we needed a website that conveyed trust and professionalism. BHK Solutions delivered exactly that. Our clients often compliment our online presence.",
    rating: 5,
    featured: false,
  },
  {
    id: 6,
    name: "Robert Garcia",
    role: "Creative Director",
    company: "HomeStyle Interiors",
    content: "The portfolio website they built for us is stunning. It showcases our work beautifully and has helped us attract high-end clients we couldn't reach before.",
    rating: 5,
    featured: false,
  },
  {
    id: 7,
    name: "Jennifer Lee",
    role: "Founder",
    company: "Bloom Florist",
    content: "From start to finish, working with BHK Solutions was a pleasure. They were patient with our requests and delivered a beautiful, functional website on time.",
    rating: 5,
    featured: false,
  },
  {
    id: 8,
    name: "Mark Wilson",
    role: "CEO",
    company: "TechCore Solutions",
    content: "We've worked with many agencies, but BHK Solutions stands out. Their attention to detail, technical expertise, and customer service are unmatched in the industry.",
    rating: 5,
    featured: false,
  },
];

const Reviews = () => {
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const otherTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Client <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Don't just take our word for it. Here's what our clients have to say about working with BHK Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
              <div className="text-primary-foreground/80 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100+</div>
              <div className="text-primary-foreground/80 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5★</div>
              <div className="text-primary-foreground/80 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">85%</div>
              <div className="text-primary-foreground/80 text-sm">Return Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Featured <span className="text-primary">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            More <span className="text-primary">Reviews</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={12} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Let's create something amazing together. Start your project today and experience the BHK Solutions difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="gap-2">
                  Get Started Today <ArrowRight size={18} />
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

export default Reviews;
