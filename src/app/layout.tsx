import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import ClientComponents from "@/components/ClientComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devchi.me"),
  title: "Devchi Digital - Software Development & Digital Solutions | Nigeria",
  description:
    "We build custom software solutions that tackle real-world problems. From concept to launch, we partner with businesses to build software that solve their business needs and help scale operations.",
  keywords: [
    "Devchi Digital",
    "software development",
    "custom software",
    "web development",
    "mobile app development",
    "SaaS",
    "digital solutions",
    "Nigeria",
    "Lagos",
    "product design",
    "UI/UX",
    "API development",
    "cloud",
    "DevOps",
    "business automation",
    "IT consulting",
  ],
  authors: [{ name: "Devchi Digital", url: "https://devchi.me" }],
  openGraph: {
    title: "Devchi Digital - Software Development & Digital Solutions | Nigeria",
    description:
      "We build custom software solutions that tackle real-world problems. From concept to launch, we partner with businesses to build software that solve their business needs and help scale operations.",
    url: "https://devchi.me",
    siteName: "Devchi Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1080,
        height: 1080,
        alt: "Devchi Digital - Software Development & Digital Solutions",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devchi Digital - Software Development & Digital Solutions | Nigeria",
    description:
      "We build custom software solutions that tackle real-world problems. From concept to launch, we partner with businesses to build software that solve their business needs and help scale operations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <Sidebar>{children}</Sidebar>
        <ClientComponents />
      </body>
    </html>
  );
}
