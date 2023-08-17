import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
         slidesPerView={'auto'}
         centeredSlides={true}
         spaceBetween={30}
         className="mySwiper"
      >
        <SwiperSlide className='slide'><img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="" className="img_slide" /></SwiperSlide>
        <SwiperSlide className='slide'><img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" alt="" className="img_slide" /></SwiperSlide>
        <SwiperSlide className='slide'><img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" alt="" className="img_slide" /></SwiperSlide>
        <SwiperSlide className='slide'><img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" alt="" className="img_slide" /></SwiperSlide>
      </Swiper>
    </>
  );
}
