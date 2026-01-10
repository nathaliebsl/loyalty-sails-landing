import { Anchor, Wind, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Championship Driven",
      description: "Competing in premier regattas and championships across the globe.",
    },
    {
      icon: Users,
      title: "Elite Team",
      description: "World-class sailors united by passion and dedication to excellence.",
    },
    {
      icon: Wind,
      title: "Innovation First",
      description: "Cutting-edge technology and techniques to maximize performance.",
    },
    {
      icon: Anchor,
      title: "Deep Roots",
      description: "Built on a foundation of maritime tradition and unwavering loyalty.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Our Mission
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Born to <span className="text-gradient-ocean">Race</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Loyalty Sailing Team represents the pinnacle of competitive sailing. Founded on principles of teamwork, precision, and relentless pursuit of victory, we push the limits of what's possible on the water.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight mb-3 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
