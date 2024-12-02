"use client";

import Main from "@/components/common/Main";
import Title from "@/components/common/text/title";
import CardProduct from "@/components/layout/CardProduct";
import useGlobalContext from "@/hooks/useGlobalContext";

export default function FavoritePage() {
  const { favorites } = useGlobalContext();

  return (
    <Main className="flex w-full flex-col gap-6 text-bg_variant">
      <Title size="3" className="p-4 font-bold">
        Favoritos
      </Title>
      <div className="grid w-full grid-cols-4 grid-rows-1 p-2">
        {favorites.map((item) => {
          return <CardProduct product={item} key={item.id} />;
        })}
      </div>
    </Main>
  );
}
