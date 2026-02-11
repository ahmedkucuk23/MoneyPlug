import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Money Plug™ | Creator Monetization Systems & Revenue Engineering",
  description:
    "I engineer digital products, build launch systems, and turn your followers into revenue. €0 upfront — commission only. 150+ sales from a 26K account in 4 days. Apply now.",
  keywords: [
    "creator monetization",
    "sell digital products instagram",
    "launch course instagram",
    "creator revenue system",
    "monetize followers",
    "digital product launch",
    "instagram monetization 2026",
    "Money Plug",
    "Money Plug Lab",
    "revenue engineering",
    "creator economy",
  ],
  authors: [{ name: "Money Plug™" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://money-plug.com/",
  },
  openGraph: {
    type: "website",
    url: "https://money-plug.com/",
    title: "Money Plug™ | Creator Monetization Systems & Revenue Engineering",
    description:
      "I engineer digital products, build launch systems, and turn followers into revenue. €0 upfront — commission only. 150+ sales in 4 days. Apply now.",
    siteName: "Money Plug™",
    locale: "en_US",
    images: [
      {
        url: "https://money-plug.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Plug™ | Creator Monetization Systems & Revenue Engineering",
    description:
      "I engineer digital products, build launch systems, and turn followers into revenue. Commission only. Apply now.",
    images: ["https://money-plug.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
      className={`${montserrat.variable} ${bebas.variable} ${inter.variable} overflow-x-hidden`}
    >
      <body className="font-montserrat bg-brand-black text-brand-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Money Plug™",
              description:
                "Influencer monetization service — digital product creation, launch campaigns, and revenue systems. Commission-based, €0 upfront.",
              url: "https://money-plug.com",
              logo: "https://money-plug.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Ahmed K.",
                jobTitle: "Founder",
              },
              areaServed: [
                { "@type": "Country", name: "Bosnia and Herzegovina" },
                { "@type": "Country", name: "Croatia" },
                { "@type": "Country", name: "Serbia" },
                { "@type": "Country", name: "Montenegro" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sarajevo",
                addressCountry: "BA",
              },
              sameAs: [
                "https://instagram.com/moneyplug.ak",
                "https://instagram.com/moneypluglab",
              ],
              priceRange: "Commission-based",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does it cost to work with Money Plug?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "€0 upfront. Money Plug works on commission — a percentage of every sale. You only pay when you make money.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do influencers sell digital products on Instagram?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Money Plug creates your digital product, builds your sales page, sets up payment processing, and engineers a launch campaign with psychologically-optimized story scripts and DM sequences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What conversion rate can I expect?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Money Plug's system has achieved a 0.38% conversion rate from organic Instagram traffic — nearly 4x the industry average of 0.1%. From a 26K follower account, this generated 150+ sales and €10K in revenue in just 4 days.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a big following to sell a digital product?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. A 26K account generated €10K in 4 days with the Money Plug system. What matters is engagement quality and the right launch strategy, not follower count.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if I don't have a product yet?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "That's exactly what Money Plug does. The entire product is created, structured, recorded, and packaged for you based on your audience's psychology.",
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
