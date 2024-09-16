import '@/lib/posthog';
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "A Header",
  description: "A description",
  keywords: ["web development", "design", "coding"],
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-192x192.png", sizes: "192x192" },
    { rel: "icon", url: "/favicon-512x512.png", sizes: "512x512" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$${inter.variable} font-sans`}>
        <GoogleTagManager gtmId="YOUR_ID" />
        {children}
      </body>
    </html>
  );
}