"use client";

/* eslint-disable @next/next/no-img-element */
import Increment from "@/components/common/Increment";
import Text from "@/components/common/text/text";
import Title from "@/components/common/text/title";
import { FaPix } from "react-icons/fa6";
import ClothingSlider from "./ClothingSlider";
import { MdPayment } from "react-icons/md";

const gallery = [
  "https://nakyk.cdn.magazord.com.br/img/2024/05/produto/8178/01-blusa-eclipse-01.jpg",
  "https://nakyk.cdn.magazord.com.br/img/2024/05/produto/8179/01-blusa-eclipse-02.jpg",
  "https://nakyk.cdn.magazord.com.br/img/2024/05/produto/8180/01-blusa-eclipse-03.jpg",
  "https://nakyk.cdn.magazord.com.br/img/2024/05/produto/8181/01-blusa-eclipse-04.jpg",
];

export default function ClothingHeader() {
  return (
    <section className="flex h-full w-full items-start justify-evenly gap-2 rounded bg-main_bg px-4 py-8">
      <ClothingSlider gallery={gallery} />
      <div className="flex w-[550px] flex-col gap-5 rounded-lg bg-white p-4">
        <div className="flex w-full flex-col gap-4">
          <Text className="flex w-20 justify-center rounded-full bg-black px-2 py-[2px] text-sm text-white">
            Camiseta
          </Text>
          <Title size="2" className="font-medium text-zinc-800">
            Sufgang Basic Azul 5.4
          </Title>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Title size="2" className="font-bold text-primary">
                R$ 399,90
              </Title>
              <Text className="text-secondary_text">no cartão de credito</Text>
            </div>
            <Text className="flex items-center gap-2 text-secondary_text">
              <FaPix className="h-5 w-5" />
              <strong>R$349,90</strong> no Pix
            </Text>
          </div>
          <button className="btn-outlined gap-2 border border-bg_secondary text-secondary_text hover:bg-primary_light hover:text-secondary_text">
            <MdPayment className="h-5 w-5" /> Formas de pagamento
          </button>
        </div>
        <Increment className="mt-1" value={0} />
        <button className="btn-primary flex items-center gap-2 rounded p-5 text-sm uppercase">
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
