import clsx from "clsx";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size: "1" | "2" | "3" | "4" | "5" | "6";
}

export default function Title({ children, className, size }: TitleProps) {
  const sizesClasses = {
    1: "text-xl",
    2: "text-2xl",
    3: "text-3xl",
    4: "text-4xl",
    5: "text-5xl",
    6: "text-6xl",
  };

  return (
    <h1
      className={clsx(
        sizesClasses[size],
        className,
        "font-sans max-sm:text-lg text-zinc-800",
      )}
    >
      {children}
    </h1>
  );
}
