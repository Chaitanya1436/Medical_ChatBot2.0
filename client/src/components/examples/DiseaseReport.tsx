import { DiseaseReport } from '../DiseaseReport';

export default function DiseaseReportExample() {
  return (
    <div className="bg-background p-8">
      <div className="max-w-3xl mx-auto">
        <DiseaseReport
          userProfile={{
            name: "John Doe",
            gender: "Male",
            ageGroup: "Adult",
            weight: "75",
            height: "175",
          }}
          symptoms={[
            { name: "Headache", severity: 7 },
            { name: "Nausea", severity: 5 },
            { name: "Dizziness", severity: 4 },
          ]}
          diseases={[
            {
              name: "Migraine",
              probability: 85,
              specialist: "Neurologist",
              medicines: [
                {
                  name: "Sumatriptan",
                  dosage: "50mg",
                  timing: "At onset of migraine",
                  instructions: "Take with water",
                },
                {
                  name: "Aspirin",
                  dosage: "500mg",
                  timing: "As needed",
                  instructions: "Take after food",
                },
                {
                  name: "Propranolol",
                  dosage: "40mg",
                  timing: "Twice daily",
                  instructions: "Preventive medication",
                },
              ],
            },
          ]}
          showWeightReminder={false}
        />
      </div>
    </div>
  );
}
