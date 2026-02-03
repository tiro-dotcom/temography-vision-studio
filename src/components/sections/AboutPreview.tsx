import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import temogoPortrait from "@/assets/temogo-portrait.jpg";

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-foreground/5 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={temogoPortrait}
              alt="Temogo Monye - Founder of Temography"
              className="w-64 md:w-72 aspect-[4/5] object-cover rounded-sm cinematic-border"
            />
          </div>

          {/* Content */}
          <div>
            <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
              About the Artist
            </span>
            <h2 className="font-display text-5xl md:text-6xl tracking-wider mt-4 mb-6">
              TEMOGO MONYE
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              At just 18 years old, Temogo Monye has already established himself as a 
              skilled photographer and videographer. Trained and apprenticed by Bonolo Monye, 
              he brings a fresh perspective combined with professional expertise to every project.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Temography represents youthful creativity, professionalism, and a commitment 
              to high-quality visual storytelling. Based in Mahikeng, South Africa, we 
              specialize in capturing the moments that matter most.
            </p>
            <Button variant="cinematic" size="lg" asChild>
              <Link to="/about" className="group">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
