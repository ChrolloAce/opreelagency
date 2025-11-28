import { OrderContent } from "@/components/order/OrderContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Videos - OPREEL",
  description: "Purchase high-volume UGC videos directly.",
};

export default function OrderPage() {
  return <OrderContent />;
}
