
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
  // Additional properties for filtering and display
  price?: number;           // Alternative to consultationFee for backward compatibility
  complexity?: number;      // Procedure complexity rating (1-10)
  features?: string[];      // Alternative to benefits for backward compatibility
}

// Type for raw procedure data that might have different property names
interface RawProcedureData {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  consultationFee?: number;
  price?: number;
  patientType?: string;
  recoveryTime?: string | number;
  benefits?: string[];
  features?: string[];
  complexity?: number;
}

// Type guard to ensure data compatibility
export function isProcedurePropsValid(data: unknown): data is RawProcedureData {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;
  return (
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.image === 'string' &&
    typeof obj.location === 'string' &&
    (typeof obj.consultationFee === 'number' || typeof obj.price === 'number') &&
    (typeof obj.recoveryTime === 'string' || typeof obj.recoveryTime === 'number') &&
    (Array.isArray(obj.benefits) || Array.isArray(obj.features))
  );
}

// Utility function to normalize procedure data
export function normalizeProcedureData(data: RawProcedureData): ProcedureProps {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    consultationFee: data.consultationFee || data.price || 0,
    patientType: data.patientType || 'All Patients',
    recoveryTime: typeof data.recoveryTime === 'number' ? `${data.recoveryTime} days` : data.recoveryTime || 'Not specified',
    image: data.image,
    location: data.location,
    benefits: data.benefits || data.features || [],
    // Preserve additional properties
    price: data.price,
    complexity: data.complexity,
    features: data.features
  };
}

export default function ProcedureCard({ procedure: rawProcedure }: { procedure: ProcedureProps }) {
  const { t, language } = useLanguage();
  const deviceInfo = useDeviceDetection();
  const [isHovered, setIsHovered] = useState(false);

  // Normalize the procedure data to ensure compatibility
  const procedure = normalizeProcedureData(rawProcedure);

  // Defensive: Check if the translation mappings exist and index signature for string ids
  const getTranslatedField = (
    field: "name" | "description"
  ): string => {
    if (
      language !== "en" &&
      t.procedureDescriptions &&
      Object.prototype.hasOwnProperty.call(t.procedureDescriptions, procedure.id)
    ) {
      const desc = (t.procedureDescriptions as Record<string, { name?: string; description?: string }>)[procedure.id];
      if (desc && desc[field]) {
        return desc[field] as string;
      }
    }
    return procedure[field];
  };

  const translatedName = getTranslatedField("name");
  const translatedDescription = getTranslatedField("description");

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
