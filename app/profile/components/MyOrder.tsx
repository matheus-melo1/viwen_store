/* eslint-disable @next/next/no-img-element */
import Animate from "@/components/common/Animate";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IResponseOrderCustomer } from "@/models/order/IOrderModel";
import { FileBox } from "lucide-react";
import OrderListItem from "./OrderListItem";
import Title from "@/components/common/text/title";
import OrderItemDetails from "./OrderItemDetails";
import formatPrice from "@/utils/formatPrice";

interface IMyOrderProps {
  orders: IResponseOrderCustomer[] | undefined;
}

export default function MyOrder({ orders }: IMyOrderProps) {
  const { getAllProducts } = useGlobalContext();
  const productsOrder = orders?.map((item) => item);

  return (
    <Animate className="mx-auto flex h-full w-[1200px] flex-col gap-4 overflow-y-hidden p-4 max-2xl:w-full max-2xl:px-8 max-md:px-4">
      <div className="flex h-full flex-col gap-5 overflow-y-auto overflow-x-hidden">
        {productsOrder?.map((product) => {
          return (
            <div key={product.id} className="flex w-full flex-col gap-2">
              <div className="flex w-full justify-between px-2">
                <Title
                  size="1"
                  className="mb-3 flex items-center gap-3 font-semibold"
                >
                  <FileBox className="h-6 w-6" />
                  Pedido #{product.id}
                </Title>
                <Title
                  size="1"
                  className="mb-3 flex items-center gap-3 font-semibold"
                >
                  Total: {formatPrice(String(product.valorPedido))}
                </Title>
              </div>
              <OrderListItem
                getAllProducts={getAllProducts}
                key={product.id}
                products={product.produtos}
              />
              <OrderItemDetails />
              <div className="mt-3 h-[1px] w-full bg-bg_secondary"></div>
            </div>
          );
        })}
      </div>
      <div></div>
    </Animate>
  );
}
