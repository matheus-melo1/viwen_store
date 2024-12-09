"use client";

import React, { useEffect, useState } from "react";
import GlobalContext from "../globalContext";
import { listProducts } from "@/services/products/getProductById";
import { IProductModel } from "@/models/products/IProductModel";
import { usePathname } from "next/navigation";

interface GlobalProviderProps {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const pathname = usePathname();
  const [favorites, setFavorites] = useState<IProductModel[]>([]);
  const [cart, setCart] = useState<IProductModel[]>([]);
  const [totalPriceCart, setTotalPriceCart] = useState<number>(0);

  const [getAllProducts, setGetAllProducts] = useState<IProductModel[]>();
  const [isLoading, setIsLoading] = useState(false);

  const [openCart, setOpenCart] = useState(false);

  const [loginDialog, setLoginDialog] = useState(false);
  const [registerDialog, setRegisterDialog] = useState(false);

  const handleGetAllProducts = () => {
    if (pathname === "/") {
      setIsLoading(true);
      const fetch = async () => {
        await listProducts().then((resp) => setGetAllProducts(resp));
        setIsLoading(false);
      };
      fetch();
    }
  };

  useEffect(() => {
    handleGetAllProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        openCart,
        setOpenCart,
        getAllProducts,
        isLoading,
        favorites,
        setFavorites,
        loginDialog,
        setLoginDialog,
        registerDialog,
        handleGetAllProducts,
        setRegisterDialog,
        setTotalPriceCart,
        totalPriceCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
