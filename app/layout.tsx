import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/context/providers/Providers";
import Navbar from "@/components/layout/Navbar/Navbar";
import Cart from "@/components/layout/cart/Cart";
import Login from "@/components/layout/login";
import RegisterUser from "@/components/layout/createUser";

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
        <Providers>
          <Navbar />
          <Login />
          <RegisterUser />
          <Cart />
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
