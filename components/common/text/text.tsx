interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <p className={`font-sans ${className}`}>{children}</p>
  );
}
