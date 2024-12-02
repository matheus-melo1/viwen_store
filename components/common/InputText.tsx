"use client";

import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import IconButton from "./IconButton";
import { useState } from "react";
import Text from "./text/text";
import { FieldError } from "react-hook-form";

interface InputTextProps {
  className?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string | number;
  type: "text" | "number" | "password";
  placeholder?: string;
  variant?: "outlined" | "filled" | "clean";
  icon?: React.ReactNode;
  useRegister?: object;
  useError?: FieldError | undefined;
  errorMessage?: string;
}

export default function InputText({
  onChange,
  onClick,
  value,
  useRegister,
  icon,
  className,
  variant,
  placeholder,
  errorMessage,
  useError,
  type,
}: InputTextProps) {
  const [pass, setPass] = useState(type === "password" ? true : false);

  return (
    <>
      <div className="relative">
        {icon && (
          <div
            className={clsx(
              useError && "text-red-700",
              "absolute left-2 top-1/2 h-5 w-5 -translate-y-[50%] text-zinc-500",
            )}
          >
            {icon}
          </div>
        )}
        {pass && type === "password" && (
          <IconButton
            onClick={(ev) => {
              ev.stopPropagation();
              ev.preventDefault();
              setPass((prev) => !prev);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-600"
          >
            <EyeOff className="h-full w-full text-zinc-700" />
          </IconButton>
        )}
        {!pass && type === "password" && (
          <IconButton
            onClick={(ev) => {
              ev.stopPropagation();
              ev.preventDefault();
              setPass((prev) => !prev);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-600"
          >
            <Eye className="h-full w-full text-zinc-700" />
          </IconButton>
        )}
        <input
          value={value}
          onChange={onChange}
          onClick={onClick}
          type={!pass ? "text" : "password"}
          placeholder={placeholder}
          {...useRegister}
          className={clsx(
            useError && "border-red-600 focus:border-red-600 hover:border-red-600",
            icon && "pl-9",
            variant === "outlined" && "border border-bg_secondary",
            variant === "filled" && "bg-bg_secondary",
            "input-primary rounded-lg p-2 text-secondary_text outline-none",
            className,
          )}
        />
      </div>
      {useError && <Text className="text-red-600 text-sm">{errorMessage}</Text>}
    </>
  );
}
