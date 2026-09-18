import { RealtimeNews } from "@/components/RealtimeNews";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức cửa composite và nội thất Mividoor",
  description: "Cập nhật tin tức, xu hướng thiết kế nội thất, hoạt động và kiến thức chọn cửa composite từ Mividoor.",
  alternates: { canonical: "https://mividoor.vn/tin-tuc/" },
};

export default function NewsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", path: "/" }, { name: "Tin tức", path: "/tin-tuc/" }]} />
      <RealtimeNews />
    </>
  );
}
