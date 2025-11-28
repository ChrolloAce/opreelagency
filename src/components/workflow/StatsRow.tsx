"use client";

import { useEffect, useState, useRef } from "react";

export function StatsRow() {
  return (
    <div className="grid grid-cols-3 gap-12 pt-2">
      <StatItem label="Total Views" end={97} unit="M" symbol="+" />
      <StatItem label="Profit Generated" end={500} prefix="$" unit="k" symbol="+" /> 
      <StatItem label="Traffic" end={1} unit="M" symbol="+" decimals={0} />
    </div>
  );
}

function StatItem({ 
  label, 
  end, 
  prefix = "", 
  unit = "",
  symbol = "", 
  decimals = 0,
}: { 
  label: string; 
  end: number; 
  prefix?: string; 
  unit?: string;
  symbol?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          // Start closer to end for big numbers to avoid long scroll up
          if (end > 100) start = end * 0.5;
          
          const duration = 2500; 
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease Out Expo - very smooth landing
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(start + (end - start) * ease);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex flex-col">
      {/* Added 'tabular-nums' to prevent layout shift/shaking during count up */}
      <div className="text-4xl font-bold text-slate-900 sm:text-5xl tracking-tight whitespace-nowrap tabular-nums">
        {prefix}{count.toFixed(decimals)}
        {/* Unit is black (inherited), Symbol is blue */}
        <span className="tracking-normal font-sans">{unit}<span className="text-blue-600">{symbol}</span></span>
      </div>
      <span className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-500">
        {label}
      </span>
    </div>
  );
}
