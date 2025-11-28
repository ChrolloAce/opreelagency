import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UGC for Mobile Apps | Lower CPI & Scale Installs - OPREEL",
  description: "High-performance UGC video ads for mobile apps and games. Lower your Cost Per Install (CPI) and scale user acquisition on TikTok and iOS.",
};

export default function MobileAppsUGCPage() {
  return (
    <ContentPageLayout title="UGC for Mobile Apps & Games">
      <p className="lead text-xl text-slate-600">
        User Acquisition has changed. Polished trailers don't convert like they used to. To scale mobile app installs on TikTok and Reels, you need authentic, gameplay-driven UGC that feels native to the feed.
      </p>

      <h2>Lower Your CPI with Native Ads</h2>
      <p>
        The most successful app campaigns today use "human-first" creative. By showing real people using your app, you build instant trust and curiosity. OPREEL specializes in producing high-volume creative for:
      </p>
      <ul>
        <li><strong>Mobile Games:</strong> Gameplay reactions, "fail" scenarios, and challenge hooks.</li>
        <li><strong>Fintech & Utility Apps:</strong> Explainer videos, problem/solution narratives, and lifestyle integration.</li>
        <li><strong>Social Apps:</strong> Trend-jacking and community-led content.</li>
      </ul>

      <div className="my-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
        <h3 className="text-slate-900 mt-0">The "Hook Rate" Obsession</h3>
        <p className="mb-0">
          For mobile apps, the first 3 seconds are everything. We test dozens of visual hooks—from "green screen" commentary to ASMR—to find the scroll-stoppers that drive cheap clicks and high-quality installs.
        </p>
      </div>

      <h2>Scale Your Creative Testing</h2>
      <p>
        Ad fatigue hits mobile campaigns fast. You need to refresh your creative weekly. Our <Link href="/services/managed-ugc-campaigns">Managed Campaigns</Link> provide a constant pipeline of fresh videos, allowing you to rotate creative without burning out your internal team.
      </p>

      <h3>Case Study: FinTech App</h3>
      <p>
        We helped a leading finance app reduce their CPI by 40% by switching from motion graphics to creator-led storytelling. <Link href="/#case-studies">View our case studies</Link>.
      </p>

      <div className="mt-12 not-prose">
        <Link 
          href="/get-started" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
        >
          Get Custom App Creative
        </Link>
      </div>
    </ContentPageLayout>
  );
}

