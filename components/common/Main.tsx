import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: ContainerProps) {
  return (
    <div className={clsx(className, "h-full w-full overflow-y-auto p-2")}>
      {children}
    </div>
  );
}
