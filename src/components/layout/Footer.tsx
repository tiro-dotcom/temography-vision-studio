import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl tracking-widest text-foreground">
              TEMOGRAPHY
            </span>
            <p className="mt-4 text-muted-foreground font-body text-sm leading-relaxed">
              Behind the Camera
              <br />
              Premium photography and videography services in Mahikeng, South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About", "Projects", "Services", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-6">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0799963842"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
              >
                <Phone className="h-4 w-4" />
                079 996 3842
              </a>
              <a
                href="mailto:temogomonye@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
              >
                <Mail className="h-4 w-4" />
                temogomonye@gmail.com
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Temography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
