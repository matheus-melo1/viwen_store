import clsx from "clsx";

interface DialogProps {
  children?: React.ReactNode;
  className?: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  showDialog: boolean;
  onClose?: () => void;
}

export default function DefaultDialog({
  children,
  className,
  onClose,
  size,
  showDialog,
}: DialogProps) {
  const sizeClasses = {
    xs: "w-[420px] max-sm:w-[90%]",
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
          "absolute left-1/2 top-1/2 z-[99999] -translate-x-1/2 -translate-y-1/2 animate-zoom flex-col overflow-hidden rounded-lg bg-main_bg",
        )}
      >
        {children}
      </main>
      <div
        onClick={onClose}
        className={clsx(
          showDialog ? "block" : "hidden",
          "absolute left-0 top-0 z-[999] h-full w-full bg-black/30",
        )}
      ></div>
    </>
  );
}
