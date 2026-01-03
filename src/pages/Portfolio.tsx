import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TechStart Inc.",
    category: "SaaS Platform",
    description: "A modern SaaS landing page with sleek design and high conversion rate.",
    features: ["Custom animations", "Lead generation forms", "Responsive design"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: 2,
    title: "LocalBrew Coffee",
    category: "Restaurant & Cafe",
    description: "An inviting website for a local coffee shop with online ordering.",
    features: ["Menu display", "Location map", "Contact form"],
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    id: 3,
    title: "StyleHub Fashion",
    category: "E-commerce",
    description: "A stylish online store with product catalog and shopping features.",
    features: ["Product gallery", "Filter & search", "Mobile-first"],
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    id: 4,
    title: "FitLife Gym",
    category: "Fitness & Health",
    description: "Dynamic fitness website with class schedules and membership info.",
    features: ["Class booking", "Trainer profiles", "Membership plans"],
    color: "from-green-500/20 to-green-600/10",
  },
  {
    id: 5,
    title: "LegalPro Associates",
    category: "Professional Services",
    description: "A professional law firm website building trust and credibility.",
    features: ["Service pages", "Team bios", "Client testimonials"],
    color: "from-slate-500/20 to-slate-600/10",
  },
  {
    id: 6,
    title: "HomeStyle Interiors",
    category: "Interior Design",
    description: "An elegant portfolio website showcasing interior design projects.",
    features: ["Image gallery", "Project showcase", "Contact integration"],
    color: "from-purple-500/20 to-purple-600/10",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Explore some of our recent projects. Each website is crafted with care to meet our clients' unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border/50 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Project Image Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <ExternalLink size={24} className="text-primary" />
                      </div>
                      <span className="text-xs text-foreground/70 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        View Project
                      </span>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Coming */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              More Projects <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We're constantly working on new exciting projects. Stay tuned for more amazing work, or better yet – let us build something amazing for you!
            </p>
            <Link to="/contact">
              <Button variant="default" size="lg" className="gap-2">
                Start Your Project <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want a Website Like These?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Let's create something amazing together. Get a free consultation and see how we can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="gap-2">
                  Get Free Consultation <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
