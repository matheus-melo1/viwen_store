import FavoriteContext from "@/context/favoriteContext";
import { useContext } from "react";

export default function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) throw new Error("Não está dentro do contexto");
  return context;
}
