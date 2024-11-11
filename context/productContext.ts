"use client"
import { IProductModel } from "@/models/products/IProductModel";
import { createContext } from "react";

interface ProductContextProps {
  product: IProductModel | undefined;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined,
);
