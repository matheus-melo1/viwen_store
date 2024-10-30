"use client";

import Banner from "@/components/layout/Banner";
import "@/styles/globals.css";
import CardProduct from "@/components/layout/CardProduct";
import { CgSearch } from "react-icons/cg";
import IconButton from "@/components/common/IconButton";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    // <div className="h-full w-full overflow-y-auto p-2">
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-2">
      <div className="flex w-full items-center justify-between p-2">
        <div>
          <h1 className="text-xl font-bold text-zinc-800">Roupas</h1>
          <p className="text-secondary_text">Principais ofertas</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <CgSearch className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary_text" />
            <input
              id="search"
              className="rounded-lg bg-white p-2 pl-10 text-secondary_text outline-none"
              placeholder="Pesquisar"
              type="text"
            />
          </div>
          <IconButton className="bg-primary_light text-primary">
            <Mail className="h-6 w-6" />
          </IconButton>
          <IconButton className="bg-primary_light text-primary">
            <MdOutlineNotificationsNone className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
      <div className="mb-4 flex min-h-[400px] w-full overflow-hidden">
        <Banner />
      </div>
      <div className="relative flex h-full w-full">
        <div className="arrow-right absolute right-2 top-1/2 z-20 flex -translate-y-1/2 cursor-pointer items-center justify-center">
          <ChevronRight className="h-10 w-10 rounded-full bg-black p-2" />
        </div>
        <div className="arrow-left absolute left-2 top-1/2 z-20 flex -translate-y-1/2 cursor-pointer items-center justify-center">
          <ChevronLeft className="h-10 w-10 rounded-full bg-black p-2" />
        </div>
        <Swiper
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          breakpoints={{
            1920: {
              slidesPerView: 6,
              spaceBetween: 100,
            },
            1720: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {Array.from({ length: 12 }, (_, index) => (
            <SwiperSlide data-hash={index} key={index}>
              <CardProduct />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    // </div>
  );
}
