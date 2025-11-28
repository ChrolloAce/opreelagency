"use client";

import { theme } from "@/lib/theme";

export function Headline() {
  return (
    <div className="text-center w-full max-w-[90rem] mx-auto px-4 md:px-0">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-semibold tracking-tight"
        style={{ fontFamily: theme.fonts.display }}
      >
        <span className="text-slate-900">Scale with </span>
        <span
          className="italic"
          style={{
            color: theme.colors.brand.primary,
            fontFamily: theme.fonts.script,
          }}
        >
          UGC & Influencer
        </span>
        <span className="text-slate-900"> campaigns</span>
        <br className="hidden md:block" />
        <span className="text-slate-900">that actually deliver results.</span>
      </h1>
    </div>
  );
}
