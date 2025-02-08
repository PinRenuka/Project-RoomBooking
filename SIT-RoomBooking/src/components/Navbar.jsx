import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" >
        <img src="public/img/logo.png" width={250} height={50} alt="SIT Logo" /> SIT Room Booking
      </div>
      <div className="menu">
        <button>Help</button>
        <input type="text" placeholder="Search" />
        <button className='bg-blue-50 rounded-md text-black px-5'>Picking a room</button>
      </div>
    </nav>
  );
};

export default Navbar;
