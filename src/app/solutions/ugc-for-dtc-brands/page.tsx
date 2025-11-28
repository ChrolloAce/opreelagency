import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UGC for DTC Brands | Ecommerce Video Creative - OPREEL",
  description: "Drive sales with authentic UGC ads for your Shopify store. High-converting video creative for beauty, fashion, and wellness brands.",
};

export default function DtcUGCPage() {
  return (
    <ContentPageLayout title="UGC for Direct-to-Consumer Brands">
      <p className="lead text-xl text-slate-600">
        In the world of DTC, "ad creative" is the new targeting. Algorithms are smart enough to find your customers—if you feed them the right content. We produce high-converting UGC that fuels profitable scale for Shopify brands.
      </p>

      <h2>From "Nice to Have" to "Growth Engine"</h2>
      <p>
        Static images and polished studio shoots are expensive and slow. User Generated Content is fast, affordable, and outperforms traditional ads by building social proof.
      </p>

      <h3>Winning Formats for E-commerce</h3>
      <ul>
        <li><strong>Unboxing Experience:</strong> Capture the excitement of receiving your product.</li>
        <li><strong>Problem/Solution:</strong> Demonstrate the value prop clearly and quickly.</li>
        <li><strong>"TikTok Made Me Buy It":</strong> Leverage trending audio and formats to go viral.</li>
        <li><strong>3 Reasons Why:</strong> educational hooks that overcome objections.</li>
      </ul>

      <h2>Stop Ad Fatigue</h2>
      <p>
        The biggest bottleneck for DTC growth is creative exhaustion. When a winning ad dies, your ROAS crashes. We solve this by delivering <Link href="/services/managed-ugc-campaigns">volume on demand</Link>. We create variations of your winners to extend their lifespan and test new angles constantly.
      </p>

      <div className="my-12 p-6 bg-green-50 rounded-2xl border border-green-100">
        <h3 className="text-green-900 mt-0">Results Focused</h3>
        <p className="mb-0 text-green-800">
          We don't just make "pretty" videos. We optimize for <strong>Purchase Conversion Value</strong>. We analyze hook rates, hold rates, and click-through rates to iterate on what drives revenue.
        </p>
      </div>

      <p>
        Also scaling a mobile app? Check out our specialized <Link href="/solutions/ugc-for-mobile-apps">App User Acquisition</Link> solutions.
      </p>

      <div className="mt-12 not-prose">
        <Link 
          href="/get-started" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
        >
          Scale Your Store's Creative
        </Link>
      </div>
    </ContentPageLayout>
  );
}

