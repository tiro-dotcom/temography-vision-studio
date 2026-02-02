import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 image-grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 opacity-0 animate-fade-up">
            TEMOGRAPHY
          </h1>
          <p className="font-body text-xl md:text-2xl text-foreground/80 tracking-wide mb-4 opacity-0 animate-fade-up delay-200">
            Behind the Camera
          </p>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-300">
            Premium photography and videography services bringing your special moments to life 
            with cinematic quality and artistic vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Book a Shoot</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <ChevronDown className="h-8 w-8 text-foreground/50 animate-bounce" />
      </div>
    </section>
  );
}
