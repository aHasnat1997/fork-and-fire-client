import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './Hero.css';


import banner1 from '../../../assets/home/01.jpg';
import banner2 from '../../../assets/home/02.jpg';
import banner3 from '../../../assets/home/03.png';
import banner4 from '../../../assets/home/04.jpg';
import banner5 from '../../../assets/home/05.png';
import banner6 from '../../../assets/home/06.png';

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='w-full'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 w-full"
      >
        <SwiperSlide>
          <img className='w-full h-[86vh]' src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[86vh]' src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[86vh]' src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[86vh]' src={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[86vh]' src={banner5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[86vh]' src={banner6} />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-3/4 lg:w-1/2 my-4 mySwiper"
      >
        <SwiperSlide>
          <img className='mx-auto' src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-auto' src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-auto' src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-auto' src={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-auto' src={banner5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-auto' src={banner6} />
        </SwiperSlide>
      </Swiper>



    </section>
  );
};

export default Hero;
