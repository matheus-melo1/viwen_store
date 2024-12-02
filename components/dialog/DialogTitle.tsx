import clsx from "clsx";
import Title from "../common/text/title";
import { X } from "lucide-react";

interface DialogTitleProps {
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
  sizeFont?: "1" | "2" | "3" | "4" | "5" | "6";
}

export default function DialogTitle({
  children,
  className,
  sizeFont,
  onClose,
}: DialogTitleProps) {
  return (
    <section
      className={clsx(
        className,
        "flex w-full items-center justify-between rounded-t-md border-b border-bg_secondary p-4 text-zinc-800",
      )}
    >
      <Title size={sizeFont ?? "2"}>{children}</Title>
      <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
    </section>
  );
}
