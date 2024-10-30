import Link from "next/link";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

interface NavOptionProps {
  href: string;
  children: string;
  icon?: ReactNode;
}

export default function NavOption({ href, children, icon }: NavOptionProps) {
  return (
    <Link
      className={`${inter.className} ease flex w-full items-center justify-start gap-5 rounded-lg p-4 text-lg font-semibold text-zinc-600 duration-150 hover:bg-zinc-100`}
      href={href}
    >
      <span>{icon}</span>
      {children}
    </Link>
  );
}
