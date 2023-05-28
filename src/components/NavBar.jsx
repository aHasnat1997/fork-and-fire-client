import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthContext/AuthProvider';

const NavBar = () => {
  const { user } = useContext(AuthContext);
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
          {
            user ? (<div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-slate-800 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">{user.displayName}</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>) : <Link to='/login' className="btn">Log In</Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
