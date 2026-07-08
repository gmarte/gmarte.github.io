import type { Metadata } from "next";
import NetworkCard from "@/components/sections/NetworkCard";

export const metadata: Metadata = {
  title: "Connect | Giancarlo Marte",
  description:
    "Digital credential card — connect with Giancarlo Marte in person.",
  robots: { index: false },
};

export default function NetworkPage() {
  return <NetworkCard />;
}
