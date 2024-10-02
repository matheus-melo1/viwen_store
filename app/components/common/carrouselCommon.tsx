"use client";

import React from "react";
import Slider from "react-slick";

interface CarrouselProps {
  slidesToShow: number;
  slidesToScroll: number;
  arrows?: boolean;
  children: React.ReactNode;
  dots?: boolean;
  infinite?: boolean;
  autoplay?: boolean | undefined;
  autoplaySpeed?: number | undefined;
  className?: string;
}

export default function Carrousel({
  slidesToShow,
  slidesToScroll,
  arrows,
  dots,
  infinite,
  autoplaySpeed,
  autoplay,
  className,
  children,
}: CarrouselProps) {
  const settings = {
    dots: dots === undefined ? false : dots,
    infinite: infinite === undefined ? false : infinite,
    speed: 500,
    initialSlide: 0,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay === undefined ? false : autoplay,
    autoplaySpeed: autoplaySpeed === undefined ? 0 : autoplaySpeed,
    centeMode: true,
    centerPadding: "60px",
  };
  return (
    <Slider
      className={`mb-5 flex h-full w-full items-center gap-2 p-1 ${className}`}
      arrows={arrows === undefined ? false : arrows}
      {...settings}
    >
      {children}
    </Slider>
  );
}
