import clsx from "clsx";
import Text from "./text/text";

interface IncrementProps {
  onAdd?: () => void;
  onDec?: () => void;
  value: number;
  className?: string;
  size: "small" | "normal";
}

export default function Increment({
  onAdd,
  onDec,
  value,
  size,
  className,
}: IncrementProps) {
  return (
    <div
      className={clsx(
        className,
        "flex w-[120px] items-center justify-center gap-4 rounded-full bg-bg_secondary p-1",
      )}
    >
      <button
        onClick={onDec}
        className={clsx(
          size === "small" && "h-7 w-7",
          size === "normal" && "h-9 w-9",
          "flex items-center justify-center rounded-full bg-white text-2xl text-secondary_text",
        )}
      >
        -
      </button>
      <Text className="text-base text-black">{value}</Text>
      <button
        onClick={onAdd}
        className={clsx(
          size === "small" && "h-7 w-7",
          size === "normal" && "h-9 w-9",
          "flex items-center justify-center rounded-full bg-white text-2xl text-secondary_text",
        )}
      >
        +
      </button>
    </div>
  );
}
