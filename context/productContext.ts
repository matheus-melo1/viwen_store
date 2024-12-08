"use client";
import { IProductModel } from "@/models/products/IProductModel";
import { createContext } from "react";

interface ProductContextProps {
  product: IProductModel | undefined;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setIdOrder: React.Dispatch<React.SetStateAction<number | undefined>>;
  idOrder: number | undefined;
  handleCreateOrder: () => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined,
);
