import React from 'react';
import useCart from '../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {

  const [orders, refetch] = useCart();

  return (
    <section className='p-8 md:p-16'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className='text-right'>Price</th>
              <th className='text-right'>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, i) => <tr key={order._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={order.item.image} alt="Product Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.item.name}</div>
                    </div>
                  </div>
                </td>
                <td className='text-right'>$ {order.item.price}</td>
                <td className='text-right'>{order.item.category}</td>
                <th className='text-right'>
                  <button className="btn btn-outline"><FaTrashAlt /></button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyCart;
