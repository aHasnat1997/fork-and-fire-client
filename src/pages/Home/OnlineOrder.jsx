import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';

const OnlineOrder = () => {
  return (
    <section className='max-w my-8'>
      <SectionTitle heading={'Order Online'} subHeading={'From 11:00am to 10:00pm'} />
      <div className='w-3/4 mx-auto mt-8'>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='w-full' src={img1} alt="Food Image" />
            <p className='w-full absolute bottom-8 text-center text-4xl font-semibold text-white'>Salads</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={img2} alt="Food Image" />
            <p className='w-full absolute bottom-8 text-center text-4xl font-semibold text-white'>Pizzas</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={img3} alt="Food Image" />
            <p className='w-full absolute bottom-8 text-center text-4xl font-semibold text-white'>Soups</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={img4} alt="Food Image" />
            <p className='w-full absolute bottom-8 text-center text-4xl font-semibold text-white'>Desserts</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OnlineOrder;
