import React, { useEffect, useState } from "react";
import { ProductContext } from "../productContext";
import { selectProductById } from "@/services/products/getProductById";
import { IProductModel } from "@/models/products/IProductModel";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function ProductProvider({ children }: AppProviderProps) {
  const [id, setId] = useState("");
  const [product, setProduct] = useState<IProductModel>();

  useEffect(() => {
    const fetch = async () => {
      await selectProductById(id).then((resp) => setProduct(resp));
    };
    fetch();
  }, [id]);

  return (
    <ProductContext.Provider
      value={{
        product,
        setId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
