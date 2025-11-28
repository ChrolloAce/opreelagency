import { Hero } from "@/components/hero";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";
import { CaseStudiesSection } from "@/components/casestudies/CaseStudiesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WorkflowSection />
      <CaseStudiesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
