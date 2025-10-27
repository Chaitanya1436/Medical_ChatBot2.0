import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Send, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  type?: "text" | "number";
}

interface TextInputWithSkipProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
  placeholder?: string;
  label?: string;
}

export function TextInputWithSkip({
  value,
  onChange,
  onSubmit,
  onSkip,
  placeholder,
  label,
}: TextInputWithSkipProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <Label>{label}</Label>}
      <div className="flex gap-2">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1"
          data-testid="input-text-with-skip"
        />
        <Button onClick={onSkip} variant="outline" className="flex items-center gap-1">
          <SkipForward className="w-4 h-4" />
          Skip
        </Button>
      </div>
    </div>
  );
}

export function TextInput({ value, onChange, onSubmit, placeholder, type = "text" }: TextInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="flex gap-2" data-testid="input-text-container">
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="flex-1"
        data-testid="input-text"
      />
      <Button
        onClick={onSubmit}
        disabled={!value.trim()}
        size="icon"
        data-testid="button-submit-text"
      >
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
}

interface GenderSelectProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function GenderSelect({ value, onChange, onSubmit }: GenderSelectProps) {
  return (
    <div className="space-y-4" data-testid="input-gender-container">
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="grid grid-cols-2 gap-3">
          {["Male", "Female", "Other", "Prefer Not to Say"].map((option) => (
            <div
              key={option}
              className={cn(
                "flex items-center space-x-2 p-3 rounded-lg border-2 transition-all cursor-pointer hover:border-primary/50",
                value === option ? "border-primary bg-primary/10" : "border-border"
              )}
              onClick={() => onChange(option)}
            >
              <RadioGroupItem value={option} id={option} data-testid={`radio-${option.toLowerCase().replace(/\s+/g, '-')}`} />
              <Label htmlFor={option} className="cursor-pointer flex-1">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <Button
        onClick={onSubmit}
        disabled={!value}
        className="w-full"
        data-testid="button-submit-gender"
      >
        Continue
      </Button>
    </div>
  );
}

interface NumberInputWithSkipProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
  placeholder?: string;
  label?: string;
}

export function NumberInputWithSkip({
  value,
  onChange,
  onSubmit,
  onSkip,
  placeholder,
  label,
}: NumberInputWithSkipProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-3" data-testid="input-number-skip-container">
      {label && <Label>{label}</Label>}
      <div className="flex gap-2">
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1"
          data-testid="input-number"
        />
        <Button
          onClick={onSubmit}
          disabled={!value.trim()}
          size="icon"
          data-testid="button-submit-number"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
      <Button
        onClick={onSkip}
        variant="outline"
        className="w-full"
        data-testid="button-skip"
      >
        <SkipForward className="w-4 h-4 mr-2" />
        Skip this question
      </Button>
    </div>
  );
}

interface SeveritySliderProps {
  symptomName: string;
  value: number;
  onChange: (value: number) => void;
  onSubmit: () => void;
}

export function SeveritySlider({ symptomName, value, onChange, onSubmit }: SeveritySliderProps) {
  return (
    <div className="space-y-4" data-testid="slider-severity-container">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>How severe is your {symptomName}?</Label>
          <span className="text-2xl font-bold text-primary" data-testid="text-severity-value">
            {value}
          </span>
        </div>
        <Slider
          value={[value]}
          onValueChange={([v]) => onChange(v)}
          max={10}
          step={1}
          className="py-4"
          data-testid="slider-severity"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0 (Mild)</span>
          <span>5 (Moderate)</span>
          <span>10 (Severe)</span>
        </div>
      </div>
      <Button onClick={onSubmit} className="w-full" data-testid="button-submit-severity">
        Continue
      </Button>
    </div>
  );
}
