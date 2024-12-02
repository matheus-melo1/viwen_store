import clsx from "clsx";
import { motion } from "motion/react";
import React from "react";

interface AnimateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Animate({ className, children }: AnimateProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
