import clsx from "clsx";

interface DialogProps {
  children?: React.ReactNode;
  className?: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  showDrawer: boolean;
  onClose?: () => void;
}

export default function Drawer({
  children,
  className,
  onClose,
  size,
  showDrawer,
}: DialogProps) {
  const sizeClasses = {
    xs: "w-[320px]",
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
          sizeClasses[size],
          "absolute left-0 top-0 z-[99999] flex h-screen flex-col justify-between overflow-hidden rounded-lg bg-main_bg transition-all duration-500 ease-out max-sm:w-full",
          {
            "translate-x-0": showDrawer,
            "-translate-x-[900px]": !showDrawer,
          },
        )}
      >
        {children}
      </main>
      <div
        onClick={onClose}
        className={clsx(
          {
            block: showDrawer,
            hidden: !showDrawer,
          },
          "ease absolute left-0 top-0 z-50 h-full w-full bg-black/30 transition-all duration-200",
        )}
      ></div>
    </>
  );
}
