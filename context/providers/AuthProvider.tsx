"use client";

import { useEffect, useState } from "react";
import AuthContext from "../auth";
import { IPostResponseLogin } from "@/models/users/IUsersModel";
import { getOrderCustomer } from "@/services/order/orderRequests";
import { IResponseOrderCustomer } from "@/models/order/IOrderModel";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const userStorage = localStorage.getItem("viwen:auth");
  const [user, setUser] = useState<IPostResponseLogin | undefined>(
    JSON.parse(userStorage ?? ""),
  );
  const [authenticated, setAuthenticated] = useState(false);
  const [orders, setOrders] = useState<IResponseOrderCustomer[]>();

  const handleGetCustomer = async () => {
    await getOrderCustomer().then((resp) => {
      const ordersFilt = resp?.filter((item) => item?.usuarioId === user?.id);
      setOrders(ordersFilt);
    });
  };

  useEffect(() => {
    localStorage.setItem("viwen:auth", JSON.stringify(user ?? "undefined"));
    if (user?.id) {
      handleGetCustomer();
      setAuthenticated(true);
      return;
    }
    setAuthenticated(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, setOrders]);

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated, orders }}>
      {children}
    </AuthContext.Provider>
  );
}
