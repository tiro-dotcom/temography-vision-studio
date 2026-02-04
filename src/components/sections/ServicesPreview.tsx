import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Video, Heart, Users, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Event Photography",
    description: "Professional coverage of all your special events with artistic precision.",
  },
  {
    icon: Video,
    title: "Event Videography",
    description: "Cinematic video production that tells your story beautifully.",
  },
  {
    icon: Heart,
    title: "Wedding Coverage",
    description: "Complete photography and video packages for your big day.",
  },
  {
    icon: Users,
    title: "Family Shoots",
    description: "Natural, candid family portraits that capture genuine connections.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-sm border border-border/30 hover:border-accent/50 transition-all duration-300"
            >
              <service.icon className="h-10 w-10 text-accent mb-6 group-hover:text-accent transition-colors" />
              <h3 className="font-display text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cinematic" size="lg" asChild>
            <Link to="/services" className="group">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
