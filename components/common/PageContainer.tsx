import clsx from "clsx";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <main
      className={clsx(className, "h-full w-full rounded bg-main_bg px-4 py-8")}
    >
      {children}
    </main>
  );
}
