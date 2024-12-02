import Animate from "@/components/common/Animate";
import Text from "@/components/common/text/text";
import { BaggageClaim, Car, ClockArrowDown, PackageCheck } from "lucide-react";

export default function MyOrder() {
  return (
    <Animate className="mx-auto flex w-[1200px] gap-4 p-4 max-2xl:w-full max-2xl:px-8">
      <div className="flex w-full items-center justify-evenly text-zinc-800">
        <div className="relative flex flex-col items-center justify-center rounded-md border border-bg_secondary bg-primary p-3 text-white">
          <ClockArrowDown className="h-8 w-8 max-sm:h-6 max-sm:w-6" />
          <Text className="absolute -bottom-8 w-36 text-center font-semibold text-zinc-800 max-sm:text-sm">
            Pedido Feito
          </Text>
        </div>
        <div className="h-1 w-1/2 bg-primary max-2xl:w-1/4"></div>
        <div className="relative flex flex-col items-center justify-center rounded-md border border-bg_secondary bg-primary p-3 text-white">
          <BaggageClaim className="h-8 w-8 max-sm:h-6 max-sm:w-6" />
          <Text className="absolute -bottom-8 w-36 text-center font-semibold text-zinc-800 max-sm:text-sm">
            Enviado
          </Text>
        </div>
        <div className="h-1 w-1/2 bg-bg_secondary max-2xl:w-1/4"></div>
        <div className="relative flex flex-col items-center justify-center rounded-md border border-bg_secondary bg-bg_secondary p-3 text-white">
          <Car className="h-8 w-8 max-sm:h-6 max-sm:w-6" />
          <Text className="absolute -bottom-8 w-36 text-center font-semibold text-zinc-800 max-sm:text-sm">
            Saiu para entrega
          </Text>
        </div>
        <div className="h-1 w-1/2 bg-bg_secondary max-2xl:w-1/4"></div>
        <div className="relative flex flex-col items-center justify-center rounded-md border border-bg_secondary bg-bg_secondary p-3 text-white">
          <PackageCheck className="h-8 w-8 max-sm:h-6 max-sm:w-6" />
          <Text className="absolute -bottom-8 w-36 text-center font-semibold text-zinc-800 max-sm:text-sm">
            Entregue
          </Text>
        </div>
      </div>
    </Animate>
  );
}
