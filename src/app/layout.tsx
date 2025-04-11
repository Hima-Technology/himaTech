import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FixedPlugin, Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}