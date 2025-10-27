import { ProgressTimeline } from '../ProgressTimeline';

export default function ProgressTimelineExample() {
  return (
    <div className="bg-background p-8">
      <div className="space-y-8">
        <div>
          <p className="text-sm text-muted-foreground mb-4">Current: Profile</p>
          <ProgressTimeline currentStep="profile" />
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-4">Current: Symptoms</p>
          <ProgressTimeline currentStep="symptoms" />
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-4">Current: Report (Completed)</p>
          <ProgressTimeline currentStep="report" />
        </div>
      </div>
    </div>
  );
}
