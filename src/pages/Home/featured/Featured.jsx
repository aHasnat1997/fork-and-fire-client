import React from 'react';
import './Featured.css';

import image from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Featured = () => {
  return (
    <section className='featuredBG my-16 text-white py-16'>
      {/* <div className='featuredBG  fixed z-30'></div> */}
      <SectionTitle heading={'OUR Featured'} subHeading={'Check it out'} />
      <div className='max-w mt-10 flex gap-16'>
        <img className='w-1/2' src={image} alt="Image" />
        <div className="">
          <h4 className='text-2xl'>March 20, 2023</h4>
          <h2 className='text-4xl my-4'>WHERE CAN I GET SOME?</h2>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem mollitia cum atque corporis nihil, aliquam eos, accusamus ipsam laudantium blanditiis quam, deleniti temporibus necessitatibus similique. Eveniet consequuntur qui quae totam.</p>
          <button className='my-btn btn-secondary mt-8'>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
