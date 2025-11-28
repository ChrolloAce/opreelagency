"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroBackground } from "./HeroBackground";
import { FloatingIcons } from "./FloatingIcons";
import { Headline } from "./Headline";
import { Subheadline } from "./Subheadline";
import { CTAGroup } from "./CTAGroup";
import { VideoCarousel3D } from "./VideoCarousel3D";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Background layers */}
      <HeroBackground />

      {/* Main content container */}
      <div className="relative mx-auto flex min-h-screen flex-col items-center pt-48 pb-0">
        {/* Content wrapper - INCREASED WIDTH to fit long headline */}
        <div className="relative z-10 flex w-full max-w-[90rem] flex-col items-center px-4">
          {/* Hero text content */}
          <div className="flex flex-col items-center pb-8 w-full">
            {/* Social Icons aligned directly above text */}
            <FloatingIcons />
            
            <Headline />
            <Subheadline />
            <CTAGroup />
          </div>
        </div>

        {/* 3D Video carousel - Full width */}
        <div className="w-full mt-0 relative z-10">
          <VideoCarousel3D />
        </div>
      </div>
    </section>
  );
}
