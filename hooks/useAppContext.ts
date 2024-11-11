import { ProductContext } from "@/context/productContext";
import { useContext } from "react";

export function useAppContext() {
  const context = useContext(ProductContext);

  if (context === undefined) throw new Error("Não está dentro do contexto");

  return context;
}
