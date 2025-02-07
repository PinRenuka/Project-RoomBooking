import React from 'react';
import { NavLink } from 'react-router-dom';  

const Navbar = () => {
  return (
    <div className='flex justify-between pt-2 pl-10 pr-10 bg-transparent'>
      <div className=''>
        <img className="w-[264px] h-16" src="/img/logo.png" alt="Logo" />
      </div>
      <div className='flex gap-2'>
        <NavLink to={'/Home'} className='pt-4.5'>Home</NavLink>
        <NavLink to={'/Help'} className='pt-4.5'>Help</NavLink>
        <button className='bg-white rounded-md text-gray-500 px-5 border-1'>
          Search
        </button>
        <button className='bg-blue-50 rounded-md text-black px-5'>Picking a room</button>
      </div>
    </div>
  );
}

export default Navbar;
