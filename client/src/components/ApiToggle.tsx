import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

interface ApiToggleProps {
  onApiKeyValidated?: (apiKey: string | null) => void;
}

export function ApiToggle({ onApiKeyValidated }: ApiToggleProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationStatus, setValidationStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Fix: Accept event and extract checked from aria-checked attribute on button
  const handleToggle = (checked: boolean) => {
    setIsEnabled(checked);
    setValidationStatus("idle");
    setErrorMsg("");
    if (!checked) {
      setApiKey("");
      if (onApiKeyValidated) onApiKeyValidated(null);
    }
  };


  const handleValidateApi = async () => {
    if (!apiKey.trim()) {
      setErrorMsg("Please enter an API key.");
      setValidationStatus("invalid");
      return;
    }
    setIsValidating(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.openai.com/v1/models", {
        headers: { Authorization: `Bearer ${apiKey.trim()}` },
      });

      if (response.ok) {
        setValidationStatus("valid");
        setErrorMsg("");
        if (onApiKeyValidated) onApiKeyValidated(apiKey.trim());
      } else {
        const errorData = await response.json();
        setValidationStatus("invalid");
        setErrorMsg(
          errorData.error?.message ||
          "The key is not valid, please enter a valid key or disable API mode."
        );
        if (onApiKeyValidated) onApiKeyValidated(null);
      }
    } catch (error) {
      setValidationStatus("invalid");
      setErrorMsg("Network error or invalid key. Please try again or disable API mode.");
      if (onApiKeyValidated) onApiKeyValidated(null);
    }
    setIsValidating(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="api-switch" className="font-medium text-base select-none cursor-pointer">
          Use API key
        </label>
        <Switch id="api-switch" checked={isEnabled} onCheckedChange={handleToggle} />
      </div>

      {isEnabled && (
        <>
          <Input
            type="password"
            placeholder="Enter OpenAI API key"
            value={apiKey}
            onChange={(e) => {
              setApiKey(e.target.value);
              setValidationStatus("idle");
              setErrorMsg("");
            }}
            disabled={validationStatus === "valid" || isValidating}
          />
          {validationStatus !== "valid" && (
            <Button onClick={handleValidateApi} disabled={isValidating}>
              {isValidating ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  Validating...
                </>
              ) : (
                "Use Now"
              )}
            </Button>
          )}
          {validationStatus === "valid" && (
            <div className="text-green-600 font-semibold">API key is valid and enabled.</div>
          )}
          {validationStatus === "invalid" && (
            <div className="text-red-600 font-semibold">{errorMsg}</div>
          )}
        </>
      )}
    </div>
  );
}
