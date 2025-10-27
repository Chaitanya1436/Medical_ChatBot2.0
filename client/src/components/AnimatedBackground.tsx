export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {/* Plus symbols grid with glowing animation */}
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary animate-glow-pulse font-bold"
            style={{
              left: `${(i % 6) * 16 + 8}%`,
              top: `${Math.floor(i / 6) * 20 + 10}%`,
              fontSize: '2.5rem',
              animationDelay: `${i * 0.2}s`,
            }}
          >
            +
          </div>
        ))}
      </div>
      
      {/* Animated gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    </div>
  );
}
