interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function IconButton({ children, className }: IconButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-full p-2 text-black ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
