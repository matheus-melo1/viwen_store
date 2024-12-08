"use client";

import { useEffect, useState } from "react";
import AuthContext from "../auth";
import { IPostResponseLogin } from "@/models/users/IUsersModel";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const userStorage = localStorage.getItem("viwen:auth");
  const [user, setUser] = useState<IPostResponseLogin | undefined>(
    JSON.parse(userStorage ?? ""),
  );
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem("viwen:auth", JSON.stringify(user ?? "undefined"));
    if (user?.id) {
      setAuthenticated(true);
      return;
    }
    setAuthenticated(false);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
