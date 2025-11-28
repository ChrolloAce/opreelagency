"use client";

import { theme } from "@/lib/theme";
import { WorkflowCard } from "./WorkflowCard";
import { StatsRow } from "./StatsRow";
import { WorkflowConnector } from "./WorkflowConnector";

export function WorkflowSection() {
  return (
    <section className="relative z-30 bg-white pt-32 pb-0">
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
          {/* Card 1 - Creators */}
          <WorkflowCard
            title="High-Converting Content From Top Creators"
            subtitle="To push out volume instantly. We handle sourcing, briefing, and production to deliver high-volume assets ready to scale."
            gradient="linear-gradient(135deg, #18181b 0%, #09090b 100%)"
            image="/Title/2.png"
          />

          {/* Card 2 - Manage */}
          <WorkflowCard
            title={<>We Manage Virality<br/>& Report To You</>}
            subtitle="Daily and weekly insights. We track every metric and provide detailed performance reports so you can focus on strategy."
            gradient="linear-gradient(135deg, #18181b 0%, #09090b 100%)"
            className="relative overflow-hidden"
            image="/Title/3.png"
          />

          {/* Card 3 - Scale */}
          <WorkflowCard
            title="We Scale Winners & Optimize Conversions"
            subtitle="Get millions of views that convert. We iterate on winning hooks and formats to drive massive reach and ROI."
            gradient="linear-gradient(135deg, #18181b 0%, #09090b 100%)"
            image="/Title/1.png"
          />
        </div>

        {/* Flow Connector to Next Section */}
        <WorkflowConnector />
      </div>
    </section>
  );
}
