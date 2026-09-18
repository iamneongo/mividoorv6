/* eslint-disable */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mividoor.vn"),
  title: "Cửa composite Mividoor",
  description:
    "Mividoor — Cửa composite công nghệ Đức: Chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành 10 năm. Hơn 10.000 bộ cửa đã bàn giao trên toàn quốc.",
  verification: {
    google: "cnLMjmIL8pWY_gpNv83OkW9IKhuFnNwYRZtdbN7jurc",
    other: {
      "msvalidate.01": "5B200A96E4547B1F129421999FC77703",
    },
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
    url: "https://mividoor.vn/",
    images: [
      {
        url: "https://mividoor.vn/mividoor/images/banner-new-2.webp",
        width: 1672,
        height: 941,
        alt: "Cửa composite Mividoor",
      },
    ],
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
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { FloatingContact } from "@/components/FloatingContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
        <body className="min-h-full bg-background font-sans text-foreground">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-SHJ71EJK0M"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SHJ71EJK0M');`}
          </Script>
          <a
            href="#main-content"
            className="sr-only z-[10000] rounded bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Bỏ qua đến nội dung chính
          </a>
          <TopBar />
          <SeoJsonLd />
          <main id="main-content">{children}</main>
          <FloatingContact />
        </body>
    </html>
  );
}
