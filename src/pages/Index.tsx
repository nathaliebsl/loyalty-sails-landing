import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Calendar from "@/components/Calendar"; //new
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Gallery />
      <Team />
      <Calendar /> 
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
