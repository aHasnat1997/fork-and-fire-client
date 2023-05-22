import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const menuItems = <>
    <li><a>Home</a></li>
    <li><a>Contact us</a></li>
    <li><a>Our Shop</a></li>
  </>;



  return (
    <nav>
      <div className="navbar md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-xl">
              {
                menuItems
              }
            </ul>
          </div>
          <Link to='/' className="text-2xl md:text-4xl flex items-center font-extrabold">
            <img className='w-6 md:w-8' src={logo} alt="logo" />
            <span>
              Fork<span className='text-primary'>&</span>Fire
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
            {
              menuItems
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log In</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
