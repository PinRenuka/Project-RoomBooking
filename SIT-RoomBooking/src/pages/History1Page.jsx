import React from 'react'
import Backja from '../components/Backja'

const History1Page = () => {
  return (
    <>
     <div className='h-screen bg-[url(./img/Pic-lx.jpg)] bg-cover bg-center'>
        <div className='h-full grid place-items-center border-4'> 
           
              <div className='flex items-center justify-center gap-8 mx-auto p-8  bg-white w-3/5  rounded-4xl border-black border-1'>
              <div ><img  className='w-64 h-64' src="./img/cardlx.png" alt="" /></div>
               <div>
                  <div className='font-bold text-4xl text-fuchsia-950'>Lx Building 10/1</div> <br />
                  
                   <div className='text-fuchsia-950 font-semibold text-xl'>Detail: INT140 Computational Thinking G.1 <br />
                  Room: training 10/1<br />
                  Booking:<br />
                  Start time: 10:00 - Sunday 13 February 2025<br />
                  Duration: 4 hours 30 minutes<br />
                  End time: 14:30 - Sunday 05 February 2025<br />
                  Type: Lecturer Created<br />
                  By: pornthip<br />
                  Last updated: 15:56:48 - Tuesday 17 December 2024<br />
                  Every: 1 week<br />
                  Repeat Day: Sunday<br />
                  Repeat end Date: Sunday 13 February 2025 <br /></div>
                 
                  <div className='pt-10'><Backja/></div>
                  
                  
              
                  </div>
              </div>
             

          
        </div>


     </div>
    
    
    </>
  )
}

export default History1Page