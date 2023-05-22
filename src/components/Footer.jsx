import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <div className='w-full md:flex'>
        <div className='w-full p-10 bg-slate-600'>
          <div className='text-white'>
            <h2 className='text-4xl text-center mb-4 font-bold'>CONTACT US</h2>
            <p className='text-center'>
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className='w-full p-10 bg-blue-950'>
          <div className='text-white'>
            <h2 className='text-4xl text-center mb-4 font-bold'>Follow US</h2>
            <p className='text-center'>
              Join us on social media
            </p>
            <div className='flex justify-center gap-4 text-4xl mt-4'>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-black">
        <h4 className='py-2 text-white'>Copyright © Fork&Fire. All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
