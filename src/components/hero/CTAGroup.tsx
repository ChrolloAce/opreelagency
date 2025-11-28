"use client";

import { theme } from "@/lib/theme";

export function CTAGroup() {
  return (
    <div className="mt-8 flex flex-col items-center gap-5">
      {/* Primary CTA Button with Sword Sheath/Shimmer Effect */}
      <button
        className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
        style={{
          backgroundColor: theme.colors.brand.primary,
          boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)",
        }}
      >
        {/* Shimmer overlay (Sword Sheath Effect) */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-100" />
        
        <span className="relative flex items-center gap-2">
          Start scaling now
          <ArrowRightIcon />
        </span>
      </button>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
