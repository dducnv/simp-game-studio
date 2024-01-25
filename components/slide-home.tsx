"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export const SlideHome = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src={"/unicorn-bd.webp"}
          width={1920}
          height={400}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/unicorn-bd.webp"}
          width={1920}
          height={400}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/unicorn-bd.webp"}
          width={1920}
          height={300}
          alt="Picture of the author"
        />
      </SwiperSlide>
    </Swiper>
  );
};
