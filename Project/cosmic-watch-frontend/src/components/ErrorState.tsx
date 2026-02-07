import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <div className="p-6 rounded-full bg-destructive/10 border border-destructive/20">
        <AlertTriangle className="w-12 h-12 text-destructive" />
      </div>
      <div className="text-center space-y-2 max-w-md">
        <p className="text-foreground font-display font-semibold text-lg">
          Connection Lost
        </p>
        <p className="text-muted-foreground text-sm">
          {message}
        </p>
        <p className="text-muted-foreground text-xs">
          Make sure your backend server is running on port 5000
        </p>
      </div>
      <Button
        onClick={onRetry}
        className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </Button>
    </div>
  );
};
