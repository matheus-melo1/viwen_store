"use client";

import { IProductModel } from "@/models/products/IProductModel";
import { createContext } from "react";

interface GlobalStateProps {
  cart: IProductModel[] | undefined;
  setCart: React.Dispatch<React.SetStateAction<IProductModel[] | undefined>>;
  getAllProducts: IProductModel[] | undefined;
  isLoading: boolean;
  favorites: IProductModel[];
  setFavorites: React.Dispatch<React.SetStateAction<IProductModel[]>>;
}

const GlobalContext = createContext<GlobalStateProps | undefined>(undefined);

export default GlobalContext;
