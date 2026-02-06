import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Instagram, Facebook, Send, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message with form details
    const eventTypeLabels: Record<string, string> = {
      wedding: "Wedding",
      matric: "Matric Dance",
      party: "Party / Event",
      engagement: "Engagement",
      family: "Family Shoot",
      other: "Other",
    };
    
    const messageParts = [
      `*New Inquiry from Website*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      formData.phone ? `*Phone:* ${formData.phone}` : null,
      formData.eventType ? `*Event Type:* ${eventTypeLabels[formData.eventType] || formData.eventType}` : null,
      formData.date ? `*Event Date:* ${formData.date}` : null,
      ``,
      `*Message:*`,
      formData.message,
    ].filter(Boolean).join('\n');
    
    const whatsappUrl = `https://wa.me/27799963842?text=${encodeURIComponent(messageParts)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast.success("Opening WhatsApp with your message. Please send it to complete your inquiry!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span className="font-body text-sm tracking-widest text-muted-foreground uppercase">
                Get In Touch
              </span>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl mt-4 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                Ready to capture your special moments? Let's discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl mb-8">
                  Let's Connect
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-display text-xl mb-2">
                        Phone / WhatsApp
                      </h3>
                      <a
                        href="tel:0799963842"
                        className="text-muted-foreground hover:text-foreground transition-colors font-body"
                      >
                        079 996 3842
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-display text-xl mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:temogomonye@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors font-body"
                      >
                        temogomonye@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-display text-xl mb-2">
                        Location
                      </h3>
                      <p className="text-muted-foreground font-body">
                        Mahikeng, South Africa
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="p-3 bg-background rounded-sm border border-border/30 hover:border-accent/50 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="p-3 bg-background rounded-sm border border-border/30 hover:border-accent/50 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-12 p-6 bg-background rounded-sm border border-border/30">
                  <h3 className="font-display text-xl mb-3">
                    Quick Response?
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    Reach out via WhatsApp for faster communication.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <a
                      href="https://wa.me/27799963842"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm tracking-wider uppercase mb-2">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border/30 focus:border-foreground/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm tracking-wider uppercase mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border/30 focus:border-foreground/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm tracking-wider uppercase mb-2">
                        Phone
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border/30 focus:border-foreground/50"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm tracking-wider uppercase mb-2">
                        Event Date
                      </label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-background border-border/30 focus:border-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm tracking-wider uppercase mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 bg-background border border-border/30 rounded-sm text-foreground font-body focus:border-foreground/50 focus:outline-none"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="matric">Matric Dance</option>
                      <option value="party">Party / Event</option>
                      <option value="engagement">Engagement</option>
                      <option value="family">Family Shoot</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-sm tracking-wider uppercase mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border/30 focus:border-foreground/50 resize-none"
                      placeholder="Tell us about your event or project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
