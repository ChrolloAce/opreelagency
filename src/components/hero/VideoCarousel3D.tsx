"use client";

import { useRef, useState, useEffect } from "react";

const videoData = [
  { id: 1, gradient: "from-rose-400 via-pink-500 to-purple-600", views: "1.2M" },
  { id: 2, gradient: "from-cyan-400 via-blue-500 to-indigo-600", views: "850K" },
  { id: 3, gradient: "from-green-400 via-emerald-500 to-teal-600", views: "2.1M" },
  { id: 4, gradient: "from-orange-400 via-red-500 to-pink-600", views: "4.5M" },
  { id: 5, gradient: "from-violet-400 via-purple-500 to-fuchsia-600", views: "920K" },
  { id: 6, gradient: "from-amber-400 via-yellow-500 to-lime-500", views: "1.8M" },
  { id: 7, gradient: "from-sky-400 via-cyan-500 to-blue-600", views: "3.4M" },
  { id: 8, gradient: "from-pink-400 via-rose-500 to-red-600", views: "670K" },
  { id: 9, gradient: "from-indigo-400 via-purple-500 to-pink-600", views: "5.6M" },
  { id: 10, gradient: "from-blue-400 via-teal-500 to-green-600", views: "2.9M" },
  { id: 11, gradient: "from-red-400 via-orange-500 to-yellow-600", views: "1.1M" },
  { id: 12, gradient: "from-teal-400 via-cyan-500 to-blue-600", views: "4.2M" },
  { id: 13, gradient: "from-purple-400 via-pink-500 to-rose-600", views: "780K" },
];

export function VideoCarousel3D() {
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Configuration
  const CARD_WIDTH = 200; 
  const GAP = 20; 
  const SPEED_PER_MS = 0.0004; 
  
  // Cylinder Math Configuration (Concave/Inverted)
  const RADIUS = 800; 
  const ANGLE_PER_CARD = 15; 
  
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
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const VISIBLE_COUNT = 12; 
  const centerIndex = Math.floor(offset);
  const renderIndices = [];
  for (let i = centerIndex - VISIBLE_COUNT; i <= centerIndex + VISIBLE_COUNT; i++) {
    renderIndices.push(i);
  }

  return (
    <div className="relative w-screen -ml-[50vw] left-1/2 h-[500px] overflow-visible flex justify-center items-center">
      {/* 3D Stage */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{
          perspective: "1200px", 
          perspectiveOrigin: "center 50%", 
          transformStyle: "preserve-3d",
        }}
      >
        {renderIndices.map((index) => {
          const dataIndex = ((index % videoData.length) + videoData.length) % videoData.length;
          const item = videoData[dataIndex];
          
          const relativePos = index - offset;
          
          // CYLINDER MATH (CONCAVE / DENTED IN)
          const angleDeg = relativePos * ANGLE_PER_CARD;
          const angleRad = (angleDeg * Math.PI) / 180;
          
          // Position
          const translateX = RADIUS * Math.sin(angleRad);
          const translateZ = RADIUS * (1 - Math.cos(angleRad)) - 100; 
          
          // Rotation
          const rotateY = -angleDeg; 
          
          const absPos = Math.abs(relativePos);
          const scale = 1; 
          
          const opacity = Math.max(1 - Math.pow(absPos / 8, 4), 0);

          if (opacity <= 0.01) return null;

          return (
            <div
              key={`card-${index}`}
              className="absolute will-change-transform"
              style={{
                width: `${CARD_WIDTH}px`,
                height: "340px",
                transform: `
                  translateX(${translateX}px) 
                  translateZ(${translateZ}px) 
                  rotateY(${rotateY}deg) 
                  scale(${scale})
                `,
                transformStyle: "preserve-3d",
                opacity,
                zIndex: Math.round(absPos * 100),
              }}
            >
              <VideoCard 
                id={item.id}
                gradient={item.gradient} 
                views={item.views}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface VideoCardProps {
  id: number;
  gradient: string;
  views: string;
}

function VideoCard({ id, gradient, views }: VideoCardProps) {
  return (
    <div
      className="h-full w-full overflow-hidden rounded-[24px] bg-black shadow-2xl"
      style={{
        backfaceVisibility: "hidden",
        boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.5)", 
      }}
    >
      <div className="relative h-full w-full flex flex-col justify-end p-5">
        {/* Video Background - Dynamic Source */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={`/videos/video${id}.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />
        
        {/* Footer - Eye Icon + View Count */}
        <div className="relative z-20 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <EyeIcon />
            <span className="text-xs font-bold text-white tracking-wide">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      className="h-3.5 w-3.5 text-white"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
