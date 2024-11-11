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
  const [cart, setCart] = useState<IProductModel[]>();

  const [getAllProducts, setGetAllProducts] = useState<IProductModel[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(true);
      const fetch = async () => {
        await listProducts().then((resp) => setGetAllProducts(resp));
        setIsLoading(false);
      };
      fetch();
    }
  }, [pathname]);

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, getAllProducts, isLoading, favorites, setFavorites }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
