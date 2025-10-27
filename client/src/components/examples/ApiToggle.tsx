import { ApiToggle } from '../ApiToggle';

export default function ApiToggleExample() {
  return (
    <div className="bg-background p-8">
      <div className="max-w-md">
        <ApiToggle 
          onApiKeyValidated={(key) => console.log('API key validated:', key)}
        />
      </div>
    </div>
  );
}
