"use client";

import Link from "next/link";

// Reuse the video wall background for consistency
const videos = Array.from({ length: 10 }).map((_, i) => `/videos/video${i + 1}.mp4`);

export function ThankYouContent() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 overflow-hidden bg-black">
      
      {/* Background Video Wall */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-0">
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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl p-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-10 h-10 text-white">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          You're all set!
        </h1>
        
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg mx-auto">
          We've received your details. Check your email for a confirmation. Our team is already reviewing your request.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

