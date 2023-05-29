import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaUserAlt, FaRegCalendarAlt, FaWallet, FaShoppingCart, FaStar, FaCalendarCheck } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          <Outlet />

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-white bg-orange-700">
            <li className='mb-8'>
              <Link to='/' className="text-2xl md:text-4xl flex items-center font-extrabold">
                <img className='w-6 md:w-8' src={logo} alt="logo" />
                <span className='text-white'>
                  Fork<span className='text-primary'>&</span>Fire
                </span>
              </Link>
            </li>
            <li className='text-2xl font-bold hover:text-primary'><NavLink to='/user-dashboard/user'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              <FaUserAlt /> User Profile
            </NavLink></li>
            <li className='text-2xl font-bold hover:text-primary'><NavLink to='/user-dashboard/reservation'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              <FaRegCalendarAlt /> Reservation
            </NavLink></li>
            <li className='text-2xl font-bold hover:text-primary'><NavLink to='/user-dashboard/payment'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              <FaWallet /> Payment History
            </NavLink></li>
            <li className='text-2xl font-bold hover:text-primary'><NavLink to='/user-dashboard/cart'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              <FaShoppingCart /> My Cart
            </NavLink></li>
            <li className='text-2xl font-bold hover:text-primary'><NavLink to='/user-dashboard/review'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              <FaStar /> Add Review
            </NavLink></li>
            <li className='text-2xl font-bold hover:text-primary'><NavLink to='/user-dashboard/booking'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              <FaCalendarCheck /> My Booking
            </NavLink></li>

          </ul>

        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
