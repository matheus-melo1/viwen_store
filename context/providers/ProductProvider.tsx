"use client";

import React, { useEffect, useState } from "react";
import { ProductContext } from "../productContext";
import { selectProductById } from "@/services/products/getProductById";
import { IProductModel } from "@/models/products/IProductModel";
import { postOrderCustomer } from "@/services/order/orderRequests";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IOrderCustomer } from "@/models/order/IOrderModel";
import useAuth from "@/hooks/useAuth";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function ProductProvider({ children }: AppProviderProps) {
  const { cart, totalPriceCart } = useGlobalContext();
  const { user } = useAuth();

  const [id, setId] = useState("");
  const [idOrder, setIdOrder] = useState<number>();
  const [product, setProduct] = useState<IProductModel>();

  const [orderCustomer, setOrderCustomer] = useState<IOrderCustomer>();

  useEffect(() => {
    setOrderCustomer({
      quantidade: cart?.length ?? 0,
      status: "novo",
      usuarioId: user?.id ?? 0,
      valorPedido: totalPriceCart ?? 0,
      produtos: cart.map((item) => {
        return {
          produtoId: Number(item.id ?? 0),
          quantidade: item.qtd ?? 0,
        };
      }),
    });
  }, [user?.id, cart, totalPriceCart]);

  useEffect(() => {
    const fetch = async () => {
      await selectProductById(id).then((resp) => setProduct(resp));
    };
    fetch();
  }, [id]);

  /// create order customer fdp

  const handleCreateOrder = async () => {
    await postOrderCustomer(orderCustomer as IOrderCustomer);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setId,
        idOrder,
        setIdOrder,
        handleCreateOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
