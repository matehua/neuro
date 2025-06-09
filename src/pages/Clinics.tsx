
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcedureCard, { ProcedureProps } from "@/components/ProcedureCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample procedures data (will use translations from context)
const allProcedures: ProcedureProps[] = [
  {
    id: "1",
    name: "Cervical Disc Replacement",
    description: "A minimally invasive procedure to relieve neck pain and restore normal activity.",
    price: 180,
    capacity: 2,
    size: 45,
    image: "/images/cervical-disc-implants-examples-arthroplasty-disc-replacement-cervical-lumbar-spine-neurosurgery.jpg",
    location: "Brain",
    features: ["Minimally Invasive", "Motion Preserving", "Quick Recovery", "Advanced Technology", "High Success Rate", "Outpatient"]
  },
  {
    id: "2",
    name: "Lumbar Disc Replacement",
    description: "A motion-preserving surgery to relieve back pain and restore quality of life.",
    price: 250,
    capacity: 4,
    size: 75,
    image: "/images/lumbar-disc-implants-examples-arthroplasty-replacement-cervical-lumbar-spine-advanced-technology-robotic-spine.jpg",
    location: "Spine",
    features: ["Minimally Invasive", "Motion Preserving", "Quick Recovery", "Advanced Technology", "High Success Rate", "Short Hospital Stay"]
  },
  {
    id: "3",
    name: "Image-Guided Surgery",
    description: "Using advanced navigation technology for improved surgical precision and safety.",
    price: 150,
    capacity: 2,
    size: 35,
    image: "/images/brain-tumour-navigated-image-guided-surgery-miNEURO-Aliashekvich-robotic.jpg",
    location: "Brain",
    features: ["Precision", "Safety", "Advanced Technology", "Minimally Invasive", "Complex Cases"]
  },
  {
    id: "4",
    name: "Robotic Spine Surgery",
    description: "Robotic-assisted spine surgery offers unprecedented precision and control, making complex spine procedures safer and more effective.",
    price: 350,
    capacity: 4,
    size: 90,
    image: "/images/robotic-spine-surgery-lumbar-fusion-minimally-invasive-Mazor-Stryker-NuVasive-Renaissance-navigation-neurosurgery.jpg",
    location: "Spine",
    features: ["Robotic Assistance", "High Precision", "Complex Cases", "Minimally Invasive", "Advanced Technology", "3D Planning", "Real-time Guidance"]
  },
  {
    id: "5",
    name: "Brain Tumour Removal",
    description: "Safe removal of brain tumours using minimally-invasive techniques and image guidance to maximise preservation of healthy tissue.",
    price: 120,
    capacity: 2,
    size: 28,
    image: "/images/brain-tumour-image-guided-surgery-minimally-invasive-advanced-neurosurgery-aliashkevich-mineuro.jpg",
    location: "Brain",
    features: ["Minimally Invasive", "Image Guidance", "Tissue Preservation", "Advanced Technology", "Precision Surgery"]
  },
  {
    id: "6",
    name: "Peripheral Nerve Surgery",
    description: "Minimally-invasive procedures to treat nerve pain, compression, and tumours.",
    price: 160,
    capacity: 3,
    size: 55,
    image: "/images/nerve-spinal-cord-decompression-arthroplasty-disc-replacement-cervical-lumbar.jpg",
    location: "Nerve",
    features: ["Nerve Decompression", "Tumour Removal", "Pain Relief", "Minimally Invasive", "Quick Recovery", "Outpatient"]
  },
];

export default function Clinics() {
  const { t } = useLanguage();
  const [filteredProcedures, setFilteredProcedures] = useState<ProcedureProps[]>(allProcedures);
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([100, 350]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = allProcedures;

    // Filter by capacity
    if (capacityFilter !== "all") {
      const capacity = parseInt(capacityFilter);
      result = result.filter(proc => proc.capacity >= capacity);
    }

    // Filter by location
    if (locationFilter !== "all") {
      result = result.filter(proc => proc.location === locationFilter);
    }

    // Filter by price range
    result = result.filter(proc => proc.price >= priceRange[0] && proc.price <= priceRange[1]);

    setFilteredProcedures(result);
  }, [capacityFilter, locationFilter, priceRange]);

  // Get unique locations for filter
  const locations = ["all", ...new Set(allProcedures.map(proc => proc.location))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.specialties.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.specialties.subtitle}
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {/* Capacity Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.apartments.filters.guests}
                </label>
                <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.apartments.filters.guests} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.apartments.filters.anyGuests}</SelectItem>
                    <SelectItem value="1">{t.apartments.filters.onePlus}</SelectItem>
                    <SelectItem value="2">{t.apartments.filters.twoPlus}</SelectItem>
                    <SelectItem value="3">{t.apartments.filters.threePlus}</SelectItem>
                    <SelectItem value="4">{t.apartments.filters.fourPlus}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.apartments.filters.location}
                </label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.apartments.filters.location} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.apartments.filters.allLocations}</SelectItem>
                    {locations.filter(loc => loc !== "all").map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.apartments.filters.priceRange}: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  defaultValue={[100, 350]}
                  min={100}
                  max={350}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 animate-fade-in [animation-delay:200ms]">
              <p className="text-muted-foreground">
                {t.specialties.filters.showing} {filteredProcedures.length} {t.specialties.filters.of} {allProcedures.length} {t.specialties.filters.procedures}
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setCapacityFilter("all");
                  setLocationFilter("all");
                  setPriceRange([100, 350]);
                }}
              >
                {t.specialties.filters.resetFilters}
              </Button>
            </div>
          </div>
        </section>

        {/* Procedures Grid */}
        <section className="section">
          <div className="container">
            {filteredProcedures.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProcedures.map((procedure, index) => (
                  <div key={procedure.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <ProcedureCard procedure={procedure} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">{t.specialties.filters.noMatch}</h3>
                <p className="text-muted-foreground mb-6">{t.specialties.filters.adjustFilters}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCapacityFilter("all");
                    setLocationFilter("all");
                    setPriceRange([100, 350]);
                  }}
                >
                  {t.specialties.filters.resetFilters}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
