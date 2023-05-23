import React from 'react';
import Hero from './Hero/Hero';
import OnlineOrder from './OnlineOrder';
import Bio from './bio/Bio';
import MenuSection from './MenuSection';
import About from './featured/Featured';
import Testimonials from './Testimonials';

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <OnlineOrder />
      <Bio />
      <MenuSection />
      <About />
      <Testimonials />
    </>
  );
};

export default HomeLayout;
