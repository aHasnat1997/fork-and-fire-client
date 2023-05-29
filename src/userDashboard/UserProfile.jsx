import React, { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthContext/AuthProvider';
import useCart from '../hooks/useCart';
import { FaShoppingCart, FaWallet } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [orders] = useCart();
  const totalPrice = orders.reduce((acc, odj) => acc + odj.item.price, 0);
  return (
    <section className='p-8 md:p-16'>
      <div className="card p-8 lg:card-side bg-base-100 shadow-xl">
        <img className='w-40 h-40 rounded-full' src={user?.photoURL} alt="User Image" />
        <div className="card-body">
          <h2 className="card-title">User Name: {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
        </div>
      </div>
      <div className='mt-8 flex justify-center items-center gap-8'>
        <div className='p-16 shadow-2xl rounded-2xl text-8xl flex flex-1 justify-center items-center gap-8'>
          <p><FaShoppingCart /></p>
          <p>{orders.length}</p>
        </div>
        <div className='p-16 shadow-2xl rounded-2xl text-8xl flex flex-1 justify-center items-center gap-8'>
          <p><FaWallet /></p>
          <p>${parseFloat(totalPrice.toFixed(2))}</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
