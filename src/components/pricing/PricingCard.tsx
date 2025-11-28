"use client";

import { ReactNode } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string; // Changed to string to allow custom text like "20 credits/month"
  subPrice?: string; // New prop for "$5.50 per credit..."
  features: string[];
  isHero?: boolean;
  buttonText?: string;
  icon?: ReactNode;
  accentColor: "blue" | "indigo" | "dark"; // Updated keys
}

export function PricingCard({
  title,
  description,
  price,
  period,
  subPrice,
  features,
  isHero = false,
  buttonText = "Get started",
  icon,
  accentColor,
}: PricingCardProps) {
  // Dynamic Styles based on accent
  const accentStyles = {
    blue: { // Lite Plan
      glow: "bg-blue-200/50",
      border: "border-blue-100",
      button: "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
      titleColor: "text-blue-900",
    },
    indigo: { // Pro Plan (Hero)
      glow: "bg-indigo-500/20",
      border: "border-indigo-200",
      button: "bg-gradient-to-r from-[#2563eb] to-[#4f46e5] hover:brightness-110 text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]",
      iconBg: "bg-indigo-50 text-indigo-600",
      titleColor: "text-indigo-900",
    },
    dark: { // Managed Plan
      glow: "bg-slate-500/20",
      border: "border-slate-200",
      button: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg",
      iconBg: "bg-slate-100 text-slate-900",
      titleColor: "text-slate-900",
    },
  };

  const styles = accentStyles[accentColor];

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[32px] border p-8 transition-all duration-300 ${
        isHero 
          ? "scale-105 z-10 bg-white shadow-[0_20px_80px_-10px_rgba(37,99,235,0.15)]" 
          : "bg-white/60 hover:-translate-y-1 hover:bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"
      } ${styles.border} backdrop-blur-xl`}
    >
      {/* Top Glow */}
      <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-60 ${styles.glow}`} />

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${styles.iconBg}`}>
          {icon}
        </div>
        <h3 className={`text-2xl font-bold ${styles.titleColor}`}>{title}</h3>
        <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
      </div>

      {/* Price */}
      <div className="relative z-10 mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-slate-900">{price}</span>
        </div>
        {period && <div className="mt-1 text-sm font-semibold text-slate-700">{period}</div>}
        {subPrice && <div className="mt-1 text-xs text-slate-500">{subPrice}</div>}
      </div>

      {/* CTA Button */}
      <button
        className={`relative z-10 mb-8 w-full rounded-full py-4 text-sm font-bold transition-all duration-200 active:scale-95 ${styles.button}`}
      >
        {buttonText}
      </button>

      {/* Features */}
      <div className="relative z-10 mt-auto space-y-3 border-t border-slate-100 pt-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckIcon className={accentColor === "indigo" ? "text-indigo-500" : "text-slate-400"} />
            <span className="text-sm text-slate-600 font-medium leading-snug">{feature}</span>
          </div>
        ))}
      </div>
      
      {isHero && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
          Best Value
        </div>
      )}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`h-4 w-4 shrink-0 mt-0.5 ${className}`}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
