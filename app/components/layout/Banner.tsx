/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrousel from "../common/carrouselCommon";

export default function Banner() {
  return (
    <Carrousel
      infinite={true}
      autoplaySpeed={3000}
      autoplay={true}
      dots={true}
      arrows={false}
      slidesToShow={1}
      slidesToScroll={1}
    >
      <div className="h-full w-full">
        <img
          className="h-full w-full rounded-xl"
          src="/images/banner_top.png"
          alt=""
        />
      </div>
      <div className="h-full w-full">
        <img
          className="h-full w-full rounded-xl"
          src="https://thegamecollective.com.br/cdn/shop/articles/4_b4ec6023-fe71-4ff7-81ef-3b711b67a291.png?v=1687976778"
          alt=""
        />
      </div>
    </Carrousel>
  );
}
