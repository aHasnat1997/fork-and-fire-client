import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const menuItems = <>
    <li className='hover:text-primary'><NavLink to='/'
      className={({ isActive }) => isActive ? 'text-primary' : ''}
    >
      Home
    </NavLink></li>
    <li className='hover:text-primary'><NavLink to='/menu'
      className={({ isActive }) => isActive ? 'text-primary' : ''}
    >
      Our Menu
    </NavLink></li>
    <li className='hover:text-primary'><NavLink to='/shop'
      className={({ isActive }) => isActive ? 'text-primary' : ''}
    >
      Our Shop
    </NavLink></li>
  </>;



  return (
    <nav className='fixed z-10 top-0 left-0 right-0 bg-black bg-opacity-40 lg:text-white'>
      <div className="navbar md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-xl">
              {
                menuItems
              }
            </ul>
          </div>
          <Link to='/' className="text-2xl md:text-4xl flex items-center font-extrabold">
            <img className='w-6 md:w-8' src={logo} alt="logo" />
            <span className='text-white'>
              Fork<span className='text-primary'>&</span>Fire
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 px-1 font-bold text-xl">
            {
              menuItems
            }
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn">Log In</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
