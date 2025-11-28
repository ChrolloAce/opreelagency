import { CreatorApplicationContent } from "@/components/creators/CreatorApplicationContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Application - OPREEL",
  description: "Join the OPREEL creator network. Apply now to work with top brands.",
};

export default function CreatorApplicationPage() {
  return <CreatorApplicationContent />;
}

