import React, { useEffect, useState } from 'react';

const OrderTab = ({ categoryName }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/menus?category=${categoryName}`)
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  return (
    <div className='my-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {
        items.map(item => <div key={item._id} className="card bg-base-100 duration-300 shadow-xl hover:shadow-2xl">
          <figure><img src={item.image} alt="Product image" /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions justify-end">
              <button className="my-btn">add to cart</button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default OrderTab;
