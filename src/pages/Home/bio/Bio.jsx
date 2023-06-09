import React from 'react';
import './Bio.css'

const Bio = () => {
  return (
    <section className='bioBG max-w my-16 rounded-2xl'>
      <div className='md:mx-20 my-8 md:my-16 p-8 md:px-10 md:py-8 text-center bg-white bg-opacity-80 rounded-xl'>
        <h2 className='text-2xl md:text-6xl font-bold mb-4'>
          Fork <span className='text-primary font-extrabold'>&</span> Fire
        </h2>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid debitis quasi, laborum voluptates cupiditate accusantium minima nostrum sequi asperiores porro delectus ullam, alias mollitia non quaerat ipsum necessitatibus magni, corrupti animi itaque velit nesciunt aspernatur. Sapiente omnis nam ea obcaecati atque, deserunt rem sunt, consequuntur ex blanditiis dicta nostrum.</p>
      </div>
    </section>
  );
};

export default Bio;
