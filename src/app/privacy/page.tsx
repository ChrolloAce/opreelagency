import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - OPREEL",
  description: "Our commitment to your privacy and data security.",
};

export default function PrivacyPage() {
  return (
    <ContentPageLayout title="Privacy Policy" lastUpdated="November 28, 2025">
      <h3>1. Introduction</h3>
      <p>
        Welcome to OPREEL ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </p>

      <h3>2. Information We Collect</h3>
      <p>
        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
      </p>
      <ul>
        <li>Personal Data: Name, email address, contact information.</li>
        <li>Order Data: Brand details, product descriptions, campaign preferences.</li>
        <li>Payment Data: We use Stripe for payment processing and do not store your credit card details directly.</li>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <p>
        We use the information we collect or receive:
      </p>
      <ul>
        <li>To facilitate account creation and logon process.</li>
        <li>To fulfill and manage your orders.</li>
        <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
        <li>To deliver targeted advertising to you.</li>
      </ul>

      <h3>4. Sharing Your Information</h3>
      <p>
        We may process or share your data that we hold based on the following legal basis:
      </p>
      <ul>
        <li>Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
        <li>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
      </ul>

      <h3>5. Contact Us</h3>
      <p>
        If you have questions or comments about this policy, you may email us at support@opreels.com.
      </p>
    </ContentPageLayout>
  );
}
