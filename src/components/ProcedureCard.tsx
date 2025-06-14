import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Clock, MapPin, Activity, Stethoscope, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";

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
  const deviceInfo = useDeviceDetection();
  const [isHovered, setIsHovered] = useState(false);

  // Use less strict lookup for translations; fallback when missing
  const translatedName =
    language !== 'en' &&
    t.procedureDescriptions &&
    (t.procedureDescriptions as any)[procedure.id]?.name
      ? (t.procedureDescriptions as any)[procedure.id].name
      : procedure.name;

  const translatedDescription =
    language !== 'en' &&
    t.procedureDescriptions &&
    (t.procedureDescriptions as any)[procedure.id]?.description
      ? (t.procedureDescriptions as any)[procedure.id].description
      : procedure.description;

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg transition-all duration-500 bg-card group",
        deviceInfo.isMobile
          ? "touch-feedback"
          : "hover:shadow-xl"
      )}
      onMouseEnter={() => !deviceInfo.isMobile && setIsHovered(true)}
      onMouseLeave={() => !deviceInfo.isMobile && setIsHovered(false)}
      onTouchStart={() => deviceInfo.isMobile && setIsHovered(true)}
      onTouchEnd={() => deviceInfo.isMobile && setIsHovered(false)}
    >
      <div className={cn(
        "relative overflow-hidden",
        deviceInfo.isMobile ? "h-48" : "h-64"
      )}>
        <img
          src={procedure.image}
          alt={translatedName}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end",
          deviceInfo.isMobile ? "p-mobile-md" : "p-6"
        )}>
          <div>
            <h3 className={cn(
              "text-white font-bold mb-1",
              deviceInfo.isMobile ? "mobile-lg" : "text-xl"
            )}>
              {translatedName}
            </h3>
            <div className={cn(
              "flex items-center text-white/80 mb-2",
              deviceInfo.isMobile ? "mobile-text" : "text-sm"
            )}>
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
              +{procedure.benefits.length - 3} {t.patientResources?.filters?.more || "more"}
            </div>
          )}
        </div>

        <div className="flex items-end justify-between pt-2">
          <div>
            <span className="text-xl font-bold">${procedure.consultationFee}</span>
            <span className="text-muted-foreground text-sm"> / consultation</span>
          </div>
          <Button asChild className="btn-primary">
            <Link to={`/expertise/${procedure.id}`}>{t.patientResources?.filters?.viewDetails || "View Details"}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
