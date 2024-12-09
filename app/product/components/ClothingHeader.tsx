/* eslint-disable @next/next/no-img-element */
"use client";

import Increment from "@/components/common/Increment";
import Text from "@/components/common/text/text";
import Title from "@/components/common/text/title";
import { FaPix } from "react-icons/fa6";
import { useAppContext } from "@/hooks/useAppContext";
import { useEffect, useState } from "react";
import formatPrice from "@/utils/formatPrice";
import { IProductModel } from "@/models/products/IProductModel";

interface ClothingHeaderProps {
  id: string;
  onClickAddCart: (item: IProductModel, quantity: number) => void;
  openDialog: () => void;
}

export default function ClothingHeader({
  onClickAddCart,
  id,
}: ClothingHeaderProps) {
  const { setId, product } = useAppContext();
  const [qtd, setQtd] = useState<number>(1);

  const priceFormatted = formatPrice(product?.valor ?? "0");

  useEffect(() => {
    setId(id);
  });

  return (
    <section className="mx-auto flex h-full w-full items-start justify-center gap-8 rounded bg-main_bg px-4 py-8 max-lg:w-full max-lg:flex-col max-lg:items-center max-sm:h-screen max-sm:pt-8">
      <div className="w-[550px] h-[500px] flex items-center justify-between gap-10 rounded bg-bg_secondary p-3 max-lg:w-full max-lg:gap-5 max-sm:w-full">
        <img
          className="h-full rounded-xlw-full"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="flex w-[550px] flex-col gap-5 rounded-lg bg-main_bg p-4 max-lg:w-full max-sm:p-2">
        <div className="flex w-full flex-col gap-4">
          <Text className="flex w-44 justify-center rounded-full bg-black px-2 py-[2px] text-sm text-white">
            {product?.marca}
          </Text>
          <Title size="2" className="font-medium text-zinc-800">
            {product?.nome}
          </Title>
          <div className="flex flex-col gap-2 max-sm:w-full">
            <div className="flex items-center gap-2">
              <Title size="2" className="font-bold text-primary">
                {priceFormatted}
              </Title>
              <Text className="text-secondary_text">no cartão de credito</Text>
            </div>
            <Text className="flex items-center gap-2 text-secondary_text">
              <FaPix className="h-5 w-5" />
              <strong>{formatPrice(String(product?.valor))}</strong> no Pix
            </Text>
          </div>
          {/* <button onClick={openDialog} className="btn-outlined gap-2 border border-bg_secondary text-secondary_text hover:bg-primary_light hover:text-secondary_text">
            <MdPayment className="h-5 w-5" /> Formas de pagamento
          </button> */}
        </div>
        <Increment
          size="normal"
          className="mt-1"
          value={qtd}
          onAdd={() => setQtd(qtd + 1)}
          onDec={() => setQtd(qtd === 1 ? 1 : qtd - 1)}
        />
        <button
          onClick={() => onClickAddCart(product as IProductModel, qtd)}
          className="btn-primary flex items-center gap-2 rounded p-5 text-sm uppercase"
        >
          {/* <FaCartPlus className="h-6 w-6" /> */}
          Adicionar ao Carrinho
        </button>
        <div className="flex w-full items-center gap-2">
          <input
            className="input-primary w-48 border border-line p-2 text-base"
            type="number"
          />
          <button className="btn-outlined">Pesquisar</button>
        </div>
      </div>
    </section>
  );
}
