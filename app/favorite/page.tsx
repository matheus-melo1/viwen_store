"use client";

import Main from "@/components/common/Main";
import Title from "@/components/common/text/title";
import CardProduct from "@/components/layout/CardProduct";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IProductModel } from "@/models/products/IProductModel";
import { MouseEvent } from "react";
import toast from "react-hot-toast";

export default function FavoritePage() {
  const { favorites, setFavorites, cart, setCart } = useGlobalContext();

  const handleClickFavorite = (item: IProductModel) => {
    const prodContain = favorites.filter((prod) => prod.id === item.id);
    if (prodContain.length > 0) {
      setFavorites((prevItems) =>
        prevItems.filter((item) => item.id !== prodContain[0].id),
      );
      return;
    }
    setFavorites((prev) => [...prev, item]);
    toast.success("Item adicionado aos favoritos", { icon: "❤️" });
  };

  const handleAddCart = (item: IProductModel) => {
    const prodContain = cart?.filter(
      (prod) => prod.id === item.id,
    ) as IProductModel[];
    if (prodContain.length > 0) {
      toast.error("Item já adicionado ao carrinho");
      return;
    }
    setCart((prevCart) => [...prevCart, item]);
    toast.success("Item adicionado ao carrinho");
  };

  const verifyFavoriteCard = (id: string) => {
    const prodContain = favorites.some((fav) => fav.id === id);
    return prodContain;
  };

  const handleClickPay = (
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    ev.stopPropagation();
    ev.preventDefault();
  };

  return (
    <Main className="flex w-full flex-col gap-6 text-bg_variant max-sm:items-center">
      <Title size="3" className="p-4 font-bold">
        Favoritos
      </Title>
      <div className="grid w-full grid-cols-4 grid-rows-1 gap-4 p-2 max-md:grid-cols-3 max-sm:grid-cols-1">
        {favorites.map((item) => {
          return (
            <CardProduct
              onClickSetFavorite={handleClickFavorite}
              onClickAddCart={handleAddCart}
              verifyFavoriteCard={verifyFavoriteCard}
              product={item}
              onClickPay={handleClickPay}
              key={item.id}
            />
          );
        })}
      </div>
      {favorites.length === 0 && (
        <Title className="w-full text-center font-semibold" size="2">
          Você não favoritou nenhum produto 😔
        </Title>
      )}
    </Main>
  );
}
