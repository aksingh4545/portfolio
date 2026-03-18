import { ArrowUp, Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/aksingh4545" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ankit-kumar-singh-3221a0254" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ankit_akr45" },
  { name: "Email", icon: Mail, href: "mailto:aksingh4539047@gmail.com" }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-3">
              Ankit Kumar Singh
            </h3>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Data Engineer specialized in building scalable data platforms, 
              real-time streaming systems, and production-ready ML pipelines. 
              Building calm data systems, one reliable pipeline at a time.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  title={social.name}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="/Ak_POD.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Ankit Kumar Singh. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "Vite", "Tailwind CSS", "Lucide Icons", "Radix UI"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-secondary/30 text-muted-foreground rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
