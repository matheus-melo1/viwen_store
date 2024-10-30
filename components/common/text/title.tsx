interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "2" | "3" | "4" | "5" | "6" | undefined;
}

export default function Title({ children, className, size }: TitleProps) {
  return (
    <h1 className={`font-sans text-${size ?? ""}xl ${className}`}>
      {children}
    </h1>
  );
}
