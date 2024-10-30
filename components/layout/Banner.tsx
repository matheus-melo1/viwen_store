/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <Swiper
      pagination={true}
      keyboard={true}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Pagination]}
      className="h-full w-full"
    >
      <SwiperSlide className="h-full w-full">
        <img
          className="h-full w-full rounded-xl object-cover"
          src="/images/banner_top.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full object-cover">
        <img
          className="h-full w-full rounded-xl"
          src="https://thegamecollective.com.br/cdn/shop/articles/4_b4ec6023-fe71-4ff7-81ef-3b711b67a291.png?v=1687976778"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
