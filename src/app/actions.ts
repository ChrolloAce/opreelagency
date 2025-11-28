"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia" as any, // Bypass strict version check for build
});

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: string; // Base64 string
  }[];
}

export async function sendEmail(payload: EmailPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set");
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
        attachments: payload.attachments,
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

export async function submitCreatorApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const age = formData.get("age") as string;
  const gender = formData.get("gender") as string;
  const country = formData.get("country") as string;
  const instagram = formData.get("instagram") as string;
  const tiktok = formData.get("tiktok") as string;
  const twitter = formData.get("twitter") as string;
  const experience = formData.get("experience") as string;
  
  const resumeFile = formData.get("resume") as File | null;
  let attachments: { filename: string; content: string }[] = [];

  if (resumeFile && resumeFile.size > 0) {
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    attachments.push({
      filename: resumeFile.name,
      content: buffer.toString("base64") // Convert to base64 for API
    });
  }

  // 1. Send Notification to Admin
  await sendEmail({
    to: "ernesto@maktubtechnologies.com",
    subject: `New Creator Application: ${name}`,
    html: `
      <h1>New Creator Application</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Country:</strong> ${country}</p>
      <hr />
      <p><strong>Instagram:</strong> ${instagram || "N/A"}</p>
      <p><strong>TikTok:</strong> ${tiktok || "N/A"}</p>
      <p><strong>X (Twitter):</strong> ${twitter || "N/A"}</p>
      <hr />
      <p><strong>Experience:</strong></p>
      <p>${experience}</p>
    `,
    attachments: attachments
  });

  // 2. Send Confirmation to Creator
  await sendEmail({
    to: email,
    subject: "Application Received - OPREEL",
    html: `
      <h1>We received your application!</h1>
      <p>Hi ${name},</p>
      <p>Thanks for applying to join the OPREEL creator network. Our team will review your profile and portfolio.</p>
      <p>If you're a good fit for our current campaigns, we'll be in touch shortly.</p>
      <br />
      <p>Best,</p>
      <p>The OPREEL Team</p>
    `
  });

  redirect("/thank-you");
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
