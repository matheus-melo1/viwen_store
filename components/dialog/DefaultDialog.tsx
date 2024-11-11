import clsx from "clsx";

interface DialogProps {
  children?: React.ReactNode;
  className?: string;
  size: "sm" | "md" | "lg" | "xl";
  showDialog: boolean;
}

export default function DefaultDialog({
  children,
  className,
  size,
  showDialog,
}: DialogProps) {

  const sizeClasses = {
    sm: "w-[640px]",
    md: "w-[1024px]",
    lg: "w-[1280px]",
    xl: "w-[1536px]",
  };

  return (
    <>
      <main
        className={clsx(
          className,
          showDialog ? "flex" : "hidden",
          sizeClasses[size],
          "animate-zoom absolute left-1/2 top-1/2 z-[99999] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg bg-main_bg",
        )}
      >
        {children}
      </main>
      <div
        className={clsx(
          showDialog ? "block" : "hidden",
          "absolute left-0 top-0 z-50 h-full w-full bg-black/30",
        )}
      ></div>
    </>
  );
}
