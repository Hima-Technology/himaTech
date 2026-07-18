import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hima Technologies | Software Solutions in Zanzibar",
  description: "Zanzibar-based tech firm specializing in software development. We deliver cutting-edge solutions to drive digital transformation for businesses.",
  keywords: [
    "Zanzibar tech company",
    "AI solutions Tanzania",
    "cybersecurity services",
    "software development",
    "data analytics",
    "IT consulting",
    "Hima Technologies"
  ],
  openGraph: {
    title: "Hima Technologies | Digital Innovation in Zanzibar",
    description: "Forward-thinking tech solutions for East African businesses. Expertise in AI, cybersecurity, and software development.",
    url: "https://www.himatech.co.tz",
    siteName: "Hima Technologies",
    images: [
      {
        url: "https://www.himatech.co.tz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hima Technologies - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hima Technologies | Software Solutions in Zanzibar",
    description: "Innovative tech solutions from Zanzibar to the world",
    images: ["https://www.himatech.co.tz/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}