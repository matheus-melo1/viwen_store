import clsx from "clsx";
import React from "react";

interface DrawerActionsProps {
  className?: string;
  children: React.ReactNode;
}

export default function DrawerActions({ className, children }: DrawerActionsProps) {
  return <section className={clsx(className, "w-full flex justify-end p-4 text-zinc-800 border-t border-bg_secondary")}>{children}</section>;
}
