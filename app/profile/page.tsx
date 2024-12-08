"use client";

import { useEffect, useState } from "react";
import MyOrder from "./components/MyOrder";
import MyProfile from "./components/MyProfile";
import clsx from "clsx";
import useAuth from "@/hooks/useAuth";
import { getOrderCustomer } from "@/services/order/orderRequests";
import { useAppContext } from "@/hooks/useAppContext";

export default function Profile() {
  const { user } = useAuth();
  const { idOrder } = useAppContext();
  const [tab, setTab] = useState(false);

  useEffect(() => {
    if (user?.id) getOrderCustomer(idOrder ?? 0);
  }, [user, idOrder]);

  return (
    <main className="relative flex h-screen w-full flex-col items-start p-3 max-sm:p-2">
      <section className="mx-auto flex h-full w-full flex-col items-start justify-start gap-2 rounded bg-main_bg py-4 max-2xl:max-w-full max-lg:w-full max-lg:flex-col max-lg:items-center">
        <div className="relative w-full border-b border-bg_secondary px-4">
          <div
            className={clsx(
              "absolute bottom-0 h-1 w-32 rounded-t-full bg-primary transition-all duration-300 ease-out",
              {
                "left-4": !tab,
                "left-36": tab,
              },
            )}
          ></div>
          <button
            onClick={() => setTab((prev) => !prev)}
            className={clsx(!tab && "font-bold", "w-32 p-2 pb-4 text-zinc-800")}
          >
            Perfil
          </button>
          <button
            onClick={() => setTab((prev) => !prev)}
            className={clsx(tab && "font-bold", "w-32 p-2 pb-4 text-zinc-800")}
          >
            Seus Pedidos
          </button>
        </div>
        {!tab && <MyProfile user={user} />}
        {tab && <MyOrder />}
      </section>
    </main>
  );
}
