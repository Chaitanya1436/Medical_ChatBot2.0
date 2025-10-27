import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Activity, Stethoscope, Pill, AlertCircle } from "lucide-react";

interface DetectedSymptom {
  name: string;
  severity: number;
}

interface PredictedDisease {
  name: string;
  probability: number;
  specialist: string;
  medicines: {
    name: string;
    dosage: string;
    timing: string;
    instructions: string;
  }[];
}

interface DiseaseReportProps {
  userProfile: {
    name: string;
    gender: string;
    age: string;
    ageGroup: string;
    weight?: string;
    height?: string;
  };
  symptoms: DetectedSymptom[];
  diseases: PredictedDisease[];
  showWeightReminder?: boolean;
}

export function DiseaseReport({
  userProfile,
  symptoms,
  diseases,
  showWeightReminder,
}: DiseaseReportProps) {
  return (
    <div className="space-y-6 animate-in fade-in-50" data-testid="disease-report">
      {/* User Profile Summary */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Patient Profile</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Name</p>
            <p className="font-medium" data-testid="text-patient-name">{userProfile.name}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Gender</p>
            <p className="font-medium" data-testid="text-patient-gender">{userProfile.gender}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Age</p>
            <p className="font-medium" data-testid="text-patient-age">{userProfile.age} years ({userProfile.ageGroup})</p>
          </div>
          <div>
            <p className="text-muted-foreground">Weight</p>
            <p className="font-medium" data-testid="text-patient-weight">
              {userProfile.weight ? `${userProfile.weight} kg` : 'Not given'}
            </p>
          </div>
          {userProfile.height && (
            <div>
              <p className="text-muted-foreground">Height</p>
              <p className="font-medium" data-testid="text-patient-height">{userProfile.height} cm</p>
            </div>
          )}
        </div>
      </Card>

      {/* Detected Symptoms */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Detected Symptoms</h2>
        </div>
        <div className="space-y-3">
          {symptoms.map((symptom, index) => (
            <div key={index} className="flex items-center justify-between" data-testid={`symptom-${index}`}>
              <span className="font-medium">{symptom.name}</span>
              <Badge variant="outline">
                Severity: {symptom.severity}/10
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Weight Reminder */}
      {showWeightReminder && (
        <Card className="p-4 border-2 border-amber-500/50 bg-amber-500/10">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-500">Weight Information Important</p>
              <p className="text-sm text-muted-foreground mt-1">
                Based on the predicted conditions, weight information is crucial for accurate medication dosing.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Predicted Diseases & Medications */}
      {diseases.map((disease, diseaseIndex) => (
        <Card key={diseaseIndex} className="p-6" data-testid={`disease-${diseaseIndex}`}>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold" data-testid={`text-disease-name-${diseaseIndex}`}>{disease.name}</h2>
                </div>
                <Badge variant="default">
                  {Math.round(disease.probability)}% Match
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Recommended Specialist: <span className="font-medium text-foreground" data-testid={`text-specialist-${diseaseIndex}`}>{disease.specialist}</span>
              </p>
            </div>

            <Separator />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-4 h-4 text-primary" />
                <h3 className="font-semibold">Recommended Medications</h3>
              </div>
              <div className="space-y-3">
                {disease.medicines.map((medicine, medIndex) => (
                  <div
                    key={medIndex}
                    className="bg-muted/50 rounded-lg p-3 space-y-2"
                    data-testid={`medicine-${diseaseIndex}-${medIndex}`}
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground">{medicine.name}</h4>
                      <Badge variant="secondary">{medicine.dosage}</Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Timing:</span> {medicine.timing}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Instructions:</span> {medicine.instructions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Disclaimer */}
      <Card className="p-4 bg-muted/50">
        <p className="text-xs text-muted-foreground text-center">
          <strong>Disclaimer:</strong> This is an AI-generated analysis and should not replace professional medical advice.
          Please consult with a qualified healthcare provider for proper diagnosis and treatment.
        </p>
      </Card>
    </div>
  );
}
