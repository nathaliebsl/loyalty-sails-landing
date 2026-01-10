import { Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Join the <span className="text-gradient-ocean italic">Journey</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in sponsorship opportunities, joining our crew, or following our racing adventures? We'd love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <a
              href="mailto:team@loyaltysailing.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">team@loyaltysailing.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Mediterranean Sea</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {/* INSTAGRAM */}
            <a
              href="http://instagram.com/_u/{loyaltysailing}/"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {/* TWITTER */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            {/* YOUTUBE */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:team@loyaltysailing.com"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded hover:bg-accent transition-all duration-300 shadow-glow hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
