/* eslint-disable @next/next/no-img-element */

import Text from "@/components/common/text/text";
import { IProductsOrder } from "@/models/order/IOrderModel";
import { IProductModel } from "@/models/products/IProductModel";
import formatPrice from "@/utils/formatPrice";
import clsx from "clsx";
import { Package, Wallet } from "lucide-react";

interface IOrderListItemProps {
  getAllProducts: IProductModel[] | undefined;
  products: IProductsOrder[];
}

interface IColorsClothing {
  [key: string]: string;
}

export default function OrderListItem({
  getAllProducts,
  products,
}: IOrderListItemProps) {

  const colors: IColorsClothing = {
    Azul: "bg-blue-500",
    Vermelho: "bg-red-500",
    Verde: "bg-green-500",
    Amarelo: "bg-yellow-500",
    Laranja: "bg-orange-500",
    Roxo: "bg-purple-500",
    Preto: "bg-zinc-800",
    Branco: "bg-white",
    Branca: "bg-white",
    Cinza: "bg-zinc-500",
  };

  return (
    <>
      {products?.map((product) => {
        const orderFormatted = getAllProducts?.find(
          (prod) => Number(prod.id) === product?.produtoId,
        );
        return (
          <div
            className="flex w-full items-center justify-between rounded-lg bg-bg_secondary p-2"
            key={product.produtoId}
          >
            <div className="flex items-center gap-3">
              <img
                src={orderFormatted?.image}
                className="h-24 w-24 rounded-lg"
                alt=""
              />
              <div className="flex flex-col">
                <Text className="text-lg text-zinc-800">
                  {orderFormatted?.nome}
                </Text>
                <div className="flex h-full items-center gap-2 rounded-full px-2 py-1">
                  <div
                    className={clsx(
                      colors[orderFormatted?.cor ?? ""],
                      "h-5 w-5 rounded-full border border-zinc-400",
                    )}
                  ></div>
                  <Text className="text-zinc-800">{orderFormatted?.cor}</Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text className="mr-4 flex items-center gap-2 rounded-full bg-main_bg px-2 py-1 font-semibold text-zinc-800">
                <Wallet className="h-5 w-5" />
                {formatPrice(orderFormatted?.valor ?? "0")}
              </Text>
              <Text className="mr-4 flex items-center gap-5 rounded-full bg-main_bg px-2 py-1 font-semibold text-zinc-800">
                <Package className="h-5 w-5" />
                Qtd: {product.quantidade}
              </Text>
            </div>
          </div>
        );
      })}
    </>
  );
}
