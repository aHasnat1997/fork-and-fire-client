import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import SectionTitle from '../../components/SectionTitle';
import SectionWithMenuCard from '../../components/SectionWithMenuCard';
import titleImg from '../../assets/menu/banner3.jpg';
import dessert from '../../assets/menu/dessert-bg.jpeg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import salad from '../../assets/menu/salad-bg.jpg';
import soup from '../../assets/menu/soup-bg.jpg'


const MenuLayout = () => {
  return (
    <>
      <section>
        <HeaderBanner title={'OUR MENU'} image={titleImg} />
        <div className='max-w my-20'>
          <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
          <div className='mt-10'>
            <SectionWithMenuCard categoryName={'offered'} />
          </div>
        </div>
      </section>
      <section>
        <HeaderBanner title={'desserts'} image={dessert} />
        <div className='max-w mt-16'>
          <SectionWithMenuCard categoryName={'dessert'} />
        </div>
        <div className='flex justify-center'>
          <button className='my-btn my-8'>order your favorite food</button>
        </div>
      </section>
      <section>
        <HeaderBanner title={'pizza'} image={pizza} />
        <div className='max-w mt-16'>
          <SectionWithMenuCard categoryName={'pizza'} />
        </div>
        <div className='flex justify-center'>
          <button className='my-btn my-8'>order your favorite food</button>
        </div>
      </section>
      <section>
        <HeaderBanner title={'salad'} image={salad} />
        <div className='max-w mt-16'>
          <SectionWithMenuCard categoryName={'salad'} />
        </div>
        <div className='flex justify-center'>
          <button className='my-btn my-8'>order your favorite food</button>
        </div>
      </section>
      <section>
        <HeaderBanner title={'soup'} image={soup} />
        <div className='max-w mt-16'>
          <SectionWithMenuCard categoryName={'soup'} />
        </div>
        <div className='flex justify-center'>
          <button className='my-btn my-8'>order your favorite food</button>
        </div>
      </section>
    </>
  );
};

export default MenuLayout;
