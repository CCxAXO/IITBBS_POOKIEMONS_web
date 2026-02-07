import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  risk: 'HIGH' | 'MEDIUM' | 'LOW';
  className?: string;
}

export const RiskBadge = ({ risk, className }: RiskBadgeProps) => {
  const riskConfig = {
    HIGH: {
      class: 'risk-high',
      label: 'HIGH RISK',
      icon: '⚠️',
    },
    MEDIUM: {
      class: 'risk-medium',
      label: 'MEDIUM',
      icon: '⚡',
    },
    LOW: {
      class: 'risk-low',
      label: 'LOW',
      icon: '✓',
    },
  };

  const config = riskConfig[risk];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        config.class,
        className
      )}
    >
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
};
