"use client";
import Image from "next/image";
import NavOption from "./components/NavOption";
import { EllipsisVertical, LogOut, Menu, ShoppingCart } from "lucide-react";
import useGlobalContext from "@/hooks/useGlobalContext";
import { MouseEvent, useState } from "react";
import clsx from "clsx";
import IconButton from "@/components/common/IconButton";
import { routes } from "@/routes/routes";
import useAuth from "@/hooks/useAuth";
import Animate from "@/components/common/Animate";
import Button from "@/components/common/Button";
import { IPostResponseLogin } from "@/models/users/IUsersModel";

export default function Navbar() {
  const { cart, setOpenCart, setLoginDialog } = useGlobalContext();
  const { authenticated, user, setUser } = useAuth();
  const [openNav, setOpenNav] = useState(false);
  const [options, setOptions] = useState(false);

  const handleOpenCart = (
    ev: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => {
    ev.stopPropagation();
    ev.preventDefault();
    setOpenCart((prev) => !prev);
  };

  const handleOpenLogin = (
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    ev.stopPropagation();
    ev.preventDefault();
    setLoginDialog((prev) => !prev);
  };

  const handleOpenOptions = (
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    ev.stopPropagation();
    ev.preventDefault();
    setOptions((prev) => !prev);
  };

  const handleLogout = () => {
    setUser({} as IPostResponseLogin);
    setOptions((prev) => !prev);
  };

  return (
    <nav className="relative z-[99] flex h-full w-[330px] flex-col justify-between gap-2 bg-white p-3 font-sans max-lg:sticky max-lg:top-0 max-lg:h-24 max-lg:w-full max-lg:flex-row max-lg:items-center">
      <IconButton
        onClick={() => setOpenNav((prev) => !prev)}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 max-lg:block"
      >
        <Menu className="h-6 w-6 text-zinc-800" />
      </IconButton>
      <div className="relative z-40 flex flex-col max-lg:flex-row">
        <div className="mb-4 flex items-center gap-4 p-3">
          <div className={"flex items-center max-lg:hidden"}>
            <Image width={56} height={56} src="/images/Logo_loja.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-black max-lg:translate-y-[4px] max-sm:text-xl">
            Viwen Store
          </h1>
        </div>
        <div
          className={clsx(
            {
              "max-lg:top-20": openNav,
              "max-lg:-top-[800px]": !openNav,
            },
            "ease z-20 flex flex-col gap-1 bg-main_bg transition-all duration-500 max-lg:absolute max-lg:-left-3 max-lg:right-0 max-lg:h-screen max-lg:w-screen max-lg:p-3",
          )}
        >
          {routes
            .filter((route) =>
              !authenticated ? route.path !== "/profile" : route.path,
            )
            .map((route) => (
              <NavOption
                onClick={() => setOpenNav(false)}
                key={route.name}
                href={route.path}
                icon={route.icon}
              >
                {route.name}
              </NavOption>
            ))}

          <NavOption
            valueCart={cart.length}
            onClick={(ev) => {
              handleOpenCart(ev);
              setOpenNav(false);
            }}
            cartValid
            icon={<ShoppingCart className="h-7 w-7" />}
          >
            Carrinho
          </NavOption>
        </div>
      </div>
      {options && (
        <div
          onClick={() => setOptions((prev) => !prev)}
          className="absolute left-0 top-0 h-screen w-screen"
        ></div>
      )}
      <div className="relative flex w-full items-center justify-between rounded-lg p-1 max-lg:hidden">
        {options && (
          <Animate className="shadow-l absolute bottom-14 right-4 w-32 overflow-hidden rounded-lg border border-bg_secondary bg-main_bg">
            <Button
              onClick={handleLogout}
              className="w-full rounded-none font-semibold text-zinc-800"
              icon={<LogOut className="h-full w-full" />}
              variant="text"
            >
              Sair
            </Button>
          </Animate>
        )}
        {authenticated ? (
          <>
            <div className="flex items-center gap-3">
              <Image
                width={48}
                height={48}
                className="rounded-full"
                src="/images/user_test.png"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold capitalize text-zinc-600">
                  {user?.nome ?? "Sem nome"}
                </p>
                <p className="rounded-full bg-emerald-500 px-2 text-center text-sm text-white">
                  {user?.ativo === 1 ? "Ativo" : "Desativado"}
                </p>
              </div>
            </div>
            <IconButton onClick={handleOpenOptions}>
              <EllipsisVertical className="text-zinc-800" />
            </IconButton>
          </>
        ) : (
          <button onClick={handleOpenLogin} className="btn-primary w-full">
            Entrar
          </button>
        )}
      </div>
    </nav>
  );
}
