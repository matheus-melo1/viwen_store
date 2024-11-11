import clsx from "clsx";
import React from "react";

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
}

export default function DialogContent({ className, children }: DialogContentProps) {
  return <section className={clsx(className, "w-full")}>{children}</section>;
}
