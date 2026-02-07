import { Asteroid } from "@/types/asteroid";
import { RiskBadge } from "./RiskBadge";
import { Rocket, Gauge, MapPin } from "lucide-react";

interface AsteroidCardProps {
  asteroid: Asteroid;
  index: number;
}

export const AsteroidCard = ({ asteroid, index }: AsteroidCardProps) => {
  const formatDistance = (km: number) => {
    if (km >= 1000000) {
      return `${(km / 1000000).toFixed(2)}M km`;
    }
    return `${km.toLocaleString()} km`;
  };

  const formatVelocity = (kmph: number) => {
    return `${Math.round(kmph).toLocaleString()} km/h`;
  };

  // Clean asteroid name (remove parentheses content for cleaner display)
  const cleanName = asteroid.name.replace(/\(.*?\)/g, '').trim() || asteroid.name;

  return (
    <div
      className="cosmic-card rounded-xl p-5 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:cosmic-glow animate-fade-in group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground truncate text-lg group-hover:text-primary transition-colors">
            {cleanName}
          </h3>
          <p className="text-muted-foreground text-xs mt-1 font-mono">
            ID: {asteroid.id}
          </p>
        </div>
        <RiskBadge risk={asteroid.risk} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider">Distance</span>
          </div>
          <p className="text-foreground font-semibold">
            {formatDistance(asteroid.distance_km)}
          </p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gauge className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider">Velocity</span>
          </div>
          <p className="text-foreground font-semibold">
            {formatVelocity(asteroid.velocity_kmph)}
          </p>
        </div>
      </div>

      {asteroid.hazardous && (
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-risk-high">
            <Rocket className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Potentially Hazardous
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
