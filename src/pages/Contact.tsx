import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
  Clock,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      toast({ title: "Error", description: "Failed to send message. Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase">
              Free Strategy Call
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-[1.05] tracking-tight">
              Let's Build a Website That{" "}
              <span className="gradient-text">Works for You</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your business. We'll respond within 24 hours with clear next steps — no obligation, no pushy sales.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Glass Contact Form */}
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="glass-card-strong rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="h-12 rounded-xl bg-white/50 border-border/50 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="h-12 rounded-xl bg-white/50 border-border/50 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+92-3708099033" className="h-12 rounded-xl bg-white/50 border-border/50 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Tell us about your project</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your business and what kind of website you need..." rows={5} className="rounded-xl bg-white/50 border-border/50 focus:bg-white transition-colors" />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full gap-2 h-13" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (<>Book Strategy Call <Send size={18} /></>)}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center pt-1">
                    🔒 Your details stay private. We reply within 24 hours — no spam, ever.
                  </p>
                </form>
              </div>
            </AnimatedSection>


            {/* Contact Info */}
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Have a project in mind? We'd love to hear from you. Reach out and we'll respond within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Mail, title: "Email Us", info: "bqsolution26@gmail.com", href: "mailto:bqsolution26@gmail.com" },
                  { icon: Phone, title: "Call Us", info: "+92-3708099033", href: "tel:+923708099033" },
                  { icon: Clock, title: "Working Hours", info: "Mon - Fri: 9:00 AM - 6:00 PM" },
                  { icon: MapPin, title: "Location", info: "B-245 Block 13, F.B Area, Karachi" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.info}</a>
                      ) : (
                        <p className="text-muted-foreground">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-semibold text-foreground">Quick Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://wa.me/923708099033" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] text-white rounded-2xl py-4 px-6 font-medium hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                  <a href="https://www.instagram.com/bq_solutions26" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[hsl(330,80%,55%)] text-white rounded-2xl py-4 px-6 font-medium hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                    <Instagram size={20} /> Instagram
                  </a>
                  <a href="mailto:bqsolution26@gmail.com" className="flex items-center justify-center gap-2 bg-foreground text-background rounded-2xl py-4 px-6 font-medium hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                    <Mail size={20} /> Email
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30 wave-divider-top">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-10 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                { q: "How long does it take to build a website?", a: "Most projects are completed within 2-4 weeks, depending on the complexity and scope. We'll provide a detailed timeline during our strategy call." },
                { q: "What's included in your website packages?", a: "Every project includes custom design, development, mobile optimization, speed optimization, SEO-friendly structure, conversion strategy, and launch support." },
                { q: "Do you offer ongoing support?", a: "Yes! We provide 24/7 support for all our clients. We also offer maintenance packages to keep your website updated, secure, and performing at its best." },
                { q: "Who is this for?", a: "We work with serious businesses — startups, ecommerce brands, exporters, service companies, and agencies who want a premium website that drives real results." },
              ].map((faq, index) => (
                <AnimatedSection key={index} delay={index * 80}>
                  <div className="bg-card rounded-2xl p-7 shadow-card border border-border/50 hover:shadow-xl transition-all duration-300">
                    <h4 className="font-display font-semibold text-foreground mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
