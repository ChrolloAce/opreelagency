"use client";

export function WorkflowConnector() {
  return (
    <div className="relative h-32 w-full mt-8 hidden lg:block">
      <svg 
        className="absolute inset-0 w-full h-full" 
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <defs>
          <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="1" />   {/* slate-200 */}
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="1" /> {/* slate-400 */}
          </linearGradient>
        </defs>
        
        {/* Left Line: Down -> Right -> Down */}
        <path 
          d="M 200 0 L 200 50 Q 200 60 210 60 L 590 60 Q 600 60 600 70 L 600 120" 
          fill="none" 
          stroke="url(#connectorGradient)" 
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Center Line: Straight Down */}
        <path 
          d="M 600 0 L 600 120" 
          fill="none" 
          stroke="url(#connectorGradient)" 
          strokeWidth="2"
        />

        {/* Right Line: Down -> Left -> Down */}
        <path 
          d="M 1000 0 L 1000 50 Q 1000 60 990 60 L 610 60 Q 600 60 600 70 L 600 120" 
          fill="none" 
          stroke="url(#connectorGradient)" 
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Label at Convergence Point */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <div className="bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-slate-700 shadow-lg uppercase tracking-wider">
          Case Studies
        </div>
      </div>
    </div>
  );
}
