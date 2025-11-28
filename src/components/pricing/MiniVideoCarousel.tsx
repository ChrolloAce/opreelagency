"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  { id: 12, views: "4.2M" },
  { id: 13, views: "780K" },
  { id: 1, views: "1.2M" },
  { id: 2, views: "850K" },
  { id: 3, views: "2.1M" },
  { id: 4, views: "4.5M" },
  { id: 5, views: "920K" },
  { id: 6, views: "1.8M" },
];

export function MiniVideoCarousel() {
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Speed configuration - Slow and steady
  const SPEED_PER_MS = 0.02; 

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      setOffset((prev) => prev + SPEED_PER_MS * deltaTime);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Render list TRIPLED for smoother infinite loop on wider screens
  const renderList = [...videos, ...videos, ...videos];
  
  const cardWidth = 320; 
  const gap = 40;
  const totalSingleSetWidth = videos.length * (cardWidth + gap);

  // Modulo by the width of a SINGLE set to create infinite loop effect
  const currentOffset = offset % totalSingleSetWidth;

  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
      {/* Centralized Track */}
      <div 
        className="flex items-center gap-10 absolute left-1/2 h-full py-8"
        style={{ 
          // Start shifted by one full set width ensures no empty space on left during loop
          transform: `translateX(calc(-50% - ${currentOffset}px))`, 
          willChange: "transform"
        }}
      >
        {renderList.map((video, index) => (
          <div 
            key={`${video.id}-${index}`}
            // Removed shadow-2xl
            className="relative h-full w-[320px] flex-shrink-0 overflow-hidden rounded-[32px] bg-black border-[6px] border-white transition-transform duration-300 hover:scale-[1.02]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={`/videos/video${video.id}.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
            
            {/* Views Badge */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-md border border-white/20 shadow-sm">
                <EyeIcon /> {video.views}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
