import { IProductModel } from "@/models/products/IProductModel";
import { MouseEvent } from "react";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onClickFavorite?: (item: IProductModel) => void;
}

export default function IconButton({
  children,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={(ev) => onClick?.(ev)}
      className={`ease flex items-center justify-center rounded-full p-2 text-zinc-800 duration-300 active:scale-90 active:bg-black/10 ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
