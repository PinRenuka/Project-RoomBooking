import React from "react";
import { NavLink } from "react-router-dom"; // ✅ ใช้ react-router-dom ที่ถูกต้อง

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-10 bg-transparent">
      <div>
        <img src="./img/logo.png" alt="Logo" width={250} height={50} />
      </div>

      <div className="flex gap-4 items-center">
        <NavLink to="/home" className="font-bold text-black hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/help" className="font-bold text-black hover:text-gray-300">
          Help
        </NavLink>
        <NavLink to="/calendar" className="font-bold text-black hover:text-gray-300">
          Booking
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
