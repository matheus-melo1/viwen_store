/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

interface ClothingSliderProps {
  gallery: string;
}

export default function ClothingSlider({ gallery }: ClothingSliderProps) {
  return (
    <>
      <div className="flex h-full flex-col gap-2 p-1 max-sm:hidden">
        <div className="h-14 w-14 bg-black"></div>
        <div className="h-14 w-14 bg-black"></div>
        <div className="h-14 w-14 bg-black"></div>
      </div>
      <div className="relative flex h-full w-[550px] items-center gap-4 max-sm:w-full">
        <button className="arrow-left -left-12 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center max-sm:hidden">
          <ChevronLeft className="h-10 w-10 rounded-full bg-black p-2" />
        </button>
        <Swiper
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          loop={true}
          pagination={true}
          cssMode={true}
          modules={[Pagination, Navigation]}
          className="absolute h-full w-full max-sm:h-full max-sm:w-full"
        >
          <SwiperSlide>
            <img className="h-full w-full rounded-xl" src={gallery} alt="" />
          </SwiperSlide>
        </Swiper>
        <button className="arrow-right top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center max-sm:hidden">
          <ChevronRight className="h-10 w-10 rounded-full bg-black p-2" />
        </button>
      </div>
    </>
  );
}
