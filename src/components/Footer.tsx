import logo from "@/assets/loyalty-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Loyalty Sailing" className="h-10 w-auto" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#achievements" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Achievements
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 Loyalty Sailing Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
