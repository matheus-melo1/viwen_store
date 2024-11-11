import clsx from "clsx";

interface DialogProps {
  children?: React.ReactNode;
  className?: string;
  size: "sm" | "md" | "lg" | "xl";
  showDrawer: boolean;
}

export default function Drawer({
  children,
  className,
  size,
  showDrawer,
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
          showDrawer ? "flex" : "hidden",
          sizeClasses[size],
          "h-screen absolute left-0 top-0 z-[99999] flex-col overflow-hidden rounded-lg bg-main_bg",
        )}
      >
        {children}
      </main>
      <div
        className={clsx(
          showDrawer ? "block" : "hidden",
          "absolute left-0 top-0 z-50 h-full w-full bg-black/30",
        )}
      ></div>
    </>
  );
}