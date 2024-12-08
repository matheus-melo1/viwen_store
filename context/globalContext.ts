"use client";

import { IProductModel } from "@/models/products/IProductModel";
import { createContext } from "react";

interface GlobalStateProps {
  cart: IProductModel[];
  setCart: React.Dispatch<React.SetStateAction<IProductModel[]>>;
  getAllProducts: IProductModel[] | undefined;
  isLoading: boolean;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  favorites: IProductModel[];
  setFavorites: React.Dispatch<React.SetStateAction<IProductModel[]>>;
  setLoginDialog: React.Dispatch<React.SetStateAction<boolean>>;
  loginDialog: boolean;
  setRegisterDialog: React.Dispatch<React.SetStateAction<boolean>>;
  registerDialog: boolean;
  totalPriceCart: number;
  setTotalPriceCart: React.Dispatch<React.SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalStateProps | undefined>(undefined);

export default GlobalContext;
