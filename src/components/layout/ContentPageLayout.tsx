"use client";

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { HeroBackground } from "../hero/HeroBackground";
import { Footer } from "./Footer";

export function ContentPageLayout({ title, lastUpdated, children }: { title: string; lastUpdated?: string; children: ReactNode }) {
  return (
    <main className="min-h-screen relative flex flex-col bg-white font-sans text-slate-900">
      <Navbar />
      
      {/* Background - Fixed to cover screen */}
      <div className="fixed inset-0 z-0">
         <HeroBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-40 pb-20 px-4 sm:px-6 min-h-[80vh]">
        <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Header */}
          <div className="px-8 py-12 border-b border-slate-100 bg-white/50">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h1>
            <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
          </div>

          {/* Content - using prose for nice typography */}
          <div className="p-8 md:p-12 text-slate-600 leading-relaxed space-y-6 prose prose-slate prose-lg max-w-none hover:prose-a:text-blue-600 prose-headings:text-slate-900 prose-strong:text-slate-900">
            {children}
          </div>
          
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
