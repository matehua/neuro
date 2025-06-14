
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProcedureProps {
  id: string;
  name: string;
  description: string;
  price?: string;
  recoveryTime: string;
  complexity?: number;
  image: string;
  location: string;
  features: string[];
}

interface ProcedureCardProps {
  procedure: ProcedureProps;
}

export default function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={procedure.image}
          alt={procedure.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-primary">
            <MapPin className="h-3 w-3 mr-1" />
            {procedure.location}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{procedure.name}</CardTitle>
        <CardDescription className="text-sm">{procedure.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {procedure.recoveryTime} days recovery
          </div>
          {procedure.price && (
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              ${procedure.price}k
            </div>
          )}
        </div>
        
        {procedure.complexity && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="h-4 w-4 mr-1" />
            Complexity: {procedure.complexity}/10
          </div>
        )}
        
        <div className="flex flex-wrap gap-1">
          {procedure.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {procedure.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{procedure.features.length - 3} more
            </Badge>
          )}
        </div>
        
        <Button asChild className="w-full">
          <Link to={`/expertise/${procedure.id}`}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
