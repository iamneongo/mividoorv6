import { RealtimeNews } from "@/components/RealtimeNews";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "https://mividoor.vn/tin-tuc/" } };

export default function NewsPage() {
  return <RealtimeNews />;
}
