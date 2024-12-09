import clsx from "clsx";
import Title from "@/components/common/text/title";
import { X } from "lucide-react";

interface DialogTitleProps {
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function DrawerTitle({
  children,
  className,
  onClose,
}: DialogTitleProps) {
  return (
    <section
      className={clsx(
        className,
        "flex w-full items-center justify-between rounded-t-md p-4",
      )}
    >
      <Title size="3" className="font-semibold">{children}</Title>
      <X className="h-6 w-6 cursor-pointer text-zinc-800" onClick={onClose} />
    </section>
  );
}
