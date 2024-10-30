import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Viwen Store",
  description: "Viwen Store Clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex h-screen w-full gap-1 bg-zinc-100 antialiased max-lg:flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
