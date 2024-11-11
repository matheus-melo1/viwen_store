import { IProductModel } from "@/models/products/IProductModel";
import { createContext } from "react";

interface FavoriteContextProps {
  favorites: IProductModel[];
  setFavorites: React.Dispatch<React.SetStateAction<IProductModel[]>>;
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined,
);

export default FavoriteContext;
