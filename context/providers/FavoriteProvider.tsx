"use client"

import React, { useState } from "react";
import { IProductModel } from "@/models/products/IProductModel";
import FavoriteContext from "../favoriteContext";

interface FavoriteProviderProps {
  children: React.ReactNode;
}

export default function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<IProductModel[]>([]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
