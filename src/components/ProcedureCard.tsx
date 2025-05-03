
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Clock, MapPin, Activity, Stethoscope, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ProcedureProps {
  id: string;
  name: string;
  description: string;
  consultationFee: number;
  patientType: string;
  recoveryTime: string;
  image: string;
  location: string;
  benefits: string[];
}

export default function ProcedureCard({ procedure }: { procedure: ProcedureProps }) {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Use translated name and description if available
  const translatedName = language !== 'en' && t.procedureDescriptions[procedure.id]?.name
    ? t.procedureDescriptions[procedure.id].name
    : procedure.name;

  const translatedDescription = language !== 'en' && t.procedureDescriptions[procedure.id]?.description
    ? t.procedureDescriptions[procedure.id].description
    : procedure.description;

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={procedure.image}
          alt={translatedName}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">{translatedName}</h3>
            <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{procedure.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{procedure.patientType}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{procedure.recoveryTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-muted-foreground line-clamp-2">{translatedDescription}</p>

        <div className="flex flex-wrap gap-2">
          {procedure.benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
            >
              {benefit.includes("Pain") && <Activity className="h-3.5 w-3.5 mr-1" />}
              {benefit.includes("Minimally") && <Microscope className="h-3.5 w-3.5 mr-1" />}
              {benefit.includes("Recovery") && <Stethoscope className="h-3.5 w-3.5 mr-1" />}
              <span>{benefit}</span>
            </div>
          ))}
          {procedure.benefits.length > 3 && (
            <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              +{procedure.benefits.length - 3} {t.patientResources.filters.more}
            </div>
          )}
        </div>

        <div className="flex items-end justify-between pt-2">
          <div>
            <span className="text-xl font-bold">${procedure.consultationFee}</span>
            <span className="text-muted-foreground text-sm"> / consultation</span>
          </div>
          <Button asChild className="btn-primary">
            <Link to={`/expertise/${procedure.id}`}>{t.patientResources.filters.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
