/* eslint-disable */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mividoor.vn"),
  title: "Mivicomposite - Nhà máy cửa composite Mividoor",
  description:
    "Mividoor — Cửa composite công nghệ Đức: Chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành 10 năm. Hơn 10.000 bộ cửa đã bàn giao trên toàn quốc.",
  verification: {
    google: "cnLMjmIL8pWY_gpNv83OkW9IKhuFnNwYRZtdbN7jurc",
  },
  alternates: {
    canonical: "https://mividoor.vn/",
  },
  icons: {
    icon: "/mividoor/favicon.png",
    apple: "/mividoor/apple-touch-icon.png",
  },
  openGraph: {
    title: "Cửa composite Mividoor",
    description:
      "Cửa composite công nghệ Đức: Chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành 10 năm.",
    images: ["https://mividoor.vn/mividoor/images/banner-new-2.webp"],
    type: "website",
    locale: "vi_VN",
    siteName: "Mivicomposite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cửa composite Mividoor",
    description:
      "Cửa composite công nghệ Đức: Chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành 10 năm.",
    images: ["https://mividoor.vn/mividoor/images/banner-new-2.webp"],
  },
};

import { TopBar } from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
        <head>
          <link
            rel="preload"
            as="image"
            href="/mividoor/images/banner-new-2.webp"
            fetchPriority="high"
          />
        </head>
        <body className="min-h-full bg-background font-sans text-foreground">
          <TopBar />
        {children}
        </body>
    </html>
  );
}
