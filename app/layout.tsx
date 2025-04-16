import React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scriper: AI-Powered Content Generation for Effortless Creation",
  description:
    "Unlock your content creation potential with Scriper, the AI-powered tool that generates high-quality content effortlessly. Start creating today!",
  openGraph: {
    title: "Scriper: AI-Powered Content Generation for Effortless Creation",
    description:
      "Unlock your content creation potential with Scriper, the AI-powered tool that generates high-quality content effortlessly. Start creating today!",
    url: "https://scriper.com",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Scriper: AI-Powered Content Generation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriper: AI-Powered Content Generation for Effortless Creation",
    description:
      "Unlock your content creation potential with Scriper, the AI-powered tool that generates high-quality content effortlessly. Start creating today!",
    images: [
      "/thumbnail.png",
    ]
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
