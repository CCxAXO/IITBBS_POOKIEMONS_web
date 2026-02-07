import { Orbit } from "lucide-react";

export const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="relative p-6 rounded-full bg-secondary/50 border border-primary/20 animate-pulse-glow">
          <Orbit className="w-12 h-12 text-primary animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-foreground font-display font-semibold text-lg">
          Scanning the cosmos...
        </p>
        <p className="text-muted-foreground text-sm">
          Fetching asteroid data from NASA
        </p>
      </div>
    </div>
  );
};
