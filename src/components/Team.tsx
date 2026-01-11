import { Anchor } from "lucide-react";
import ASL from "@/assets/ASL.jpg";

const Team = () => {
  const teamMembers = [
    { name: "Alexandre Leal", role: "Skipper/Captain", status: "Current", avatarSrc: ASL, },
    { name: "André 'Bochecha' Fonseca", role: "Tactician" },
    { name: "Gabriel Ribeiro", role: "Trimmer"},
    { name: "Isaque Soares", role: "Bowman"},
    { name: "Thiago Knippling", role: "Trimmer" },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            The Crew
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            The Team That Built Our <span className="text-gradient-ocean">Legacy</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our world-class crew, including both past and current members, reflects a legacy of shared experience, passion, and an enduring commitment to excellence.
          </p>
        </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg border border-border p-8 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-ocean mx-auto mb-6 flex items-center justify-center overflow-hidden">
                {member.avatarSrc ? (
                  <img
                    src={member.avatarSrc}
                    alt={`${member.name} avatar`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Anchor className="w-8 h-8 text-primary-foreground" />
                )}
              </div>

              <h4 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {member.role}
              </p>
              {member.status && (
                <p className="text-xs font-thin italic uppercase tracking-wider text-tertiary">
                  {member.status}
                </p>
              )}
            </div>
              {/* <div className="w-20 h-20 rounded-full bg-gradient-ocean mx-auto mb-6 flex items-center justify-center">
                <Anchor className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {member.role}
              </p>
               <p className="text-xs font-thin-text italic uppercase tracking-wider text-tertiary">
                {member.status}
              </p>
            </div> */}
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
