"use client";

import { MultiStepForm } from "@/components/inquiry/MultiStepForm";
import Link from "next/link";
import { useState } from "react";

// Use videos 1-10 for the grid
const videos = Array.from({ length: 10 }).map((_, i) => `/videos/video${i + 1}.mp4`);

export function GetStartedContent() {
  const [mode, setMode] = useState<'selection' | 'form'>('selection');

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center py-20 px-4 sm:px-6 bg-black">
      
      {/* Background Video Wall - Fixed to prevent scroll issues */}
      <div className="fixed inset-0 z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-0">
        {videos.map((src) => (
          <div key={src} className="relative w-full h-full overflow-hidden">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          </div>
        ))}
        
        {/* Dark Overlay for contrast - Lightened as requested */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      
      {/* Navbar Link (Back to Home) */}
      <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full font-medium border border-white/10 hover:bg-white/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* Content Container */}
      <div className="relative z-10 w-full flex justify-center my-auto">
        
        {mode === 'selection' ? (
          <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg px-2">
                How would you like to scale?
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                Choose the path that fits your workflow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-4">
              {/* Option 1: Strategy Call */}
              <button 
                onClick={() => setMode('form')}
                className="group relative flex flex-col items-center p-6 md:p-10 rounded-[24px] md:rounded-[32px] bg-black/40 backdrop-blur-2xl border border-white/10 hover:bg-black/50 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300 text-center"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-white">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Book Strategy Call</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Tell us about your goals and we'll build a custom content strategy for you.
                </p>
                <div className="mt-6 md:mt-8 px-6 py-2 rounded-full border border-white/20 text-white text-sm font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  Start Inquiry →
                </div>
              </button>

              {/* Option 2: Buy Direct */}
              <Link 
                href="/order"
                className="group relative flex flex-col items-center p-6 md:p-10 rounded-[24px] md:rounded-[32px] bg-black/40 backdrop-blur-2xl border border-white/10 hover:bg-black/50 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 text-center"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-white">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Buy Videos Directly</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Skip the talk. Select your volume, provide details, and get content fast.
                </p>
                <div className="mt-6 md:mt-8 px-6 py-2 rounded-full border border-white/20 text-white text-sm font-bold group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all">
                  Order Now →
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="w-full max-w-2xl relative">
               <button 
                 onClick={() => setMode('selection')}
                 className="absolute -top-12 left-0 text-white/60 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors"
               >
                 ← Back to options
               </button>
               <MultiStepForm />
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

