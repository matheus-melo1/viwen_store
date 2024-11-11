import GlobalContext from "@/context/globalContext";
import { useContext } from "react";

export default function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (context === undefined) throw new Error("Não está dentro do contexto");
  return context;
}