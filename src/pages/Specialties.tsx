import { useEffect, useState } from "react";
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

// Neurosurgical procedures data based on website content
const allProcedures: ProcedureProps[] = [
  {
    id: "cervical-disc-replacement",
    name: "Cervical Disc Replacement",
    description: "A motion-preserving surgery to relieve neck pain and restore normal activity. Preserves natural neck mobility and reduces adjacent segment degeneration.",
    consultationFee: 180,
    patientType: "Adults with cervical disc disease",
    recoveryTime: "14 days",
    complexity: 7,
    image: "/images/cervical-disc-implants-examples-arthroplasty-disc-replacement-cervical-lumbar-spine-neurosurgery.jpg",
    location: "Spine",
    benefits: ["Minimally Invasive", "Motion Preserving", "Quick Recovery", "Advanced Technology", "High Success Rate", "Outpatient"],
    // Backward compatibility
    price: 180,
    features: ["Minimally Invasive", "Motion Preserving", "Quick Recovery", "Advanced Technology", "High Success Rate", "Outpatient"]
  },
  {
    id: "lumbar-disc-replacement",
    name: "Lumbar Disc Replacement",
    description: "A motion-preserving surgery to relieve back pain and restore quality of life. Alternative to fusion that maintains natural spine movement.",
    consultationFee: 250,
    patientType: "Adults with lumbar disc disease",
    recoveryTime: "28 days",
    complexity: 8,
    image: "/images/lumbar-disc-implants-examples-arthroplasty-replacement-cervical-lumbar-spine-advanced-technology-robotic-spine.jpg",
    location: "Spine",
    benefits: ["Minimally Invasive", "Motion Preserving", "Advanced Technology", "High Success Rate", "Short Hospital Stay"],
    // Backward compatibility
    price: 250,
    features: ["Minimally Invasive", "Motion Preserving", "Advanced Technology", "High Success Rate", "Short Hospital Stay"]
  },
  {
    id: "image-guided-surgery",
    name: "Image-Guided Brain Surgery",
    description: "Using advanced navigation technology for improved surgical precision and safety when treating brain tumours and other conditions.",
    consultationFee: 150,
    patientType: "Patients with brain tumours or complex brain conditions",
    recoveryTime: "21 days",
    complexity: 9,
    image: "/images/brain-tumour-navigated-image-guided-surgery-miNEURO-Aliashekvich-robotic.jpg",
    location: "Brain",
    benefits: ["Brain Surgery", "Precision Navigation", "Advanced Technology", "Minimally Invasive", "Complex Cases"],
    // Backward compatibility
    price: 150,
    features: ["Brain Surgery", "Precision Navigation", "Advanced Technology", "Minimally Invasive", "Complex Cases"]
  },
  {
    id: "robotic-spine-surgery",
    name: "Robotic Spine Surgery",
    description: "Robotic-assisted spine surgery offers unprecedented precision and control, making complex spine procedures safer and more effective.",
    consultationFee: 350,
    patientType: "Patients requiring complex spine procedures",
    recoveryTime: "35 days",
    complexity: 9,
    image: "/images/robotic-spine-surgery-lumbar-fusion-minimally-invasive-Mazor-Stryker-NuVasive-Renaissance-navigation-neurosurgery.jpg",
    location: "Spine",
    benefits: ["Spine Surgery", "Robotic Assistance", "High Precision", "Minimally Invasive", "3D Planning", "Real-time Guidance"],
    // Backward compatibility
    price: 350,
    features: ["Spine Surgery", "Robotic Assistance", "High Precision", "Minimally Invasive", "3D Planning", "Real-time Guidance"]
  },
  {
    id: "brain-tumour-removal",
    name: "Brain Tumour Removal",
    description: "Safe removal of brain tumours using minimally-invasive techniques and image guidance to maximise preservation of healthy tissue.",
    consultationFee: 120,
    patientType: "Patients with brain tumours",
    recoveryTime: "30 days",
    complexity: 10,
    image: "/images/brain-tumour-image-guided-surgery-minimally-invasive-advanced-neurosurgery-aliashkevich-mineuro.jpg",
    location: "Brain",
    benefits: ["Brain Surgery", "Tumour Removal", "Tissue Preservation", "Advanced Technology", "Precision Surgery"],
    // Backward compatibility
    price: 120,
    features: ["Brain Surgery", "Tumour Removal", "Tissue Preservation", "Advanced Technology", "Precision Surgery"]
  },
  {
    id: "peripheral-nerve-surgery",
    name: "Peripheral Nerve Surgery",
    description: "Minimally-invasive procedures to treat nerve pain, compression, and tumours affecting the peripheral nervous system.",
    consultationFee: 160,
    patientType: "Patients with peripheral nerve conditions",
    recoveryTime: "14 days",
    complexity: 6,
    image: "/images/nerve-spinal-cord-decompression-arthroplasty-disc-replacement-cervical-lumbar.jpg",
    location: "Nerve",
    benefits: ["Nerve Decompression", "Tumour Removal", "Pain Relief", "Minimally Invasive", "Quick Recovery", "Outpatient"],
    // Backward compatibility
    price: 160,
    features: ["Nerve Decompression", "Tumour Removal", "Pain Relief", "Minimally Invasive", "Quick Recovery", "Outpatient"]
  },
];

export default function Specialties() {
  const { t } = useLanguage();
  const [filteredProcedures, setFilteredProcedures] = useState<ProcedureProps[]>(allProcedures);
  const [complexityFilter, setComplexityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [recoveryRange, setRecoveryRange] = useState<number[]>([0, 40]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = allProcedures;

    // Filter by complexity
    if (complexityFilter !== "all") {
      const complexity = parseInt(complexityFilter);
      result = result.filter(proc => proc.complexity && proc.complexity >= complexity);
    }

    // Filter by location
    if (locationFilter !== "all") {
      result = result.filter(proc => proc.location === locationFilter);
    }

    // Filter by recovery time range - convert string to number for comparison
    result = result.filter(proc => {
      const recoveryDays = typeof proc.recoveryTime === 'string'
        ? parseInt(proc.recoveryTime.replace(/\D/g, '')) || 0
        : proc.recoveryTime || 0;
      return recoveryDays >= recoveryRange[0] && recoveryDays <= recoveryRange[1];
    });

    setFilteredProcedures(result);
  }, [complexityFilter, locationFilter, recoveryRange]);

  // Get unique locations for filter
  const locations = ["all", ...new Set(allProcedures.map(proc => proc.location))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Neurosurgical Specialties
              </h1>
              <p className="text-muted-foreground text-lg">
                Advanced procedures using cutting-edge technology for brain, spine, and nerve conditions
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {/* Complexity Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Procedure Complexity
                </label>
                <Select value={complexityFilter} onValueChange={setComplexityFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select complexity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any complexity</SelectItem>
                    <SelectItem value="6">Moderate (6+)</SelectItem>
                    <SelectItem value="7">Advanced (7+)</SelectItem>
                    <SelectItem value="8">Complex (8+)</SelectItem>
                    <SelectItem value="9">Highly Complex (9+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.specialties.filters.location}
                </label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.specialties.filters.location} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.specialties.filters.allLocations}</SelectItem>
                    {locations.filter(loc => loc !== "all").map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Recovery Time Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Recovery Time (days)
                </label>
                <div className="pt-6 px-2">
                  <Slider
                    defaultValue={[0, 40]}
                    max={40}
                    min={0}
                    step={1}
                    value={recoveryRange}
                    onValueChange={setRecoveryRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{recoveryRange[0]} days</span>
                    <span>{recoveryRange[1]} days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 animate-fade-in [animation-delay:200ms]">
              <p className="text-muted-foreground">
                {t.specialties.filters.showing} {filteredProcedures.length} {t.specialties.filters.of} {allProcedures.length} {t.specialties.filters.procedures}
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setComplexityFilter("all");
                  setLocationFilter("all");
                  setRecoveryRange([0, 40]);
                }}
              >
                Reset Filters
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
                    setComplexityFilter("all");
                    setLocationFilter("all");
                    setRecoveryRange([0, 40]);
                  }}
                >
                  Reset Filters
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
