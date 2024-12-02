import clsx from "clsx";
import React from "react";

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
}

export default function DrawerContent({ className, children }: DialogContentProps) {
  return <section className={clsx(className, "w-full h-full overflow-y-auto p-4")}>{children}</section>;
}
