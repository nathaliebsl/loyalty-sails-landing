import heroImage from "@/assets/hero-sailing.jpg";
import logo from "@/assets/loyalty-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sailing racing action"
          className="w-full h-full object-fit:cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-in">
          <img
            src={logo}
            alt="Loyalty Sailing Team"
            className="h-40 md:h-56 w-auto mx-auto mb-8 animate-float drop-shadow-2xl"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 animate-slide-up">
          <span className="text-foreground">Racing with</span>
          <br />
          <span className="text-gradient-ocean">Unwavering Loyalty</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Pushing boundaries on every wave. Loyalty Sailing Team competes at the highest level of competitive sailing with passion, precision, and teamwork.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#about"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded hover:bg-accent transition-all duration-300 shadow-glow hover:scale-105"
          >
            Discover Our Story
          </a>
          <a
            href="#achievements"
            className="px-8 py-4 border-2 border-foreground/30 text-foreground font-bold uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Results
          </a>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(220 40% 8%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
