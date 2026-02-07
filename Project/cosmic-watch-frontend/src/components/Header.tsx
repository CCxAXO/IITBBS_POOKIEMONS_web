import { Orbit, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
  lastUpdated: Date | null;
}

export const Header = ({ onRefresh, isLoading, lastUpdated }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="relative overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0 star-field opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground -ml-2 mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 animate-pulse-glow">
                <Orbit className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                  <span className="text-gradient-cosmic">Cosmic Watch</span>
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  Near-Earth Object Monitoring System
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-xl text-sm md:text-base">
              Real-time tracking and risk analysis of asteroids passing near Earth, 
              powered by NASA's NeoWs API.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <Button
              onClick={onRefresh}
              disabled={isLoading}
              className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Updating...' : 'Refresh Data'}
            </Button>
            
            {lastUpdated && (
              <p className="text-muted-foreground text-xs">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
