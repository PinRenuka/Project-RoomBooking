import React from 'react'

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router';
import BackTotable from '../components/BackTotable';
const ReportsPage = () => {
  return (
    <>
    
     <div className='h-screen bg-[url(./img/Pic-sit.png)] bg-cover bg-center '>
     <div className='h-full grid place-items-center border-4'>
      <div className='bg-white py-40 px-60 rounded-2xl border-lime-500 border-2 border-double '>
        
      <div className='text-lime-500 font-bold '>
        <div className='text-4xl'>Room Booking Success</div> <br />
        <div className='text-2xl'>Room have been Booking</div> <br />
        <div className='text-2xl'>you can check history in calender </div> <br />
        <BackTotable/>
        </div>
        
        
      </div>
      
      </div>
     
     </div>
    
    
    </>
  )
}

export default ReportsPage