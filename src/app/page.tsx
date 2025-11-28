import { Hero } from "@/components/hero";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WorkflowSection />
    </main>
  );
}
