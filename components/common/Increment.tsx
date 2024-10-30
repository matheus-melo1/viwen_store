import clsx from "clsx";
import Text from "./text/text";

interface IncrementProps {
  onAdd?: () => void;
  onDec?: () => void;
  value: number;
  className?: string;
}

export default function Increment({
  onAdd,
  onDec,
  value,
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
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-secondary_text"
      >
        -
      </button>
      <Text className="text-base text-black">{value}</Text>
      <button
        onClick={onAdd}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-secondary_text"
      >
        +
      </button>
    </div>
  );
}
