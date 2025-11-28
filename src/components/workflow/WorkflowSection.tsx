"use client";

import { theme } from "@/lib/theme";
import { WorkflowCard } from "./WorkflowCard";
import { StatsRow } from "./StatsRow";

export function WorkflowSection() {
  return (
    <section className="relative z-20 bg-white pt-32 pb-32">
      <div className="mx-auto max-w-[90rem] px-4">
        
        {/* Header Section - Side by Side Layout - ALIGNED CENTER */}
        <div className="mb-24 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-6">
              Easy Mode
            </span>
            
            <h2 
              className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-[3.5rem]"
              style={{ fontFamily: theme.fonts.display }}
            >
              Scaling done for you
            </h2>
            
            <p className="mt-6 text-lg text-slate-500 md:text-xl leading-relaxed max-w-2xl">
              Save yourself from painful scrolling, research and outreach.
              <br className="hidden md:block" />
              <span className="text-slate-700 font-medium"> We do it all for you in house.</span>
            </p>
          </div>

          {/* Stats Row - Right Side */}
          <div className="w-full xl:w-auto">
            <StatsRow />
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          
          {/* Card 1: Creators */}
          <WorkflowCard
            title="We provide creators & UGC"
            subtitle="To push out volume instantly"
            gradient="linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)" 
          >
            <div className="relative w-full px-6 -translate-y-2 transform">
              <div className="rounded-2xl bg-slate-900 p-6 border border-white/10 shadow-xl w-full">
                {/* Profile Stack */}
                <div className="flex items-center justify-between mb-6">
                   <div className="flex -space-x-3">
                     {[1, 2, 3, 4].map((i) => (
                       <img 
                         key={i}
                         src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                         alt="Creator"
                         className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover"
                       />
                     ))}
                   </div>
                   <div className="text-xs font-bold text-white bg-white/10 px-2 py-1 rounded-full">
                     +50 more
                   </div>
                </div>
                
                {/* Volume Bar - Green */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-medium text-white/80">
                    <span>Creator Volume</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.4)]" />
                  </div>
                </div>
              </div>
            </div>
          </WorkflowCard>

          {/* Card 2: Manage */}
          <WorkflowCard
            title="We manage & report"
            subtitle="Daily and weekly insights"
            gradient="linear-gradient(135deg, #172554 0%, #2563eb 100%)"
            className="relative overflow-hidden"
          >
             {/* Decoration */}
             <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[20px] border-white/5 blur-3xl" />

             <div className="relative w-full px-6 -translate-y-2 transform">
              <div className="rounded-2xl bg-slate-900 p-6 border border-white/10 shadow-xl w-full">
                <div className="space-y-4">
                  {/* Status Item 1 */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                      </svg>
                    </div>
                    <p className="text-sm text-white/90 leading-tight">
                      Your views are <span className="text-green-400 font-bold">56% up</span> last 7 days
                    </p>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px w-full bg-white/10" />
                  
                  {/* Status Item 2 */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                        <polygon points="23 7 16 12 23 17 23 7"/>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                      </svg>
                    </div>
                    <p className="text-sm text-white/90 leading-tight">
                      <span className="text-blue-400 font-bold">20 new videos</span> were uploaded last 7 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </WorkflowCard>

          {/* Card 3: Optimize & Scale */}
          <WorkflowCard
            title="We optimize & scale"
            subtitle="Get millions of views that convert"
            gradient="linear-gradient(135deg, #020617 0%, #312e81 100%)"
          >
            {/* UI: Viral Growth Graph */}
            <div className="relative w-full px-6 -translate-y-2 transform">
              <div className="rounded-2xl bg-slate-900 p-6 border border-white/10 shadow-xl overflow-hidden relative w-full">
                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Total Views</span>
                    <div className="text-3xl font-bold text-white tracking-tight">2.4M+</div>
                  </div>
                  <div className="px-2 py-1 rounded bg-green-500/20 border border-green-500/30 text-[10px] font-bold text-green-400">
                    +420%
                  </div>
                </div>

                {/* Big Green Growth Graph */}
                <div className="absolute bottom-0 left-0 right-0 h-24 w-full">
                   <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full">
                     <defs>
                       <linearGradient id="greenGraph" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#4ade80" stopOpacity="0.5" />
                         <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                       </linearGradient>
                     </defs>
                     <path 
                       d="M0 100 C 60 100, 100 80, 140 40 S 200 0, 200 0" 
                       fill="none" 
                       stroke="#4ade80" 
                       strokeWidth="4"
                     />
                     <path 
                       d="M0 100 C 60 100, 100 80, 140 40 S 200 0, 200 0 V 100 H 0 Z" 
                       fill="url(#greenGraph)" 
                     />
                   </svg>
                </div>
              </div>
            </div>
          </WorkflowCard>

        </div>
      </div>
    </section>
  );
}
