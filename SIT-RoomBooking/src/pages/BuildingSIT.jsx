import React from 'react'
import Navbar from '../Components/Navbar';
import Calendar from '../Components/Calender';
import Table from '../Components/Table';
import BookingList from '../Components/BookingList';
import Footer from '../Components/Footer';
import Selectroom from '../Components/Selectroom'


const bookings = [
  {
    booking_title: "Meeting",
    booking_start: "2025-02-08T09:00:00",
    booking_end: "2025-02-08T10:00:00",
  },
  {
    booking_title: "Lunch Break",
    booking_start: "2025-02-08T12:00:00",
    booking_end: "2025-02-08T13:00:00",
  },
];

const BuildingSIT = () => {
  return (
    <>
    
    <div className='h-screen bg-[url(public/img/Pic-sit.png)] bg-cover bg-center overflow-y-scroll'>
    <Navbar/>
    <div className='p-8 h-3/5 w-full'> 
      <h1 className='text-4xl font-bold text-start' >
        SIT Building
        </h1> <br />
      <div className="flex w-full justify-center">    
        <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-lg">
          <Selectroom/>
          <Calendar/>
          <BookingList bookings={bookings}/>
          </div>
        
        <div className='h-full overflow-y-scroll'>
          <Table bookings={bookings} />
          </div>

      </div>
    </div>
          
    </div>
    <Footer/>
       </>
  );
};

export default BuildingSIT