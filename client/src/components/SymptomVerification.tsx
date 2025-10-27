import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SymptomVerificationProps {
  originalInput: string;
  correctedSymptom: string;
  onConfirm: () => void;
  onThinkAgain: () => void;  // New callback
}

export function SymptomVerification({
  originalInput,
  correctedSymptom,
  onConfirm,
  onThinkAgain,
}: SymptomVerificationProps) {
  return (
    <div className="bg-card border-2 border-primary30 rounded-lg p-4 space-y-4 animate-in zoom-in-95" data-testid="symptom-verification">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Symptom Detected</h3>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="flex-1 p-2 italic text-muted-foreground" data-testid="text-original-input">
          {originalInput}
        </div>
        <ArrowRight className="w-4 h-4 text-primary" />
        <div className="flex-1 font-semibold text-primary" data-testid="text-corrected-symptom">
          {correctedSymptom}
        </div>
      </div>
      <div className="flex gap-4">
        <Button onClick={onConfirm} className="flex-grow" data-testid="button-confirm-symptom">
          Confirm & Continue
        </Button>
        <Button onClick={onThinkAgain} variant="outline" className="flex-grow" data-testid="button-think-again">
          Think Again
        </Button>
      </div>
    </div>
  );
}

