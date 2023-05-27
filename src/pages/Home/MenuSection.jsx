import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import SectionWithMenuCard from '../../components/SectionWithMenuCard';

const MenuSection = () => {

  return (
    <section className='max-w my-16 w-full '>
      <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} />
      <div className='my-8'>
        <SectionWithMenuCard categoryName={'popular'} />
      </div>
      <div className='w-full flex justify-center'>
        <button className='my-btn'>View Full Menu</button>
      </div>
    </section>
  );
};

export default MenuSection;
