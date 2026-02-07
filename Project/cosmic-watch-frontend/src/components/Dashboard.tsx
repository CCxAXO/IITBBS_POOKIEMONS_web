import { useAsteroids } from "@/hooks/useAsteroids";
import { Header } from "./Header";
import { StatsCard } from "./StatsCard";
import { AsteroidCard } from "./AsteroidCard";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { 
  Globe, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  Activity,
  Rocket
} from "lucide-react";

export const Dashboard = () => {
  const { asteroids, stats, isLoading, error, lastUpdated, refetch } = useAsteroids();

  const formatAvgDistance = (km: number) => {
    if (km >= 1000000) {
      return `${(km / 1000000).toFixed(1)}M km`;
    }
    return `${Math.round(km).toLocaleString()} km`;
  };

  return (
    <div className="min-h-screen">
      <Header 
        onRefresh={refetch} 
        isLoading={isLoading} 
        lastUpdated={lastUpdated} 
      />

      <main className="container mx-auto px-4 pb-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Objects"
            value={stats.total}
            subtitle="Tracked today"
            icon={Globe}
            variant="default"
          />
          <StatsCard
            title="High Risk"
            value={stats.highRisk}
            subtitle="Require monitoring"
            icon={ShieldAlert}
            variant="danger"
          />
          <StatsCard
            title="Medium Risk"
            value={stats.mediumRisk}
            subtitle="Close approach"
            icon={AlertTriangle}
            variant="warning"
          />
          <StatsCard
            title="Low Risk"
            value={stats.lowRisk}
            subtitle="Safe distance"
            icon={ShieldCheck}
            variant="success"
          />
        </div>

        {/* Secondary Stats */}
        {!isLoading && !error && asteroids.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatsCard
              title="Hazardous Objects"
              value={stats.hazardous}
              subtitle="Potentially dangerous"
              icon={Rocket}
              variant="danger"
            />
            <StatsCard
              title="Avg Distance"
              value={formatAvgDistance(stats.avgDistance)}
              subtitle="From Earth"
              icon={Activity}
              variant="default"
            />
            <StatsCard
              title="Avg Velocity"
              value={`${Math.round(stats.avgVelocity).toLocaleString()} km/h`}
              subtitle="Approach speed"
              icon={Activity}
              variant="default"
            />
          </div>
        )}

        {/* Content Area */}
        {isLoading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} onRetry={refetch} />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-2xl text-foreground">
                Near-Earth Objects
              </h2>
              <p className="text-muted-foreground text-sm">
                {asteroids.length} objects detected
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {asteroids.map((asteroid, index) => (
                <AsteroidCard 
                  key={asteroid.id} 
                  asteroid={asteroid} 
                  index={index}
                />
              ))}
            </div>

            {asteroids.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No asteroid data available. Try refreshing.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Data provided by{" "}
            <a 
              href="https://api.nasa.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              NASA NeoWs API
            </a>
            {" "}• Built by Pookiemons
          </p>
        </div>
      </footer>
    </div>
  );
};
