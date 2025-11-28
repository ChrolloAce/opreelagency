"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia", // Use latest or your preferred version
});

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(payload: EmailPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set");
    // Don't fail hard if email key is missing, just log
    return { success: false, error: "Server configuration error" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "OPREEL <onboarding@resend.dev>",
        to: [payload.to],
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (!response.ok) {
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Network error" };
  }
}

export async function submitInquiry(formData: any) {
  await sendEmail({
    to: formData.email,
    subject: "Strategy Request Received - OPREEL",
    html: `
      <h1>Strategy Request Received</h1>
      <p>Name: ${formData.fullName}</p>
      <p>Company: ${formData.companyName}</p>
      <p>Platform: ${formData.platform}</p>
      <p>Budget: ${formData.budget}</p>
    `
  });
  redirect("/thank-you");
}

// New: Stripe Checkout Action
export async function createStripeSession(orderData: any) {
  const { videoCount, planType, email, promotionDetails, formatStyle } = orderData;

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Stripe key is missing");
  }

  // 1. Recalculate Price on Server (Security)
  let pricePerVideo = 0;
  if (planType === "just-videos") {
     // Base $12, Floor $8
     const discountFactor = (videoCount / 4000) * 4;
     pricePerVideo = Math.max(8, Math.min(12, 12 - discountFactor));
  } else {
     // Base $25, Floor $18
     const discountFactor = (videoCount / 4000) * 7;
     pricePerVideo = Math.max(18, Math.min(25, 25 - discountFactor));
  }
  
  const totalPrice = Math.round(videoCount * pricePerVideo); // Total in Dollars
  const unitAmount = Math.round(totalPrice * 100); // Total in Cents

  // 2. Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${planType === "done-for-you" ? "Done For You" : "Just Videos"} Plan`,
            description: `${videoCount} Videos | ${promotionDetails.slice(0, 50)}...`,
          },
          unit_amount: unitAmount, // Stripe expects total amount for quantity=1 here if we treat the "Plan" as 1 item
        },
        quantity: 1,
      },
    ],
    metadata: {
      videoCount: videoCount.toString(),
      planType: planType,
      promotionDetails: promotionDetails.slice(0, 500),
      formatStyle: formatStyle.slice(0, 500),
    },
    mode: "payment",
    invoice_creation: {
      enabled: true,
    },
    success_url: `http://localhost:3001/thank-you?session_id={CHECKOUT_SESSION_ID}`, // Replace localhost with your domain in prod
    cancel_url: `http://localhost:3001/order`,
  });

  if (!session.url) {
    throw new Error("Failed to create Stripe session");
  }

  redirect(session.url);
}

// Legacy simple order submit (replaced by Stripe)
export async function submitOrder(orderData: any) {
  await sendEmail({
    to: orderData.email,
    subject: "Order Confirmation",
    html: `<p>Manual order received for ${orderData.videoCount} videos.</p>`
  });
  redirect("/thank-you");
}
