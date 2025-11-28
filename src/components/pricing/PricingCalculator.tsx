"use client";

import { useState, useEffect } from "react";

export function PricingCalculator() {
  const [videoCount, setVideoCount] = useState(20);
  const [planType, setPlanType] = useState<"done-for-you" | "just-videos">("done-for-you");

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
  
  const videosPerCreator = 30;
  const creatorCount = Math.max(1, Math.ceil(videoCount / videosPerCreator));

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoCount(Number(e.target.value));
  };

  const maxVideos = 4000; 

  return (
    <div className="flex flex-col h-full justify-center">
      {/* Main Calculator Card - Made h-full to match sibling */}
      <div className="flex flex-col justify-between h-full p-8 rounded-[32px] bg-white border border-slate-200 shadow-xl relative overflow-hidden">
        
        <div>
          {/* Plan Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-full inline-flex relative w-full max-w-md">
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out ${planType === "done-for-you" ? "left-1" : "left-[calc(50%)]"}`}
              />
              <button 
                onClick={() => setPlanType("done-for-you")}
                className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${planType === "done-for-you" ? "text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
              >
                Done For You
              </button>
              <button 
                onClick={() => setPlanType("just-videos")}
                className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${planType === "just-videos" ? "text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
              >
                Just Videos
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Volume
              </span>
              <span className="text-4xl font-bold text-slate-900">
                {videoCount.toLocaleString()} <span className="text-lg font-medium text-slate-400">videos/mo</span>
              </span>
            </div>
            <div className="text-right">
              <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Total Price
              </span>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-4xl font-bold text-blue-600">${Math.round(totalPrice).toLocaleString()}</span>
                <span className="text-sm text-slate-400">/mo</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                ${pricePerVideo.toFixed(2)} per video
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative mb-8 h-12 flex items-center">
            <input
              type="range"
              min="10"
              max={maxVideos}
              step="10"
              value={videoCount}
              onChange={handleSliderChange}
              className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
            />
            
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden relative z-10">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-150 ease-out"
                style={{ width: `${((videoCount - 10) / (maxVideos - 10)) * 100}%` }}
              />
            </div>

            <div 
              className="absolute h-8 w-8 bg-white border-2 border-blue-600 rounded-full shadow-lg z-10 pointer-events-none transition-all duration-150 ease-out flex items-center justify-center"
              style={{ 
                left: `calc(${((videoCount - 10) / (maxVideos - 10)) * 100}% - 16px)` 
              }}
            >
              <div className="h-2 w-2 bg-blue-600 rounded-full" />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8 min-h-[180px]">
            {planType === "done-for-you" ? (
              <>
                <FeatureItem text={`${creatorCount} Creators / ~${videosPerCreator} videos each`} highlight />
                <FeatureItem text="Creators growing accounts & posting videos" />
                <FeatureItem text="Direct communication with our team to scale" />
                <FeatureItem text="Full ownership of videos & UGC accounts" />
                <FeatureItem text="Monthly strategy & reporting" />
              </>
            ) : (
              <>
                <FeatureItem text={`${creatorCount} Creators recording content`} highlight />
                <FeatureItem text="UGC creators record & deliver videos" />
                <FeatureItem text="Videos delivered directly to brand" />
                <FeatureItem text="Full usage and ownership rights" />
                <FeatureItem text="Professional quality check" />
              </>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto">
          <button className="group w-full py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all transform active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mb-4">
            Get started with {videoCount} videos
            <ArrowRightIcon />
          </button>

          <div className="text-center text-sm text-slate-400">
            Need more than 4,000 videos? <a href="#" className="text-blue-600 font-medium hover:underline">Contact Enterprise</a>
          </div>
        </div>

      </div>
    </div>
  );
}

function FeatureItem({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-1 duration-300">
      <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${highlight ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500"}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <span className={`text-sm font-medium ${highlight ? "text-indigo-700" : "text-slate-600"}`}>
        {text}
      </span>
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
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
