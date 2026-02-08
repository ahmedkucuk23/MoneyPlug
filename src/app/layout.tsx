import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Space_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Money Plug™ — I Plug Influencers Into Money",
  description:
    "The shadow operator behind creator product launches that actually sell. From audience psychology to payment processing — I engineer the entire revenue system.",
  keywords: [
    "influencer monetization",
    "creator economy",
    "product launch",
    "Money Plug",
    "Money Plug Lab",
    "influencer revenue",
    "creator products",
  ],
  openGraph: {
    title: "Money Plug™ — I Plug Influencers Into Money",
    description:
      "The shadow operator behind creator product launches that actually sell.",
    url: "https://money-plug.com",
    siteName: "Money Plug™",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebas.variable} ${spaceMono.variable}`}
    >
      <body className="font-montserrat bg-brand-black text-brand-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
