/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

interface SliderProps {
  gallery: string[];
  nextEl: string;
  prevEl: string;
  className?: string;
}

export default function Slider({
  gallery,
  nextEl,
  prevEl,
  className,
}: SliderProps) {
  return (
    <Swiper
      navigation={{
        nextEl,
        prevEl,
      }}
      modules={[Pagination, Navigation]}
      pagination={true}
      cssMode={true}
      className={`mySwiper ${className}`}
    >
      {gallery.map((img, key) => {
        return (
          <SwiperSlide key={key}>
            <img src={img} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
