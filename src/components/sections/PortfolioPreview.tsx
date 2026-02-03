import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import wedding5 from "@/assets/wedding-5.jpg";
import party1 from "@/assets/party-1.jpg";
import matricImg from "@/assets/portfolio-matric.jpg";

const previewProjects = [
  { title: "Weddings", image: wedding5 },
  { title: "Parties", image: party1 },
  { title: "Matric Dance", image: matricImg },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
            Our Work
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mt-4">
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <Link
              key={project.title}
              to="/projects"
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl tracking-wider text-foreground">
                  {project.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-foreground/0 group-hover:border-foreground/20 transition-colors duration-300 rounded-sm" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects" className="group">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
