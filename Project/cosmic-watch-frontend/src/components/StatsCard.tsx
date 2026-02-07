import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: 'default' | 'danger' | 'warning' | 'success';
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  variant = 'default',
  className 
}: StatsCardProps) => {
  const variantStyles = {
    default: 'border-border/50',
    danger: 'border-risk-high/30',
    warning: 'border-risk-medium/30',
    success: 'border-risk-low/30',
  };

  const iconStyles = {
    default: 'text-primary',
    danger: 'text-risk-high',
    warning: 'text-risk-medium',
    success: 'text-risk-low',
  };

  return (
    <div
      className={cn(
        "cosmic-card rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02]",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            {title}
          </p>
          <p className="text-3xl font-display font-bold text-foreground">
            {value}
          </p>
          {subtitle && (
            <p className="text-muted-foreground text-sm">
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-lg bg-secondary/50",
          iconStyles[variant]
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
