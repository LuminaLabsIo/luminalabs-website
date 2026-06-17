import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Lumina Labs - iOS App Development",
  description: "Professional iOS application development studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        margin: 0 
      }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}