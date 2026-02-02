import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-6">
            READY TO CREATE?
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
            Let's bring your vision to life. Whether it's a wedding, special event, or 
            personal shoot, we're here to capture your most precious moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Book a Shoot</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:0799963842">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
