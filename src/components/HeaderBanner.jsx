import React from 'react';

const HeaderBanner = ({ image, title }) => {
  return (
    <div className="hero"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-3/4 py-36 text-center text-neutral-content">
        <div className="w-full bg-black bg-opacity-50 rounded-3xl">
          <h1 className="text-5xl font-bold my-20 uppercase">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
