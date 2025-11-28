"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createStripeSession } from "@/app/actions";

export function OrderForm() {
  const searchParams = useSearchParams();
  const initialVideos = Number(searchParams.get("videos")) || 20;
  const initialPlan = searchParams.get("plan") || "done-for-you";

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [videoCount, setVideoCount] = useState(initialVideos);
  const [planType, setPlanType] = useState(initialPlan); 
  
  const [details, setDetails] = useState({
    promotionDetails: "",
    formatStyle: "",
    email: ""
  });

  // Pricing Logic
  let pricePerVideo = 0;
  if (planType === "just-videos") {
     const discountFactor = (videoCount / 4000) * 4;
     pricePerVideo = Math.max(8, Math.min(12, 12 - discountFactor));
  } else {
     const discountFactor = (videoCount / 4000) * 7;
     pricePerVideo = Math.max(18, Math.min(25, 25 - discountFactor));
  }
  const totalPrice = videoCount * pricePerVideo;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  // Validation
  const isStepValid = () => {
    switch(step) {
      case 1: return true; 
      case 2: return details.promotionDetails && details.formatStyle;
      case 3: return details.email && details.email.includes("@");
      default: return false;
    }
  };
  const isValid = isStepValid();

  return (
    <div className="w-full max-w-2xl bg-black/40 backdrop-blur-3xl backdrop-saturate-150 rounded-[32px] shadow-2xl border border-white/10 overflow-hidden flex flex-col min-h-[600px] transition-all duration-500">
      
      {/* Header */}
      <div className="px-8 pt-8 pb-4 border-b border-white/5 bg-white/5 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
             <img src="/opreellogo.png" alt="OPREEL" className="h-6 w-auto brightness-0 invert" />
             <span className="font-bold text-white tracking-tight">OPREEL</span>
          </div>
          <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Step {step} of 3
          </span>
        </div>
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 md:p-10 overflow-y-auto custom-scrollbar">
        
        {/* Step 1: Volume & Plan */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Select Volume</h2>
              <p className="text-slate-400">How many videos do you need?</p>
            </div>

            {/* Plan Toggle */}
            <div className="flex justify-center">
              <div className="bg-white/5 border border-white/10 p-1 rounded-full inline-flex relative w-full max-w-md">
                <div 
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-lg transition-all duration-300 ease-out ${planType === "done-for-you" ? "left-1" : "left-[calc(50%)]"}`}
                />
                <button 
                  onClick={() => setPlanType("done-for-you")}
                  className={`relative z-10 w-1/2 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${planType === "done-for-you" ? "text-black" : "text-slate-400 hover:text-white"}`}
                >
                  Done For You
                </button>
                <button 
                  onClick={() => setPlanType("just-videos")}
                  className={`relative z-10 w-1/2 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${planType === "just-videos" ? "text-black" : "text-slate-400 hover:text-white"}`}
                >
                  Just Videos
                </button>
              </div>
            </div>

            {/* Volume Display */}
            <div className="flex justify-between items-end px-4">
              <div>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Volume</span>
                <div className="text-4xl font-bold text-white">{videoCount} <span className="text-lg text-slate-500">videos</span></div>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Total</span>
                <div className="text-4xl font-bold text-white">${Math.round(totalPrice).toLocaleString()}</div>
                <div className="text-xs text-slate-500">${pricePerVideo.toFixed(2)} / video</div>
              </div>
            </div>

            {/* Slider */}
            <div className="relative h-12 flex items-center">
              <input
                type="range"
                min="10"
                max="4000"
                step="10"
                value={videoCount}
                onChange={(e) => setVideoCount(Number(e.target.value))}
                className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
              />
              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden relative z-10">
                <div 
                  className="h-full bg-white transition-all duration-150 ease-out"
                  style={{ width: `${((videoCount - 10) / (4000 - 10)) * 100}%` }}
                />
              </div>
              <div 
                className="absolute h-8 w-8 bg-white border-2 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10 pointer-events-none transition-all duration-150 ease-out flex items-center justify-center"
                style={{ 
                  left: `calc(${((videoCount - 10) / (4000 - 10)) * 100}% - 16px)` 
                }}
              >
                <div className="h-2 w-2 bg-black rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Order Details</h2>
              <p className="text-slate-400 text-sm">Tell us what you need.</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">What will the model be promoting? *</label>
              <textarea 
                name="promotionDetails"
                value={details.promotionDetails}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white focus:bg-white/10 outline-none transition-all resize-none"
                placeholder="Brand name, product details, key messages..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">Video Format & Style Details *</label>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                Example: Emotion: Happy/Energetic. Format: Hook, Demo, CTA. Style: Casual/Authentic. 
                Tip: Include links to examples if possible!
              </p>
              <textarea 
                name="formatStyle"
                value={details.formatStyle}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white focus:bg-white/10 outline-none transition-all resize-none"
                placeholder="Describe the exact format, emotion, and style you want..."
              />
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300 text-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
              <p className="text-slate-400 text-sm">Where should we send the confirmation?</p>
            </div>

            <div className="text-left">
              <label className="block text-sm font-bold text-white mb-2">Email Address *</label>
              <input 
                name="email"
                type="email"
                value={details.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white focus:bg-white/10 outline-none transition-all"
                placeholder="your@email.com"
              />
              <p className="text-xs text-slate-500 mt-2">
                We'll send your order confirmation and video delivery updates here.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-slate-300">Plan</span>
                <span className="text-white font-bold capitalize">{planType.replace("-", " ")}</span>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-slate-300">Volume</span>
                <span className="text-white font-bold">{videoCount} Videos</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                <span className="text-slate-200 font-bold">Total Due</span>
                <span className="text-2xl font-bold text-white">${Math.round(totalPrice).toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="p-8 border-t border-white/10 bg-white/5 backdrop-blur-md flex justify-between items-center">
        {step > 1 ? (
          <button 
            onClick={handleBack}
            className="px-6 py-2.5 text-slate-400 font-bold hover:text-white transition-colors"
          >
            Back
          </button>
        ) : (
          <Link href="/get-started" className="px-6 py-2.5 text-slate-400 font-bold hover:text-white transition-colors text-sm">
             Cancel
          </Link>
        )}
        
        <button 
          onClick={async () => {
            if (step < 3) {
              if (isValid) handleNext();
            } else {
              if (isValid) {
                setIsSubmitting(true);
                await createStripeSession({ ...details, videoCount, planType });
              }
            }
          }}
          disabled={isSubmitting || !isValid}
          className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {isSubmitting ? "Processing..." : (step < 3 ? "Continue" : "Pay & Order")}
          {!isSubmitting && step < 3 && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
