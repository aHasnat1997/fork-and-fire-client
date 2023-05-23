import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useState } from 'react';
import MenuCard from '../../components/MenuCard';

const MenuSection = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => setMenus(data))
  }, [])


  return (
    <section className='max-w my-16 w-full '>
      <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} />
      <div className='my-8 grid grid-cols-2 gap-8'>
        {
          menus.slice(0, 6).map(menu => <MenuCard key={menu._id} menuItem={menu} />)
        }
      </div>
      <div className='w-full flex justify-center'>
        <button className='my-btn'>View Full Menu</button>
      </div>
    </section>
  );
};

export default MenuSection;
