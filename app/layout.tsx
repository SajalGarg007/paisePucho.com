import type { Metadata } from "next";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spacegrotesk = Space_Grotesk({ subsets: ["latin"],
     weight:['300','400','500','600','700']
});

export const metadata: Metadata = {
  title: "PricePucho",
  description: "Track product prices effortlessly and save money on your online shopping",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/4844/4844733.png" />
      </head>
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar/>
        {children}
        </main>
        </body>
    </html>
  );
}
