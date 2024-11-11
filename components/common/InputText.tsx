import clsx from "clsx";

interface InputTextProps {
  className?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string | number;
  type: "text" | "number";
  placeholder?: string;
}

export default function InputText({
  onChange,
  onClick,
  value,
  className,
  placeholder,
  type,
}: InputTextProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      onClick={onClick}
      type={type}
      placeholder={placeholder}
      className={clsx(
        "input-primary rounded-lg bg-white p-2 text-secondary_text outline-none",
        className,
      )}
    />
  );
}
