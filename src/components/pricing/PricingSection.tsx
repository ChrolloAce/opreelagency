"use client";

import { PricingCard } from "./PricingCard";

export function PricingSection() {
  return (
    <section className="relative z-30 bg-white py-32 overflow-hidden">
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

      {/* Background Glows (Soft Light Mode) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Choose the plan that best fits your scaling needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          {/* Plan 1: Lite */}
          <PricingCard
            title="Lite"
            description="Perfect for small creators getting started."
            price="$110"
            period="20 credits/month"
            subPrice="$5.50 per credit • ≈25 easy reactions"
            accentColor="blue"
            icon={<LiteIcon />}
            features={[
              "Perfect for small creators",
              "Minimum 10 videos",
              "Order tracking",
              "Priority support",
              "Project folders",
            ]}
          />

          {/* Plan 2: Pro (Hero) */}
          <PricingCard
            title="Pro"
            description="For growing businesses scaling content."
            price="$500"
            period="100 credits/month"
            subPrice="$5.00 per credit • ≈125 easy reactions"
            accentColor="indigo"
            isHero
            icon={<ProIcon />}
            features={[
              "For growing businesses",
              "Minimum 10 videos",
              "Order tracking",
              "Priority support",
              "Project folders",
            ]}
          />

          {/* Plan 3: Managed */}
          <PricingCard
            title="Managed UGC"
            description="Full-service campaign management."
            price="$10,000"
            period="/month"
            buttonText="Contact Sales"
            accentColor="dark"
            icon={<ManagedIcon />}
            features={[
              "Number of accounts: 10",
              "Minimum 10 accounts",
              "Per account: 60 real UGC videos edited",
              "TikTok account warmed up in your niche",
              "2 posts a day",
              "Viral strategy",
              "Hook research",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// Icons
function LiteIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}

function ProIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
}

function ManagedIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>;
}
