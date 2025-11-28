import { GetStartedContent } from "@/components/inquiry/GetStartedContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started - OPREEL",
  description: "Scale your brand with UGC. Book a strategy call or order videos directly.",
};

export default function GetStartedPage() {
  return <GetStartedContent />;
}
