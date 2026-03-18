import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Instagram,
  Globe,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/aksingh4545",
      label: "View my code and projects",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ankit-kumar-singh-3221a0254",
      label: "Connect professionally",
      color: "hover:text-[#0077b5]"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ankit_akr45",
      label: "Follow my journey",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:aksingh4539047@gmail.com",
      label: "Send me an email",
      color: "hover:text-primary"
    },
    {
      name: "Portfolio",
      icon: Globe,
      url: "https://portfolio-five-orpin-40.vercel.app",
      label: "View deployed portfolio",
      color: "hover:text-green-500"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/917895236630",
      label: "Chat on WhatsApp",
      color: "hover:text-[#25D366]"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind, want to collaborate, or just want to connect? 
          Feel free to reach out. I'm always open to discussing new opportunities 
          and innovative data solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Reach out through any of these channels. I typically respond within 24-48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:aksingh4539047@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    aksingh4539047@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+917895236630"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7895236630
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Location</h4>
                  <span className="text-muted-foreground">
                    Bhopal, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-6">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                    title={social.label}
                  >
                    <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                      <social.icon className={cn("h-5 w-5 transition-colors", social.color)} />
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="pt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="font-medium text-sm">Available for Opportunities</p>
                  <p className="text-xs text-muted-foreground">Open to Data Engineering roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              I respect your privacy. Your information will not be shared with any third party.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
