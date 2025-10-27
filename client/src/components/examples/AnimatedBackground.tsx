import { AnimatedBackground } from '../AnimatedBackground';

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative h-screen bg-background">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-card/80 backdrop-blur-md border border-card-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Content Over Background</h2>
          <p className="text-muted-foreground">The animated plus symbols glow behind this card</p>
        </div>
      </div>
    </div>
  );
}
