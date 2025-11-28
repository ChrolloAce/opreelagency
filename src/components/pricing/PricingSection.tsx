"use client";

import { PricingCalculator } from "./PricingCalculator";
import { MiniVideoCarousel } from "./MiniVideoCarousel";

export function PricingSection() {
  return (
    <section id="pricing" className="relative z-30 bg-white pt-32 pb-64 overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Choose the volume that fits your growth.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left: Calculator */}
          <PricingCalculator />

          {/* Right: Video Preview */}
          <div className="h-[500px] lg:h-full w-full">
            <MiniVideoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
