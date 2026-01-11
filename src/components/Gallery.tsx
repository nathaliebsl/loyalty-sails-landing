import galleryRace1 from "@/assets/gallery-race-1.jpg";
import gallerySunset from "@/assets/gallery-sunset.jpg";
import galleryPrep from "@/assets/gallery-prep.jpg";
import galleryAerial from "@/assets/gallery-aerial[L36].jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import galleryRace2 from "@/assets/gallery-race-2.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: galleryRace1,
    title: "Full Speed Ahead",
    category: "[C30] Loyalty 06",
  },
  {
    src: gallerySunset,
    title: "Golden Hour Sail",
    category: "[SwanClub36] Loyalty 36",
  },
  {
    src: galleryPrep,
    title: "Morning Preparations",
    category: "[SwanClub36] Loyalty 36",
  },
  {
    src: galleryAerial,
    title: "Aerial View",
    category: "[C30] Loyalty 06",
  },
  {
    src: galleryCelebration,
    title: "Victory Celebration",
    category: "Team Moments",
  },
  {
    src: galleryRace2,
    title: "Cutting Through Waves",
    category: "[C30] Loyalty 06",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "[C30] Loyalty 06", "[SwanClub36] Loyalty 36", "Team Moments"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4 block">
            Photo Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Our Journey on the Water
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From intense race days to quiet moments of preparation, explore the
            life of Loyalty Sailing through our lens.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() =>
                setSelectedImage(galleryImages.findIndex((img) => img.src === image.src))
              }
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-accent text-sm font-medium tracking-wider uppercase">
                    {image.category}
                  </span>
                  <h3 className="font-display text-xl text-foreground mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-5xl max-h-[90vh] w-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-accent text-sm font-medium tracking-wider uppercase">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-1">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
