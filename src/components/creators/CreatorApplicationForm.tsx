"use client";

import { useState } from "react";
import { submitCreatorApplication } from "@/app/actions";
import Link from "next/link";

export function CreatorApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Using native form action for file upload support, but we want step validation.
  // So we'll use a hidden form submission or just useState for data and build FormData manually on final submit.
  // Actually, we can just use <form action={submitCreatorApplication}> and hide/show fields based on step, 
  // BUT validation prevents "Enter" key from skipping.
  // Strategy: Single form element wrapping everything. Hide steps with CSS. 
  // Validate on "Next" button click.

  // State for validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    country: "",
    instagram: "",
    tiktok: "",
    twitter: "",
    experience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isStepValid = () => {
    switch(step) {
      case 1: return formData.name && formData.email && formData.age && formData.gender && formData.country;
      case 2: return formData.instagram || formData.tiktok || formData.twitter; // At least one social
      case 3: return true; // Optional experience/resume
      default: return false;
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submit
    if (step < 3) setStep(prev => prev + 1);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(prev => prev - 1);
  };

  return (
    <form 
      action={submitCreatorApplication}
      className="w-full max-w-2xl bg-black/40 backdrop-blur-3xl backdrop-saturate-150 rounded-[32px] shadow-2xl border border-white/10 overflow-hidden flex flex-col min-h-[600px] transition-all duration-500"
      onSubmit={() => setIsSubmitting(true)}
    >
      
      {/* Header */}
      <div className="px-8 pt-8 pb-4 border-b border-white/5 bg-white/5 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
             <img src="/opreellogo.png" alt="OPREEL" className="h-6 w-auto brightness-0 invert" />
             <span className="font-bold text-white tracking-tight">OPREEL Creators</span>
          </div>
          <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Step {step} of 3
          </span>
        </div>
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 md:p-10 overflow-y-auto custom-scrollbar">
        
        {/* Step 1: Personal Info */}
        <div className={step === 1 ? "block animate-in fade-in slide-in-from-right-8 duration-300 space-y-6" : "hidden"}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Tell us about yourself</h2>
            <p className="text-slate-400">We need your basic details to match you with brands.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-bold text-white mb-2">Full Name *</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-white mb-2">Email Address *</label>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">Age *</label>
              <input 
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                placeholder="25"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">Gender *</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                required
              >
                <option value="" className="bg-slate-800">Select...</option>
                <option value="Female" className="bg-slate-800">Female</option>
                <option value="Male" className="bg-slate-800">Male</option>
                <option value="Non-binary" className="bg-slate-800">Non-binary</option>
                <option value="Other" className="bg-slate-800">Other</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-white mb-2">Country *</label>
              <input 
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                placeholder="United States"
                required
              />
            </div>
          </div>
        </div>

        {/* Step 2: Socials */}
        <div className={step === 2 ? "block animate-in fade-in slide-in-from-right-8 duration-300 space-y-6" : "hidden"}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Your Portfolio</h2>
            <p className="text-slate-400">Link your socials so brands can see your style.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Instagram Link</label>
            <input 
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
              placeholder="https://instagram.com/username"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">TikTok Link</label>
            <input 
              name="tiktok"
              value={formData.tiktok}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
              placeholder="https://tiktok.com/@username"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">X (Twitter) Link</label>
            <input 
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
              placeholder="https://x.com/username"
            />
          </div>
        </div>

        {/* Step 3: Experience & Resume */}
        <div className={step === 3 ? "block animate-in fade-in slide-in-from-right-8 duration-300 space-y-6" : "hidden"}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Experience & Resume</h2>
            <p className="text-slate-400">Show off your past work.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Experience / Bio</label>
            <textarea 
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
              placeholder="Tell us about your UGC experience..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Upload Resume / Portfolio (PDF/Image)</label>
            <div className="relative">
              <input 
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Max 5MB. Optional.</p>
          </div>
        </div>

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
          <Link href="/" className="px-6 py-2.5 text-slate-400 font-bold hover:text-white transition-colors text-sm">
             Cancel
          </Link>
        )}
        
        {step < 3 ? (
          <button 
            onClick={handleNext}
            disabled={!isStepValid()}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            Next Step
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button 
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        )}
      </div>
    </form>
  );
}

