import clsx from "clsx";
import { MouseEvent, ReactNode } from "react";
import Animate from "./Animate";

interface ButtonProps {
  loading?: boolean;
  onClick?: (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  variant: "filled" | "outlined" | "text";
  className?: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  onClick,
  loading,
  variant,
  children,
  className,
  disabled,
  icon,
  type,
}: ButtonProps) {
  const variantStyle = {
    filled: "btn-primary",
    outlined: "btn-outlined",
    text: "btn-text",
  };

  return (
    <button
      className={clsx(
        variantStyle[variant],
        className,
        "flex items-center gap-3 px-4",
      )}
      disabled={disabled ?? false}
      type={type ?? "button"}
      onClick={(ev) => onClick?.(ev)}
    >
      {loading ? (
        <Animate className="relative h-6 w-6 animate-spin duration-75">
          <div className="h-full w-full rounded-full border-2 border-zinc-100/50 bg-transparent"></div>
          <div className="absolute top-0 h-full w-full rounded-full border-r-2 border-white bg-transparent"></div>
        </Animate>
      ) : (
        <>
          {icon && <span className="h-[18px] w-[18px]">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
