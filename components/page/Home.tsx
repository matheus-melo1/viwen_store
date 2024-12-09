/* eslint-disable @next/next/no-img-element */
"use client";

import Banner from "@/components/layout/Banner";
import "@/styles/globals.css";
import CardProduct from "@/components/layout/CardProduct";
import { CgSearch } from "react-icons/cg";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import useGlobalContext from "@/hooks/useGlobalContext";
import Main from "../common/Main";
import { IProductModel } from "@/models/products/IProductModel";
import toast from "react-hot-toast";
import React, { MouseEvent, useEffect } from "react";
import { listProducts } from "@/services/products/getProductById";
import Text from "../common/text/text";
import formatPrice from "@/utils/formatPrice";
import { motion } from "motion/react";
import InputText from "../common/InputText";
import Title from "../common/text/title";
import Link from "next/link";

export default function Home() {
  const {
    getAllProducts,
    favorites,
    setFavorites,
    cart,
    setCart,
    setOpenCart,
  } = useGlobalContext();

  const [search, setSearch] = React.useState("");

  const searchFilter = getAllProducts?.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    listProducts();
  }, []);

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
    item: IProductModel,
  ) => {
    ev.stopPropagation();
    ev.preventDefault();
    handleAddCart(item);
    setOpenCart((prev) => !prev);
  };

  return (
    <>
      <Main>
        <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-2">
          <div className="flex w-full items-center justify-between p-2">
            <div className="max-sm:hidden">
              <h1 className="text-xl font-bold text-zinc-800">Roupas</h1>
              <p className="text-secondary_text">Principais ofertas</p>
            </div>
            <div className="flex gap-3 max-sm:w-full">
              <div className="relative max-sm:w-full">
                <InputText
                  icon={<CgSearch className="h-full w-full" />}
                  variant="filled"
                  className="rounded-lg bg-white p-3 text-lg text-secondary_text outline-none transition-all duration-500 hover:w-[420px] focus:w-[420px] max-sm:w-full"
                  placeholder="Pesquisar"
                  value={search}
                  onChange={(ev) => setSearch(ev.target.value)}
                  type="text"
                />
                <div className="absolute top-12 z-50 flex w-full flex-col overflow-hidden rounded bg-white shadow-2xl">
                  {search.length !== 0 &&
                    searchFilter?.map((product) => {
                      return (
                        <Link
                          className="flex h-full w-full"
                          href={`/product/${product.id}`}
                          key={product.id}
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="box relative flex h-full w-full cursor-pointer items-center justify-between rounded border-b border-bg_secondary px-3 py-2 duration-200 hover:bg-bg_secondary"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                className="h-20 w-20 rounded"
                                src={product.image}
                                alt=""
                              />
                              <div className="flex flex-col gap-2">
                                <Text className="font-semibold capitalize text-zinc-800">
                                  {product.nome}
                                </Text>
                              </div>
                            </div>
                            <Text className="text-sm font-bold text-zinc-800">
                              {formatPrice(product.valor)}
                            </Text>
                          </motion.div>
                        </Link>
                      );
                    })}
                </div>
              </div>
              {/* <IconButton className="bg-primary_light text-primary">
                <Mail className="h-6 w-6" />
              </IconButton>
              <IconButton className="bg-primary_light text-primary">
                <MdOutlineNotificationsNone className="h-6 w-6" />
              </IconButton> */}
            </div>
          </div>
          <div className="mb-4 flex min-h-[400px] w-full overflow-hidden">
            <Banner />
          </div>
          <div className="relative flex h-full w-full flex-col gap-4">
            <Title
              size="2"
              className="flex w-48 items-center gap-2 rounded-md bg-main_bg p-3 font-bold max-sm:w-full max-sm:justify-center"
            >
              <Flame className="h-9 w-9 max-sm:h-7 max-sm:w-7" />
              Popular
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
              {getAllProducts?.map((item) => {
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
        </div>
      </Main>
    </>
  );
}
