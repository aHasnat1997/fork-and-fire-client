import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side bg-orange-800">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-white">
            {/* <!-- Sidebar content here --> */}
            <li className='hover:text-primary'><NavLink to='/'
              className={({ isActive }) => isActive ? 'text-primary' : ''}
            >
              Home
            </NavLink></li>

          </ul>

        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
