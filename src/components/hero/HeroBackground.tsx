"use client";

export function HeroBackground() {
  return (
    <>
      {/* Base background - clean white */}
      <div className="absolute inset-0 bg-white" />

      {/* Prominent Dotted Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          // Darker grey for dots to be more visible
          backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
          // Updated mask: circle center -> fade to transparent at edges AND bottom
          maskImage: "radial-gradient(circle at 50% 40%, black 40%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black 40%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)",
          // Composite mask to ensure both apply
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          opacity: 0.8,
        }}
      />
      
      {/* Subtle blue glow accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]" />
      </div>
    </>
  );
}
