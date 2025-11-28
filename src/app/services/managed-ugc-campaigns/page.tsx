import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed UGC Campaigns | Done-For-You Creative Strategy - OPREEL",
  description: "Scale your ad creative with fully managed UGC campaigns. We handle strategy, creator sourcing, production, and performance tracking.",
};

export default function ManagedUGCPage() {
  return (
    <ContentPageLayout title="Managed UGC Campaigns">
      <p className="lead text-xl text-slate-600">
        Stop relying on luck. Our managed UGC service delivers high-volume, performance-driven video creative on auto-pilot. We handle the strategy, creators, and production so you can focus on scaling.
      </p>

      <div className="my-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h3 className="text-blue-900 mt-0">Why Managed UGC?</h3>
        <p className="mb-0 text-blue-800">
          Most brands fail at UGC because they treat it like a lottery. They hire random creators and hope for a viral hit. 
          <strong> OPREEL operates differently.</strong> We use data-backed creative strategies to produce "winning concepts" at scale.
        </p>
      </div>

      <h2>The "Done For You" Process</h2>
      <p>
        Our managed service is designed for brands spending $10k+ / month on ads who need a consistent stream of new creative to fight ad fatigue.
      </p>
      <ul>
        <li><strong>Strategy & Briefing:</strong> We analyze your top-performing ads and competitors to build a creative roadmap.</li>
        <li><strong>Creator Matching:</strong> We hand-pick creators from our roster who match your specific niche and aesthetic.</li>
        <li><strong>Production & Editing:</strong> We manage the entire workflow, ensuring hooks are sharp and CTAs are clear.</li>
        <li><strong>Performance Feedback:</strong> We iterate on winners, creating variations to extend the life of your best ads.</li>
      </ul>

      <h2>What's Included?</h2>
      <ul>
        <li>Dedicated Creative Strategist</li>
        <li>Monthly Volume (10-50 videos)</li>
        <li>Full Usage Rights (Perpetual)</li>
        <li>Raw Files & Edited Variations</li>
        <li>Direct Slack Communication</li>
      </ul>

      <h2>Who is this for?</h2>
      <p>
        This service is ideal for <Link href="/solutions/ugc-for-dtc-brands">DTC Brands</Link> and Mobile Apps looking to scale aggressive paid acquisition campaigns on TikTok and Meta. If you just need raw assets without the management, check out our <Link href="/services/buy-video-creative-packs">Video Creative Packs</Link>.
      </p>

      <div className="mt-12 not-prose">
        <Link 
          href="/get-started" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
        >
          Start Your Managed Campaign
        </Link>
      </div>
    </ContentPageLayout>
  );
}

