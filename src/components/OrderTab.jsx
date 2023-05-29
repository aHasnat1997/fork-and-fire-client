import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contextProvider/AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const OrderTab = ({ categoryName }) => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8000/menus?category=${categoryName}`)
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  const handelAddToCart = item => {
    const data = { item, email: user?.email }
    // console.log(data);

    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'First login for add to cart'
      });
      navigate('/login');
    }
    else {
      const option = {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch('http://localhost:8000/orders', option)
        .then(res => res.json())
        .then(data => {
          refetch();
          if (data.insertedId) {
            Swal.fire({
              icon: 'success',
              title: 'Product Add Successfully 🎉'
            });
          }
        })
        .catch(err => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: '⛔ Oops...',
            text: 'Something went wrong!',
          });
        });
    }
  }



  return (
    <div className='my-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {
        items.map(item => <div key={item._id} className="card bg-base-100 duration-300 shadow-xl hover:shadow-2xl">
          <div className='w-full relative'>
            <figure><img src={item.image} alt="Product image" /></figure>
            <span className='p-1 bg-slate-800 text-2xl font-bold rounded text-white absolute top-0 right-0'>${item.price}</span>
          </div>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handelAddToCart(item)} className="my-btn">add to cart</button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default OrderTab;
