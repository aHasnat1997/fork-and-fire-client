import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';

const SectionWithMenuCard = ({ categoryName }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/menus?category=${categoryName}`)
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {
          items.map(item => <MenuCard key={item._id} menuItem={item} />)
        }
      </div>
    </>
  );
};

export default SectionWithMenuCard;
