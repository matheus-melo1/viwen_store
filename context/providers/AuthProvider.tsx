import { useEffect, useState } from "react";
import AuthContext from "../auth";
import { IPostResponseLogin } from "@/models/users/IUsersModel";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IPostResponseLogin>();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthenticated(prev => !prev);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
