import { SymptomVerification } from '../SymptomVerification';

export default function SymptomVerificationExample() {
  return (
    <div className="bg-background p-8">
      <div className="max-w-md space-y-4">
        <SymptomVerification
          originalInput="I am having cold since morning"
          correctedSymptom="Cold"
          onConfirm={() => console.log('Symptom confirmed')}
        />
        
        <SymptomVerification
          originalInput="my head hurts badly"
          correctedSymptom="Headache"
          onConfirm={() => console.log('Symptom confirmed')}
        />
      </div>
    </div>
  );
}
