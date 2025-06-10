
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg",
    alt: "Surrey Hills medical facility exterior view",
    category: "exterior"
  },
  {
    id: 2,
    src: "/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-doctor-desk.jpg",
    alt: "Modern neurosurgery consultation suite",
    category: "rooms"
  },
  {
    id: 3,
    src: "/images/neurosurgical-consultation-suite-Surrey-Hills-miNEURO-waiting-area.jpg",
    alt: "Patient waiting area with comfortable seating",
    category: "amenities"
  },
  {
    id: 4,
    src: "/images/bundoora-unihill-specialist-neurosurgical-examination-suite.jpg",
    alt: "Specialised neurosurgical examination suite",
    category: "rooms"
  },
  {
    id: 5,
    src: "/images/mornington-specialist-centre-reception-consulting-neurosurgery.jpg",
    alt: "Mornington medical facility exterior with landscaped entrance",
    category: "exterior"
  },
  {
    id: 6,
    src: "/images/union-station-surrey-hills-cafe-near-miNEURO-consulting-suites.jpg",
    alt: "Medical facility cafeteria for patients and visitors",
    category: "amenities"
  },
  {
    id: 7,
    src: "/images/Ales-Aliashkevich-operating-theatre-spine-brain-image-guided-neurosurgery.jpg",
    alt: "Operating theatre with advanced neurosurgical equipment",
    category: "rooms"
  },
  {
    id: 8,
    src: "/images/Parking-and-disabled-access.jpg",
    alt: "Accessible pathway to medical facility entrance",
    category: "exterior"
  },
  {
    id: 9,
    src: "/images/robotic-spine-surgery-lumbar-fusion-minimally-invasive-Mazor-Stryker-NuVasive-Renaissance-navigation-neurosurgery.jpg",
    alt: "Advanced robotic spine surgery equipment",
    category: "amenities"
  },
  {
    id: 10,
    src: "/images/operating-theatre-spine-brain-image-guided-neurosurgeon-microsurgery-maximum-precision-robotic-spine-Epworth-Richmond.jpg",
    alt: "Post-operative recovery suite",
    category: "rooms"
  },
  {
    id: 11,
    src: "/images/welcoming-environment-for-elderly-and-disabled-patients.jpg",
    alt: "Welcoming environment for elderly and disabled patients",
    category: "exterior"
  },
  {
    id: 12,
    src: "/images/neuromonitoring-EMG-MEP-SSEP-spinal-nerve-root-stimulation.jpg",
    alt: "Neuromonitoring equipment for spinal procedures",
    category: "amenities"
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);

    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };

  // Handle lightbox navigation
  const navigateGallery = useCallback((direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  }, [selectedImage, filteredImages]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages, navigateGallery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.gallery.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.gallery.subtitle}
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "exterior", "rooms", "amenities"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category === "all"
                    ? t.gallery.filters.all
                    : category === "exterior"
                      ? t.gallery.filters.exterior
                      : category === "rooms"
                        ? t.gallery.filters.rooms
                        : t.gallery.filters.amenities}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <SafeImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc="/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <SafeImage
                  src={filteredImages.find(img => img.id === selectedImage)?.src || ""}
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt || ""}
                  className="max-w-full max-h-[80vh] object-contain"
                  fallbackSrc="/images/medical-consulting.jpg"
                />
              )}
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
