"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Text from "@/components/common/text/text";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

interface NavOptionProps {
  href?: string;
  children: React.ReactNode;
  icon?: ReactNode;
  className?: string;
  cartValid?: boolean;
  valueCart?: number;
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function NavOption({
  href,
  children,
  icon,
  className,
  cartValid,
  valueCart,
  onClick,
}: NavOptionProps) {
  const pathname = usePathname();

  return (
    <Link
      onClick={onClick}
      className={clsx(
        className,
        href === pathname && "bg-primary_light/20",
        `${inter.className} ease flex w-full items-center justify-start gap-5 rounded-lg p-4 text-lg font-semibold text-zinc-600 duration-150 hover:bg-zinc-100`,
      )}
      href={href ?? "/"}
    >
      {cartValid ? (
        <>
          <div className="flex w-full items-center gap-5">
            <span>{icon}</span>
            {children}
          </div>
          <div className="flex h-6 w-7 items-center justify-center rounded-full bg-primary text-white">
            <Text className="text-sm text-white">{valueCart}</Text>
          </div>
        </>
      ) : (
        <>
          <span className={clsx(href === pathname && "text-primary")}>
            {icon}
          </span>
          <span className={clsx(href === pathname && "text-primary")}>
            {children}
          </span>
        </>
      )}
    </Link>
  );
}
