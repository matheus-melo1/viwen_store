import clsx from "clsx";
import Title from "../common/text/title";
import { X } from "lucide-react";

interface DialogTitleProps {
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function DialogTitle({
  children,
  className,
  onClose,
}: DialogTitleProps) {
  return (
    <section
      className={clsx(
        className,
        "flex w-full items-center justify-between rounded-t-md border-b border-bg_secondary p-4",
      )}
    >
      <Title size="3">{children}</Title>
      <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
    </section>
  );
}
