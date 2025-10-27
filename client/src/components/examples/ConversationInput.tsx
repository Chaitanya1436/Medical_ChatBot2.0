import { useState } from 'react';
import { TextInput, GenderSelect, NumberInputWithSkip, SeveritySlider } from '../ConversationInput';

export default function ConversationInputExample() {
  const [textValue, setTextValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [severityValue, setSeverityValue] = useState(5);

  return (
    <div className="bg-background p-8 space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Text Input</h3>
        <TextInput
          value={textValue}
          onChange={setTextValue}
          onSubmit={() => console.log('Text submitted:', textValue)}
          placeholder="Enter your name..."
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Gender Select</h3>
        <GenderSelect
          value={genderValue}
          onChange={setGenderValue}
          onSubmit={() => console.log('Gender submitted:', genderValue)}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Number Input with Skip</h3>
        <NumberInputWithSkip
          value={numberValue}
          onChange={setNumberValue}
          onSubmit={() => console.log('Number submitted:', numberValue)}
          onSkip={() => console.log('Skipped')}
          placeholder="Enter weight in kg..."
          label="Weight (kg)"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Severity Slider</h3>
        <SeveritySlider
          symptomName="headache"
          value={severityValue}
          onChange={setSeverityValue}
          onSubmit={() => console.log('Severity submitted:', severityValue)}
        />
      </div>
    </div>
  );
}
