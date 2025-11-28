import { ThankYouContent } from "@/components/inquiry/ThankYouContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - OPREEL",
  description: "Your submission has been received.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
