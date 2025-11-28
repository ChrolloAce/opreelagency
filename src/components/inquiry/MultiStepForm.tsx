"use client";

import { useState } from "react";
import Link from "next/link";
import { submitInquiry } from "@/app/actions";

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    website: "",
    productDescription: "",
    vcOrMrr: "",
    budget: "",
    b2bOrB2c: "",
    platform: "", 
    runningCampaigns: "",
    startDate: "",
    source: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);
  
  const totalFormSteps = 4;
  const progress = step === 0 ? 0 : ((step) / totalFormSteps) * 100;

  return (
    // Glass Container
    <div className="w-full max-w-2xl bg-black/40 backdrop-blur-3xl backdrop-saturate-150 rounded-[32px] shadow-2xl border border-white/10 overflow-hidden flex flex-col min-h-[600px] transition-all duration-500">
      
      {/* Persistent Header */}
      <div className="px-8 pt-8 pb-4 border-b border-white/5 bg-white/5 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-4 min-h-[28px]">
          {step > 0 ? (
            <div className="flex items-center gap-2 animate-in fade-in duration-300">
               <img src="/opreellogo.png" alt="OPREEL" className="h-6 w-auto brightness-0 invert" />
               <span className="font-bold text-white tracking-tight">OPREEL</span>
            </div>
          ) : (
            <div />
          )}

          {step > 0 && (
            <span className="text-xs font-bold text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-500/30">
              Step {step} of {totalFormSteps}
            </span>
          )}
        </div>
        
        {/* Progress Bar - Blue */}
        <div className={`h-1 w-full bg-white/10 rounded-full overflow-hidden transition-opacity duration-300 ${step === 0 ? "opacity-0" : "opacity-100"}`}>
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 md:p-10 overflow-y-auto relative custom-scrollbar">
        <form onSubmit={(e) => e.preventDefault()} className="h-full flex flex-col">
          
          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="mb-8 relative">
                 <div className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full" />
                 <img src="/opreellogo.png" alt="OPREEL" className="h-24 w-auto relative z-10 drop-shadow-2xl brightness-0 invert" />
               </div>
               
               <h1 className="text-5xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
                 Let's scale your brand
               </h1>
               <p className="text-lg text-slate-300 max-w-md mx-auto leading-relaxed">
                 Tell us about your product and goals. We'll build a custom strategy to hit your targets.
               </p>

               <div className="mt-12 w-full max-w-xs">
                  <button 
                    onClick={handleNext}
                    className="w-full py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Start Inquiry
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </button>
               </div>
            </div>
          )}

          {/* Step 1: Basics */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Full Name" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  placeholder="John Doe" 
                  autoFocus
                />
                <Input 
                  label="Email" 
                  name="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@company.com" 
                />
              </div>
              <Input 
                label="Company Name" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                placeholder="Acme Inc." 
              />
              <Input 
                label="Company Website" 
                name="website" 
                value={formData.website} 
                onChange={handleChange} 
                placeholder="https://company.com" 
              />
            </div>
          )}

          {/* Step 2: Product */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Product Description</label>
                <textarea 
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder="Tell us about what you're building..."
                  autoFocus
                />
              </div>
              
              <div className="space-y-4">
                <Label>Are you a B2C or B2B product?</Label>
                <div className="grid grid-cols-2 gap-4">
                  <SelectButton 
                    selected={formData.b2bOrB2c === "B2C"} 
                    onClick={() => setFormData(prev => ({...prev, b2bOrB2c: "B2C"}))}
                  >
                    B2C
                  </SelectButton>
                  <SelectButton 
                    selected={formData.b2bOrB2c === "B2B"} 
                    onClick={() => setFormData(prev => ({...prev, b2bOrB2c: "B2B"}))}
                  >
                    B2B
                  </SelectButton>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Mobile or Web Based?</Label>
                <div className="grid grid-cols-2 gap-4">
                  <SelectButton 
                    selected={formData.platform === "Mobile"} 
                    onClick={() => setFormData(prev => ({...prev, platform: "Mobile"}))}
                  >
                    Mobile App
                  </SelectButton>
                  <SelectButton 
                    selected={formData.platform === "Web"} 
                    onClick={() => setFormData(prev => ({...prev, platform: "Web"}))}
                  >
                    Web Platform
                  </SelectButton>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Qualification */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
              <div className="space-y-4">
                <Label>Are you VC backed or have a MRR of at least $50K?</Label>
                <div className="grid grid-cols-3 gap-3">
                  {["Yes", "No", "Neither"].map((opt) => (
                    <SelectButton 
                      key={opt}
                      selected={formData.vcOrMrr === opt} 
                      onClick={() => setFormData(prev => ({...prev, vcOrMrr: opt}))}
                    >
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>What's your budget?</Label>
                <div className="relative">
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">Select a range</option>
                    <option value="<30k" className="bg-slate-900">Less than $30K</option>
                    <option value="30k-50k" className="bg-slate-900">$30K - $50K</option>
                    <option value="50k+" className="bg-slate-900">$50K+</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Currently running organic social or UGC campaigns?</Label>
                <div className="grid grid-cols-2 gap-4">
                  <SelectButton 
                    selected={formData.runningCampaigns === "Yes"} 
                    onClick={() => setFormData(prev => ({...prev, runningCampaigns: "Yes"}))}
                  >
                    Yes
                  </SelectButton>
                  <SelectButton 
                    selected={formData.runningCampaigns === "No"} 
                    onClick={() => setFormData(prev => ({...prev, runningCampaigns: "No"}))}
                  >
                    No
                  </SelectButton>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Wrap Up */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
              <Input 
                label="When is your ideal start date?" 
                name="startDate" 
                type="date"
                value={formData.startDate} 
                onChange={handleChange} 
              />
              <Input 
                label="Where did you find out about us?" 
                name="source" 
                value={formData.source} 
                onChange={handleChange} 
                placeholder="e.g. Twitter, LinkedIn, Referral..." 
              />
              
              <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 mt-8">
                <h4 className="font-bold text-blue-200 mb-2">Ready to scale?</h4>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  Our team reviews every application personally. We'll get back to you within 24 hours with a strategy proposal.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Footer / Actions */}
      {step > 0 && (
        <div className="p-8 border-t border-white/10 bg-white/5 backdrop-blur-md flex justify-between items-center">
          <button 
            onClick={handleBack}
            className="px-6 py-2.5 text-slate-400 font-bold hover:text-white transition-colors"
          >
            Back
          </button>
          
          <button 
            onClick={async () => {
              if (step < totalFormSteps) {
                handleNext();
              } else {
                setIsSubmitting(true);
                await submitInquiry(formData);
              }
            }}
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : (step < totalFormSteps ? "Next Step" : "Submit Application")}
            {!isSubmitting && step < totalFormSteps && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

// --- Helper Components ---

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-300 mb-2">{label}</label>
      <input 
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
        {...props}
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-slate-300">{children}</label>;
}

function SelectButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full py-3 px-4 rounded-xl border font-bold transition-all ${
        selected 
          ? "border-blue-500 bg-blue-500/20 text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
          : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20"
      }`}
    >
      {children}
    </button>
  );
}
