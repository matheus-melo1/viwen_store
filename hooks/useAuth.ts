import AuthContext from "@/context/auth";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("Não está dentro do contexto");

  return context;
}