"use client";

import { OrderForm } from "@/components/order/OrderForm";
import Link from "next/link";

// Use videos 1-10 for the grid
const videos = Array.from({ length: 10 }).map((_, i) => `/videos/video${i + 1}.mp4`);

export default function OrderPage() {
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
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-0" 
            />
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      
      {/* Navbar Link (Back to Home) */}
      <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full font-medium border border-white/10 hover:bg-white/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* Form Container */}
      <div className="relative z-10 w-full flex justify-center">
        <OrderForm />
      </div>
    </main>
  );
}

