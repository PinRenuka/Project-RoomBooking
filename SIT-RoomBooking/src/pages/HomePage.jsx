import React from 'react'
import Navbar from '../components/Navbar'
const HomePage = () => {
  return (
   <>
    
   <div className='h-screen bg-[url(./img/Pic-sit.png)] bg-cover bg-center' >
   <Navbar></Navbar>
   <div className='font-bold text-8xl line-46 pt-20 pl-6 text-white'>
    SIT ROOM <br /> 
    BOOKINGS SYSTEM
    </div> 
    <div className='font-bold text-3xl line-46 pt-10 pl-6 text-white'>
      จองห้องคณะเทคโนโลยีสารสนเทศ SIT
    </div>

    <div className='flex gap-80 pl-20 pr-8 pt-20'>


        <div className='bg-[url(./img/lx-bu.png)] pl-4 pb-5 pt-69 pr-80 rounded-xl font-bold text-2xl text-white'>
         CB
        </div>

        <div className='bg-[url(./img/cardlx.png)] pl-4 pb-5 pt-69 pr-62 rounded-xl font-bold text-2xl text-white'>
           Lx Building
        </div>

        <div className='bg-[url(./img/cardsit.png)] pl-4 pb-4 pt-69 pr-58 rounded-xl font-bold text-2xl text-white'>
          SIT Building
        </div>

    </div>
  </div>
   </>
  )
}

export default HomePage