import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoofVoice AI — Book 5+ Roofing Jobs This Month",
  description:
    "AI Voice Agents that answer every storm-season call, qualify leads, and book jobs 24/7 for US & Canada roofing contractors.",
  openGraph: {
    title: "RoofVoice AI — Never Miss Another Roofing Lead",
    description:
      "Storm-ready AI voice agents that turn missed calls into booked jobs in 48 hours.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans grain relative">
        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
