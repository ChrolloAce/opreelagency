"use client";

import Link from "next/link";
import { ReactNode } from "react";

// Use videos 1-10 for the grid
const videos = Array.from({ length: 10 }).map((_, i) => `/videos/video${i + 1}.mp4`);

export function LegalPageLayout({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: ReactNode }) {
  return (
    <main className="min-h-screen relative flex flex-col items-center py-20 px-4 sm:px-6 overflow-hidden bg-black">
      
      {/* Background Video Wall */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-0 fixed h-screen w-screen">
        {videos.map((src) => (
          <div key={src} className="relative w-full h-full overflow-hidden">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" 
            />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>
      
      {/* Navbar Link */}
      <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full font-medium border border-white/10 hover:bg-white/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* Glass Content Container */}
      <div className="relative z-10 w-full max-w-4xl bg-black/40 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-white/10 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header */}
        <div className="px-8 py-10 border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-slate-400">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 text-slate-300 leading-relaxed space-y-6 h-full overflow-y-auto prose prose-invert max-w-none">
          {children}
        </div>
        
      </div>
    </main>
  );
}

