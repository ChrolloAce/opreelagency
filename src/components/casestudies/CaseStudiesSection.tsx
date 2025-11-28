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
      
      lineRef.current.style.height = `${progress * 100}%`;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        
        {/* Central Spine */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-slate-100" />
        <div 
          ref={lineRef}
          className="absolute top-0 left-1/2 w-[2px] -translate-x-1/2 bg-blue-500"
          style={{ height: '0%' }} 
        />
          
        {cases.map((item, index) => (
          <div 
            key={item.id}
            ref={(el) => { itemsRef.current[index] = el; }}
            className={`relative w-full grid grid-cols-1 md:grid-cols-2 py-4 ${
              index > 0 ? 'md:-mt-32' : ''
            }`}
          >
            {/* Left Alignment */}
            {item.align === 'left' && (
              <div className="col-start-1 flex items-center pr-8 md:pr-0 relative">
                {/* Card at start (far left) */}
                <div className="w-full md:w-[420px] flex-shrink-0 group relative aspect-square overflow-hidden rounded-[32px] bg-black shadow-2xl transition-transform hover:-translate-y-2 border border-white/10 z-10">
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

                {/* Connecting Line - Fills space between card and spine */}
                <div className="connector-line hidden md:block flex-grow h-[2px] bg-blue-500 mx-4 origin-right transition-transform duration-500 ease-out" style={{ transform: 'scaleX(0)' }} />
                
                {/* Static Grey Line */}
                <div className="hidden md:block absolute right-0 top-1/2 w-[calc(100%-420px)] h-[2px] bg-slate-100 -mt-[1px] -z-10" />

                {/* Dot on Spine (Right edge of this col) */}
                <div 
                   className="connector-dot absolute right-0 top-1/2 w-4 h-4 rounded-full border-2 border-slate-200 bg-white z-20 -translate-y-1/2 translate-x-1/2 transition-all duration-300"
                >
                   <div className="connector-dot-inner absolute inset-0.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300" />
                </div>
              </div>
            )}

            {/* Right Alignment */}
            {item.align === 'right' && (
              <div className="col-start-1 md:col-start-2 flex items-center pl-8 md:pl-0 relative justify-end md:justify-start">
                 {/* Dot on Spine (Left edge of this col) */}
                <div 
                   className="connector-dot absolute left-0 top-1/2 w-4 h-4 rounded-full border-2 border-slate-200 bg-white z-20 -translate-y-1/2 -translate-x-1/2 transition-all duration-300"
                >
                   <div className="connector-dot-inner absolute inset-0.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300" />
                </div>

                {/* Connecting Line */}
                <div className="connector-line hidden md:block flex-grow h-[2px] bg-blue-500 mx-4 origin-left transition-transform duration-500 ease-out" style={{ transform: 'scaleX(0)' }} />

                {/* Static Grey Line */}
                <div className="hidden md:block absolute left-0 top-1/2 w-[calc(100%-420px)] h-[2px] bg-slate-100 -mt-[1px] -z-10" />

                {/* Card at end (far right) */}
                <div className="w-full md:w-[420px] flex-shrink-0 group relative aspect-square overflow-hidden rounded-[32px] bg-black shadow-2xl transition-transform hover:-translate-y-2 border border-white/10 z-10">
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
            )}

          </div>
        ))}
      </div>
    </section>
  );
}
