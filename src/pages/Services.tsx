import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Video, Heart, Users, Sparkles, Star, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Event Photography",
    description: "Professional event coverage capturing every important moment with artistic precision and attention to detail.",
    features: ["Full event coverage", "High-resolution images", "Quick turnaround", "Online gallery"],
  },
  {
    icon: Video,
    title: "Event Videography",
    description: "Cinematic video production that tells your story beautifully with professional editing and sound.",
    features: ["4K video quality", "Cinematic editing", "Highlight reels", "Full-length videos"],
  },
  {
    icon: Heart,
    title: "Wedding Coverage",
    description: "Complete photography and video packages for your special day, from preparation to celebration.",
    features: ["Full-day coverage", "Couple sessions", "Ceremony & reception", "Album design"],
  },
  {
    icon: Star,
    title: "Matric Dance Shoots",
    description: "Glamorous portrait sessions for matric dance, capturing your elegance and excitement.",
    features: ["Portrait sessions", "Location shoots", "Same-day previews", "Print packages"],
  },
  {
    icon: Users,
    title: "Family & Lifestyle",
    description: "Natural, candid family portraits that capture genuine connections and precious moments.",
    features: ["Outdoor sessions", "Home shoots", "Multiple locations", "Extended family"],
  },
  {
    icon: Sparkles,
    title: "Custom Packages",
    description: "Tailored packages designed to meet your specific needs and vision for any special occasion.",
    features: ["Flexible options", "Personalized approach", "Competitive pricing", "Bundle deals"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
                What We Offer
              </span>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl mt-4 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                Professional photography and videography services tailored to capture 
                your most important moments with cinematic quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-8 bg-background rounded-sm border border-border/30 hover:border-accent/50 transition-all duration-300"
                >
                  <service.icon className="h-12 w-12 text-accent mb-6 group-hover:text-accent transition-colors" />
                  <h3 className="font-display text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-muted-foreground font-body text-sm"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Get a Quote
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
                Every project is unique. Contact us to discuss your vision and receive 
                a personalized quote tailored to your specific needs.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Contact Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
