const Achievements = () => {
  const stats = [
    { value: "15+", label: "Race Victories" },
    { value: "8", label: "Championships" },
    { value: "12", label: "Team Members" },
    { value: "2019", label: "Founded" },
  ];

  const achievements = [
    {
      year: "2025",
      title: "Mediterranean Cup",
      result: "1st Place",
      location: "Barcelona, Spain",
    },
    {
      year: "2024",
      title: "Atlantic Challenge",
      result: "2nd Place",
      location: "Newport, USA",
    },
    {
      year: "2024",
      title: "European Championship",
      result: "1st Place",
      location: "Marseille, France",
    },
    {
      year: "2023",
      title: "World Sailing Series",
      result: "3rd Place",
      location: "Sydney, Australia",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-secondary">
           //<div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
           LOYALTY TEAM
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Recent <span className="text-gradient-ocean">Stats</span>
          </h3>
        </div>
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-black text-gradient-ocean mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Results */} {/*
          <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Track Record
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Recent <span className="text-gradient-ocean">Results</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border last:border-b-0 gap-4"
            >
              <div className="flex items-center gap-6">
                <span className="text-3xl font-black text-primary">
                  {achievement.year}
                </span>
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground">{achievement.location}</p>
                </div>
              </div>
              <div className="md:text-right">
                <span className={`inline-block px-4 py-2 rounded font-bold uppercase text-sm tracking-wider ${
                  achievement.result === "1st Place"
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {achievement.result}
                </span> 
              </div>
            </div> 
          ))} 
        </div> */}
      </div>
    </section>
  );
};
export default Achievements;
