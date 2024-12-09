"use client";

/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Drawer from "../drawer/Drawer";
import DrawerContent from "../drawer/DrawerContent";
import DrawerTitle from "../drawer/DrawerTitle";
import Title from "@/components/common/text/title";
import Text from "@/components/common/text/text";
import Increment from "@/components/common/Increment";
import DrawerActions from "../drawer/DrawerActions";
import useGlobalContext from "@/hooks/useGlobalContext";
import { X } from "lucide-react";
import { MouseEvent, useState } from "react";
import _ from "lodash";
import formatPrice from "@/utils/formatPrice";
import { motion } from "motion/react";
import Button from "@/components/common/Button";
import { useAppContext } from "@/hooks/useAppContext";
import useAuth from "@/hooks/useAuth";

interface IColorsClothing {
  [key: string]: string;
}

export default function Cart() {
  const {
    cart,
    setCart,
    openCart,
    setOpenCart,
    totalPriceCart,
    setTotalPriceCart,
  } = useGlobalContext();

  const { handleCreateOrder, isLoadingPay } = useAppContext();
  const { authenticated } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantity, setQuantity] = useState(1);

  const colors: IColorsClothing = {
    Azul: "bg-blue-500",
    Vermelho: "bg-red-500",
    Verde: "bg-green-500",
    Amarelo: "bg-yellow-500",
    Laranja: "bg-orange-500",
    Roxo: "bg-purple-500",
    Preto: "bg-zinc-800",
    Branco: "bg-white",
    Branca: "bg-white",
    Cinza: "bg-zinc-500",
  };

  const handleRemoveCart = (
    id: string,
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    ev.stopPropagation();
    ev.preventDefault();
    setCart((prevItems) => {
      const arr = [...prevItems];
      _.remove(arr, (item) => item.id === id);
      return arr;
    });
    setQuantity(1);
  };

  const handleIncrement = (id: string) => {
    setCart((prevItems) => {
      const arr = [...prevItems];
      const itemSelected = arr.find((item) => item.id === id);
      if (itemSelected) itemSelected.qtd += 0.5;
      return arr;
    });
  };

  const handleDecrement = (id: string) => {
    setCart((prevItems) => {
      const arr = [...prevItems];
      const itemSelected = arr.find((item) => item.id === id);
      if (itemSelected) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        itemSelected.qtd === 1
          ? (itemSelected.qtd = 1)
          : (itemSelected.qtd -= 0.5);
      }
      return arr;
    });
  };

  setTotalPriceCart(
    cart.reduce((acc, item) => acc + Number(item.valor) * item.qtd, 0),
  );
  return (
    <Drawer
      size="sm"
      showDrawer={openCart}
      onClose={() => setOpenCart((prev) => !prev)}
    >
      <DrawerTitle onClose={() => setOpenCart((prev) => !prev)}>
        Carrinho
      </DrawerTitle>
      <DrawerContent
        className={clsx(
          cart.length === 0 && "justify-center",
          "flex flex-col gap-2",
        )}
      >
        {cart.length === 0 && (
          <Title size="2" className="text-center font-bold text-zinc-800">
            Seu carrinho está vazio
          </Title>
        )}
        {cart.map((item, i) => {
          return (
            <>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                key={item.id}
                className="box relative flex w-full items-center justify-between rounded bg-bg_secondary px-3 py-2 max-[520px]:flex-col"
              >
                <button
                  onClick={(ev) => handleRemoveCart(item.id, ev)}
                  className="absolute -right-2 -top-3 rounded-full bg-primary p-1"
                >
                  <X className="h-6 w-6 cursor-pointer text-white" />
                </button>
                <div className="flex items-center gap-4">
                  <img
                    className="h-24 w-24 rounded"
                    src={
                      item?.image ??
                      "https://droper-media.us-southeast-1.linodeobjects.com/15122023194634682.webp"
                    }
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <Title
                      size="1"
                      className="font-semibold max-[520px]:text-base"
                    >
                      {item.nome}
                    </Title>
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex h-full items-center gap-2 rounded-full bg-white px-2 py-1">
                        <div
                          className={clsx(
                            colors[item.cor],
                            "h-5 w-5 rounded-full border border-zinc-400",
                          )}
                        ></div>
                        <Text className="text-zinc-800">{item.cor}</Text>
                      </div>
                      <Increment
                        key={i}
                        size="small"
                        className="bg-white p-0 max-[520px]:w-[100px]"
                        value={item.qtd === 0 ? (item.qtd = 1) : item.qtd}
                        onAdd={() => {
                          handleIncrement(item.id);
                        }}
                        onDec={() => {
                          handleDecrement(item.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Title
                  size="1"
                  className="font-bold max-[520px]:mt-4 max-[520px]:w-full max-[520px]:rounded max-[520px]:bg-white max-[520px]:p-1 max-[520px]:text-center"
                >
                  {formatPrice(item.valor)}
                </Title>
              </motion.div>
            </>
          );
        })}
      </DrawerContent>
      <DrawerActions className="flex w-full justify-between">
        <div className="flex gap-3">
          <Title size="2" className="font-bold text-zinc-800">
            Total:
          </Title>
          <Title size="2" className="font-bold text-zinc-800">
            {formatPrice(String(totalPriceCart))}
          </Title>
        </div>
        <Button
          onClick={handleCreateOrder}
          loading={isLoadingPay}
          disabled={cart.length === 0 || !authenticated}
          variant="filled"
        >
          Pagamento
        </Button>
      </DrawerActions>
    </Drawer>
  );
}
