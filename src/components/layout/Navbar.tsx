"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "w-[90%] max-w-5xl" : "w-[95%] max-w-6xl"
      }`}
    >
      <div
        className="relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)", // Liquid glass base
          backdropFilter: "blur(16px) saturate(180%)", // Heavy blur
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: scrolled 
            ? "0 10px 40px -10px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.4)" 
            : "0 4px 20px -5px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.3)",
        }}
      >
        {/* Logo Area */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          {/* Logo Image */}
          <div className="h-9 w-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img src="/opreellogo.png" alt="OPREEL Logo" className="h-full w-full object-contain" />
          </div>
          
          {/* Brand Name */}
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            OPREEL
          </span>
        </div>

        {/* Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        </div>

        {/* Action Button */}
        <button 
          className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium transition-transform hover:scale-105 hover:bg-slate-800 active:scale-95"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
