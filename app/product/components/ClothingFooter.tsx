import Title from "@/components/common/text/title";
import CardProduct from "@/components/layout/CardProduct";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IProductModel } from "@/models/products/IProductModel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MouseEvent } from "react";
import toast from "react-hot-toast";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClothingFooter() {
  const { getAllProducts } = useGlobalContext();

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
    <div className="relative flex h-full w-full flex-col gap-4">
      <Title
        size="2"
        className="flex w-48 items-center gap-2 rounded-md p-3 font-bold max-sm:w-full max-sm:justify-center"
      >
        Sugestões
      </Title>
      <div className="arrow-right absolute right-2 top-1/2 z-20 flex -translate-y-1/2 cursor-pointer items-center justify-center max-sm:hidden">
        <ChevronRight className="h-10 w-10 rounded-full bg-black p-2" />
      </div>
      <div className="arrow-left absolute left-2 top-1/2 z-20 flex -translate-y-1/2 cursor-pointer items-center justify-center max-sm:hidden">
        <ChevronLeft className="h-10 w-10 rounded-full bg-black p-2" />
      </div>

      <Swiper
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        cssMode={true}
        mousewheel={true}
        slidesPerView={1}
        spaceBetween={10}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 170,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 140,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1720: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="w-full"
      >
        {getAllProducts
          ?.map((item) => {
            return (
              <SwiperSlide style={{ width: "260px" }} key={item.id}>
                <CardProduct
                  key={item.id}
                  onClickSetFavorite={handleClickFavorite}
                  onClickAddCart={handleAddCart}
                  product={item}
                  verifyFavoriteCard={verifyFavoriteCard}
                  onClickPay={handleClickPay}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
