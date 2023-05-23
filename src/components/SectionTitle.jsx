import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='text-center'>
      <h5 className='text-orange-500 text-xl mb-2 font-semibold'>--- {subHeading} ---</h5>
      <h2 className='w-1/2 mx-auto text-6xl border-y-4 border-secondary py-4 font-extrabold uppercase'>{heading}</h2>
    </div>
  );
};

export default SectionTitle;
