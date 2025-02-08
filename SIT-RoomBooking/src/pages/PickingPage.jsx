import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router'
const PickingPage = () => {
  return (
    <>
    <div className='h-screen  bg-[url(./img/Pic-sit.png)] bg-cover bg-center'>
       <Navbar></Navbar>
       <div className='font-bold text-6xl pl-20 pt-21 text-white'>
        Booking
       </div>

       <div className='mx-auto pt-20 bg-cyan-950 pb-20 pl-20 w-3/5 rounded-2xl mt-20'>
            <form action="">
            <div className='flex gap-3'>
              <div>
                    <label className='text-white' htmlFor="First Name">First Name</label><br /> <input className='bg-white rounded-sm mt-3 mb-3' type="text"  /> <br />
                    <label className='text-white' htmlFor="Last Name">Last Name</label><br /> <input className='bg-white rounded-sm mt-3 mb-3' type="text"  /> <br />
                    <label className='text-white ' htmlFor="Types">Types</label><br /> 
                    <input className='text-white' type="radio" name="Lecture" id="Lecture"  value={'Lecture'}/>
                    <label  htmlFor="Lecture" className='bg-red-300 rounded-2xl pl-7 pr-7 pt-0.5 pb-0.5 ml-3 mr-3'>Lecture</label>

                    <input type="radio" name="Student" id="Student"  value={'Student'}/>
                    <label htmlFor="Student" className='bg-red-300 rounded-2xl pl-7 pr-7 pt-0.5 pb-0.5 ml-3 mr-3'>Student</label> <br /><br />

                    <input type="radio" name="Staff" id="Staff"  value={'Staff'}/>
                    <label htmlFor="Staff" className='bg-red-300 rounded-2xl pl-7 pr-7 pt-0.5 pb-0.5 ml-3 mr-3'>Staff</label>

                    <input type="radio" name="LF" id="LF"  value={'LF'}/>
                    <label htmlFor="LF" className='bg-red-300 rounded-2xl pl-7 pr-7 pt-0.5 pb-0.5 ml-3 mr-3'>LF</label> <br />

                    <label className='text-white ' htmlFor="Detail">Detail</label><br /> <input className='bg-white rounded-sm mt-3' type="text"  /> <br />
                </div>

                <div>
                <label className='text-white' htmlFor="Booking Day">Booking Day</label><br /> 
                <input className='bg-white rounded-sm mt-3 mb-3' type="text" placeholder='DD/MM/YYYY' /> <br />
                
                <label className='text-white' htmlFor="Start Time">Start Time</label>  <label className='ml-8 text-white' htmlFor="End Time">End Time</label><br /> <br /> 
                <input className='bg-white rounded-sm mr-2.5' type="time" name="Start Time" id="Start Time" />
                to
               
                <input className='bg-white rounded-sm ml-2.5 ' type="time" name="End Time" id="End Time" /> <br />

                
                 
                <div className='pt-10'>
                <NavLink to={'/reports2'} className='mr-20 bg-red-500 px-7 py-3  mt-7 rounded-xl'>Cancel</NavLink>
                 <NavLink to={'/reports'} className='mr-20 bg-green-500 px-7 py-3  mt-7 rounded-xl'>Apply</NavLink>
                </div>


                </div>
              </div>
          </form>
       </div>

      </div>
    
    
    
    </>
  )
}

export default PickingPage