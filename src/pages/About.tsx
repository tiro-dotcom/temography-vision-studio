import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import temogoPortrait from "@/assets/temogo-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
                Our Story
              </span>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-wider mt-4 mb-6">
                ABOUT TEMOGRAPHY
              </h1>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                Youthful creativity meets professional excellence in visual storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <img
                  src={temogoPortrait}
                  alt="Temogo Monye - Founder of Temography"
                  className="w-full aspect-[4/5] object-cover rounded-sm cinematic-border"
                />
                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-sm border border-border/30">
                  <p className="font-display text-4xl tracking-wider">18</p>
                  <p className="font-body text-sm text-muted-foreground">Years Young</p>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-8">
                  MEET TEMOGO MONYE
                </h2>
                <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                  <p>
                    Temography was founded by Temogo Monye, an 18-year-old skilled photographer 
                    and videographer with a passion for capturing life's most precious moments.
                  </p>
                  <p>
                    Trained and apprenticed by the experienced Bonolo Monye, Temogo brings a 
                    unique blend of youthful creativity and professional expertise to every 
                    project. This mentorship has provided him with strong professional foundations 
                    while allowing his natural artistic vision to flourish.
                  </p>
                  <p>
                    Based in Mahikeng, South Africa, Temography represents a new generation of 
                    visual storytellers. We believe that every moment deserves to be captured 
                    with care, creativity, and cinematic quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-center mb-16">
              OUR VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Creativity",
                  description: "We approach every project with fresh eyes and innovative ideas, ensuring unique and memorable results.",
                },
                {
                  title: "Professionalism",
                  description: "Despite our youth, we maintain the highest standards of service, reliability, and quality.",
                },
                {
                  title: "Passion",
                  description: "Photography and videography aren't just services we offer—they're our calling and our craft.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-8 bg-card rounded-sm border border-border/30 text-center"
                >
                  <h3 className="font-display text-2xl tracking-wider mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {value.description}
                  </p>
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

export default About;
