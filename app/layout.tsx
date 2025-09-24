import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebrowse - Loom for workflow automation",
  description: "F*ck n8n. Just record. Create workflow automation by simply recording.",
  keywords: ["automation", "workflow", "browser recording", "no-code", "productivity", "rebrowse"],
  authors: [{ name: "Norika Kizawa", url: "https://n0ri.com" }],
  creator: "Norika Kizawa",
  metadataBase: new URL("https://www.rebrowse.me"), // Replace with your actual domain
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rebrowse.me", // Replace with your actual domain
    siteName: "Rebrowse",
    title: "Rebrowse - Loom for workflow automation",
    description: "F*ck n8n. Just record! Create workflow automation by simply recording.",
         images: [
       {
         url: "/images/rebrowse-social-card.png",
         width: 1200,
         height: 630,
         alt: "Rebrowse - I will just record vs learning complex automation tools",
       },
     ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@n0rizkitty", // Your Twitter handle
    creator: "@n0rizkitty",
    title: "Rebrowse - Loom for workflow automation",
    description: "F*ck n8n. Just record! Create workflow automation by simply recording.",
         images: ["/images/rebrowse-social-card.png"],
  },
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/rebrowse-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  
  // Additional meta tags
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
