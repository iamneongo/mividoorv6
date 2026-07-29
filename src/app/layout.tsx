import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arsenijs Fabrica - brand of modern and innovative cosmetics",
  description:
    "Arsenijs Fabrica — a brand of modern and innovative safe cosmetics that can be bright, smell delicious and be aesthetically pleasing. Worldwide delivery.",
  icons: {
    icon: "/images/3537-666_favicon_3.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
