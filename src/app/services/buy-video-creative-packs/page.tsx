import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy UGC Video Ads | Custom Creative Packs - OPREEL",
  description: "Order high-quality UGC video ads on demand. Fast turnaround, vetted creators, and affordable pricing for brands and agencies.",
};

export default function BuyVideoPacksPage() {
  return (
    <ContentPageLayout title="Buy UGC Video Creative Packs">
      <p className="lead text-xl text-slate-600">
        Need content fast? Order custom UGC videos directly from our vetted creator network. No monthly retainers, just high-converting assets delivered to your dashboard.
      </p>

      <h2>Direct-to-Consumer Video Ordering</h2>
      <p>
        Perfect for agencies and brands who have their own internal strategy but need raw fuel for their ad accounts. You provide the brief, we provide the videos.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
        <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Standard Video</h3>
          <p className="text-slate-500 mb-4">Authentic testimonials and unboxings.</p>
          <ul className="space-y-2 text-sm text-slate-600 mb-6">
            <li>✓ 1 Creator</li>
            <li>✓ 15-30 Seconds</li>
            <li>✓ Basic Editing</li>
          </ul>
        </div>
        <div className="p-6 border border-blue-200 rounded-2xl bg-blue-50 shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Performance Ad</h3>
          <p className="text-blue-800 mb-4">Direct response optimized for conversions.</p>
          <ul className="space-y-2 text-sm text-blue-800 mb-6">
            <li>✓ Strong Hooks</li>
            <li>✓ CTA Overlay</li>
            <li>✓ Trend-Aware Editing</li>
          </ul>
        </div>
      </div>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Select Your Pack:</strong> Choose between 10, 20, or 50 video bundles.</li>
        <li><strong>Submit Brief:</strong> Tell us about your product and desired angle.</li>
        <li><strong>Receive Content:</strong> We ship completed videos in 5-7 days.</li>
      </ol>

      <h2>Comparing Options</h2>
      <p>
        If you need strategic guidance, creative testing, and ongoing iteration, consider our <Link href="/services/managed-ugc-campaigns">Managed UGC Campaigns</Link>. Video Packs are best for teams that already know their winning formulas.
      </p>

      <div className="mt-12 not-prose">
        <Link 
          href="/order?plan=just-videos" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1"
        >
          Order Video Packs Now
        </Link>
      </div>
    </ContentPageLayout>
  );
}

