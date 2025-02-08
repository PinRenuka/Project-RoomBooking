import React from 'react'
import { NavLink } from 'react-router'
import { FaSearch } from "react-icons/fa";
import DropdownNavigation from './DropdownNavigation';



const Navbar = () => {
  return (
    <><div className='flex justify-between pt-2 pl-10 pr-10 bg-transparent'>
      <div className='bg-transparen'>
      <img src='./img/logo.png' width={250} height={50}  ></img>
      
      </div>
      <div className='flex gap-2'>
      <NavLink to={'/home'}  className='pt-4.5 font-bold'>Home</NavLink>
      <NavLink to={'/help'} className='pt-4.5 font-bold'>Help</NavLink>
      
        <input className='bg-white rounded-xl font-bold px-5' placeholder='Seach' type="search" name=" seach" id="seach" />
        <DropdownNavigation/>
        
        
      </div>
      </div>
    </>
  )
}

export default Navbar