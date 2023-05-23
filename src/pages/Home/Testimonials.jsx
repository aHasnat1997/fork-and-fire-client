import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [])
  return (
    <section className='max-w w-full my-16'>
      <SectionTitle heading={'Testimonials'} subHeading={'What Our Clients Say'} />
      <div className="mt-8">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            reviews.map(review => <SwiperSlide key={review._id}>
              <div className='flex flex-col items-center gap-4'>
                <FaQuoteLeft className='text-8xl' />
                <p className='text-xl text-center px-32'>{review.details}</p>
                <h3 className='text-4xl text-orange-700 font-bold'>{review.name}</h3>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
