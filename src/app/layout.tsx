import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
