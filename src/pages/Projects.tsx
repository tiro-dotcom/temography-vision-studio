import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import party1 from "@/assets/party-1.jpg";
import party2 from "@/assets/party-2.jpg";
import matricImg from "@/assets/portfolio-matric.jpg";
import engagementImg from "@/assets/engagement-1.jpg";
import engagement2 from "@/assets/engagement-2.jpg";
import engagement3 from "@/assets/engagement-3.jpg";
import engagement4 from "@/assets/engagement-4.jpg";
import engagement5 from "@/assets/engagement-5.jpg";
import familyImg from "@/assets/portfolio-family.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";
import wedding8 from "@/assets/wedding-8.jpg";
import wedding9 from "@/assets/wedding-9.jpg";
import wedding10 from "@/assets/wedding-10.jpg";

const categories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "parties", label: "Parties" },
  { id: "matric", label: "Matric Dance" },
  { id: "engagements", label: "Engagements" },
  { id: "family", label: "Family" },
];

const projects = [
  { id: 1, category: "weddings", title: "Traditional Wedding", image: wedding1 },
  { id: 2, category: "weddings", title: "Sunset Silhouette", image: wedding2 },
  { id: 3, category: "weddings", title: "Bridal Elegance", image: wedding3 },
  { id: 4, category: "weddings", title: "Garden Beauty", image: wedding4 },
  { id: 5, category: "weddings", title: "First Dance", image: wedding5 },
  { id: 6, category: "weddings", title: "Intimate Moments", image: wedding6 },
  { id: 12, category: "weddings", title: "Bridal Procession", image: wedding7 },
  { id: 13, category: "weddings", title: "Beautiful Bride", image: wedding8 },
  { id: 14, category: "weddings", title: "Wedding Decor", image: wedding9 },
  { id: 15, category: "weddings", title: "Mr & Mrs", image: wedding10 },
  { id: 7, category: "parties", title: "Vintage Style", image: party1 },
  { id: 11, category: "parties", title: "Night Out", image: party2 },
  { id: 8, category: "matric", title: "Matric Dance Portrait", image: matricImg },
  { id: 9, category: "engagements", title: "Romantic Engagement", image: engagementImg },
  { id: 16, category: "engagements", title: "Family Elders", image: engagement2 },
  { id: 17, category: "engagements", title: "Mrs Mmonye", image: engagement3 },
  { id: 18, category: "engagements", title: "Traditional Celebration", image: engagement4 },
  { id: 19, category: "engagements", title: "Ring Ceremony", image: engagement5 },
  { id: 10, category: "family", title: "Family Portrait", image: familyImg },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
                Portfolio
              </span>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl mt-4 mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                A showcase of our finest work across weddings, events, and personal shoots.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 font-body text-sm tracking-wide transition-all duration-300 border rounded-sm ${
                    activeCategory === cat.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border/30 hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-body text-xs tracking-widest text-muted-foreground uppercase mb-1">
                      {categories.find((c) => c.id === project.category)?.label}
                    </p>
                    <h3 className="font-display text-2xl text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 border border-foreground/0 group-hover:border-accent/30 transition-colors duration-300 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
