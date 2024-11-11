import { IProductModel } from "@/models/products/IProductModel";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onClickFavorite?: (item: IProductModel) => void;
}

export default function IconButton({ children, className, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full p-2 text-black ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
