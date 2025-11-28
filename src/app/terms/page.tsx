import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - OPREEL",
  description: "Terms and conditions for using OPREEL services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="November 28, 2025">
      <h3>1. Agreement to Terms</h3>
      <p>
        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and OPREEL ("we," "us" or "our"), concerning your access to and use of the OPREEL website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
      </p>

      <h3>2. Services</h3>
      <p>
        OPREEL provides user-generated content (UGC) creation and management services. We connect brands with content creators to produce video assets for marketing purposes.
      </p>

      <h3>3. User Representations</h3>
      <p>
        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
      </p>

      <h3>4. Purchases and Payment</h3>
      <p>
        We accept the following forms of payment: Credit/Debit Cards via Stripe. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
      </p>

      <h3>5. Content Ownership</h3>
      <p>
        Upon full payment, you (the Client) receive full usage rights to the final video assets delivered by OPREEL creators, in perpetuity, for use across any digital platform, unless otherwise specified in a custom agreement.
      </p>

      <h3>6. Contact Us</h3>
      <p>
        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at support@opreels.com.
      </p>
    </LegalPageLayout>
  );
}

