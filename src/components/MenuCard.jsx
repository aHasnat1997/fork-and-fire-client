import React from 'react';

const MenuCard = ({ menuItem }) => {
  const { name, recipe, image, price } = menuItem

  return (
    <div className='w-full flex flex-col lg:flex-row gap-4'>
      <div className='overflow-hidden rounded-t-none rounded-s-full rounded-e-full rounded-r-full'>
        <img className='lg:h-[10rem] duration-1000 hover:scale-150' src={image} alt="product image" />
      </div>
      <div className='w-full flex justify-between'>
        <div>
          <h3 className='text-2xl font-semibold'>{name}</h3>
          <p>{recipe}</p>
        </div>
        <p className='text-orange-600 text-4xl font-bold'>${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
