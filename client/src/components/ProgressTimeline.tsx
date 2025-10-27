import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProgressStep = "profile" | "symptoms" | "severity" | "analysis" | "report";

interface ProgressTimelineProps {
  currentStep: ProgressStep;
}

const STEPS: { id: ProgressStep; label: string; order: number }[] = [
  { id: "profile", label: "Profile", order: 1 },
  { id: "symptoms", label: "Symptoms", order: 2 },
  { id: "severity", label: "Severity", order: 3 },
  { id: "analysis", label: "Analysis", order: 4 },
  { id: "report", label: "Report", order: 5 },
];

export function ProgressTimeline({ currentStep }: ProgressTimelineProps) {
  const currentOrder = STEPS.find((s) => s.id === currentStep)?.order || 1;

  return (
    <div className="flex items-center gap-2" data-testid="progress-timeline">
      {STEPS.map((step, index) => {
        const isCompleted = step.order < currentOrder;
        const isCurrent = step.id === currentStep;
        const isFuture = step.order > currentOrder;

        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                  isCompleted && "bg-primary text-primary-foreground",
                  isCurrent && "bg-primary/20 border-2 border-primary text-primary animate-pulse",
                  isFuture && "bg-muted text-muted-foreground"
                )}
                data-testid={`step-${step.id}`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{step.order}</span>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium uppercase tracking-wide",
                  (isCompleted || isCurrent) && "text-foreground",
                  isFuture && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
            
            {index < STEPS.length - 1 && (
              <div
                className={cn(
                  "w-8 h-0.5 mx-1 transition-all duration-300",
                  isCompleted ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
