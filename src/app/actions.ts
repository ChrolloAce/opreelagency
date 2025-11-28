"use server";

import { redirect } from "next/navigation";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
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
        from: "OPREEL <onboarding@resend.dev>", // Default Resend sender or your verified domain
        to: [payload.to], // Send to user
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API Error:", errorData);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Network error" };
  }
}

export async function submitInquiry(formData: any) {
  // 1. Send Admin Notification (Optional - you can add this later)
  // 2. Send User Confirmation
  await sendEmail({
    to: formData.email,
    subject: "We received your strategy request - OPREEL",
    html: `
      <div style="font-family: sans-serif; color: #333;">
        <h1>Strategy Request Received</h1>
        <p>Hi ${formData.fullName},</p>
        <p>Thanks for contacting OPREEL. We've received your inquiry about scaling <strong>${formData.companyName}</strong>.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li>Platform: ${formData.platform}</li>
          <li>Budget: ${formData.budget}</li>
          <li>Start Date: ${formData.startDate}</li>
        </ul>
        <p>Our team will review your application and get back to you within 24 hours with a custom strategy proposal.</p>
        <br/>
        <p>Best,</p>
        <p>The OPREEL Team</p>
      </div>
    `
  });

  redirect("/thank-you");
}

export async function submitOrder(orderData: any) {
  await sendEmail({
    to: orderData.email,
    subject: "Order Confirmation - OPREEL",
    html: `
      <div style="font-family: sans-serif; color: #333;">
        <h1>Order Confirmed</h1>
        <p>Hi there,</p>
        <p>Thank you for your order with OPREEL!</p>
        <div style="background: #f4f4f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Order Summary</h3>
          <p><strong>Plan:</strong> ${orderData.planType.replace("-", " ")}</p>
          <p><strong>Volume:</strong> ${orderData.videoCount} Videos</p>
          <p><strong>Total:</strong> $${orderData.totalPrice}</p>
        </div>
        <p><strong>Next Steps:</strong></p>
        <p>We will begin sourcing creators matching your style preferences immediately. You will receive an update when production begins.</p>
        <br/>
        <p>Best,</p>
        <p>The OPREEL Team</p>
      </div>
    `
  });

  redirect("/thank-you");
}

