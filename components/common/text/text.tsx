import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <p className={clsx(className, "font-sans")}>{children}</p>
  );
}
