"use client";

import { useEffect, useRef } from "react";

const cases = [
  { 
    id: 1, 
    video: "/videos/video8.mp4", 
    client: "Snapout", 
    stats: "27M+ views", 
    sub: "generating over $10,000 revenue for Snapout",
    align: "left" 
  },
  { 
    id: 2, 
    video: "/videos/video5.mp4", 
    client: "Hard Paywall", 
    stats: "13,000 downloads", 
    sub: "across 60 videos posted with 8% conv rate",
    align: "right" 
  },
  { 
    id: 3, 
    video: "/videos/video12.mp4", 
    client: "Finance App", 
    stats: "1M+ Users Reached", 
    sub: "with <$0.50 CPI across 3 campaigns",
    align: "left" 
  },
  { 
    id: 4, 
    video: "/videos/video6.mp4", 
    client: "DTC Beauty", 
    stats: "400% ROAS", 
    sub: "scaled to $50k/mo spend profitably",
    align: "right" 
  },
  { 
    id: 5, 
    video: "/videos/video10.mp4", 
    client: "AI Tool", 
    stats: "Viral Organic", 
    sub: "20k followers gained in 1 week",
    align: "left" 
  },
  { 
    id: 6, 
    video: "/videos/video1.mp4", 
    client: "Gaming Studio", 
    stats: "Best Performer", 
    sub: "retention increased by 15%",
    align: "right" 
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  
  // Refs for dynamic items
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rafId: number;
    
    const updateAnimation = () => {
      if (!sectionRef.current || !lineRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startPoint = windowHeight * 0.8; 
      const endPoint = windowHeight * 0.2; 
      
      const elementTop = rect.top;
      const totalDistance = rect.height + startPoint - endPoint;
      const travelled = startPoint - elementTop;
      
      let progress = travelled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      // 1. Animate Main Line Height
      lineRef.current.style.height = `${progress * 100}%`;

      // 2. Animate Items based on individual thresholds
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        // Calculate threshold for this specific item
        // Distribute thresholds evenly along the timeline
        const itemThreshold = (index + 0.2) / (cases.length + 0.5);
        
        const conn = item.querySelector('.connector-line') as HTMLElement;
        const dot = item.querySelector('.connector-dot') as HTMLElement;
        const dotInner = item.querySelector('.connector-dot-inner') as HTMLElement;

        if (progress > itemThreshold) {
          if (conn) conn.style.transform = 'scaleX(1)';
          if (dot) {
            dot.style.borderColor = '#3b82f6';
            dot.style.transform = 'translateY(-50%) scale(1.25)';
            dot.style.boxShadow = '0 0 10px rgba(59,130,246,0.5)';
          }
          if (dotInner) dotInner.style.opacity = '1';
        } else {
          if (conn) conn.style.transform = 'scaleX(0)';
          if (dot) {
            dot.style.borderColor = '#e2e8f0';
            dot.style.transform = 'translateY(-50%) scale(1)';
            dot.style.boxShadow = 'none';
          }
          if (dotInner) dotInner.style.opacity = '0';
        }
      });

      rafId = requestAnimationFrame(updateAnimation);
    };

    rafId = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 bg-white py-0 pb-32 overflow-hidden min-h-[1000px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Background Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-slate-100" />
          
          {/* Fill Line */}
          <div 
            ref={lineRef}
            className="absolute top-0 left-1/2 w-[2px] -translate-x-1/2 bg-blue-500"
            style={{ height: '0%' }} 
          />
          
          {cases.map((item, index) => (
            <div 
              key={item.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              className={`relative w-full flex py-4 ${
                item.align === 'left' ? 'justify-center md:justify-start' : 'justify-center md:justify-end'
              } ${
                // Apply negative top margin to all items starting from the 2nd one (index 1) 
                // to create the zipper overlap effect - Adjusted to be less aggressive (-mt-32)
                index > 0 ? 'md:-mt-32' : ''
              }`}
            >
              <div className={`w-full md:w-[420px] relative ${item.align === 'left' ? 'md:pr-16' : 'md:pl-16'}`}>
                
                {/* Horizontal Connector */}
                <div className={`connector-line hidden md:block absolute top-1/2 w-16 h-[2px] bg-blue-500 -mt-[1px] transition-transform duration-500 ease-out ${item.align === 'left' ? 'right-0 origin-right' : 'left-0 origin-left'}`} style={{ transform: 'scaleX(0)' }} />
                
                {/* Background Grey Line (Static) */}
                <div className={`hidden md:block absolute top-1/2 w-16 h-[2px] bg-slate-100 -mt-[1px] -z-10 ${item.align === 'left' ? 'right-0' : 'left-0'}`} />

                {/* Dot */}
                <div 
                   className={`connector-dot absolute top-1/2 w-4 h-4 rounded-full border-2 border-slate-200 bg-white z-10 -translate-y-1/2 transition-all duration-300 ${item.align === 'left' ? 'right-[-6px] md:right-[-68px]' : 'left-[-6px] md:left-[-68px]'}`}
                >
                   <div className="connector-dot-inner absolute inset-0.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300" />
                </div>

                {/* Card */}
                <div className="group relative w-full aspect-square overflow-hidden rounded-[32px] bg-black shadow-2xl transition-transform hover:-translate-y-2 border border-white/10">
                  <video 
                    src={item.video} 
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                      <span className="text-blue-400">{item.stats}</span> {item.sub}
                    </p>
                  </div>
                </div>
             </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
