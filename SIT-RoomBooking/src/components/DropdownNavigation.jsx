import React from 'react'

import { useNavigate } from "react-router-dom";

const DropdownNavigation = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <select className='bg-fuchsia-900 rounded-xl px-3 font-bold' onChange={handleChange} defaultValue="">
      <option value="" disabled>Picking Room</option>
      <option value="/buildingsit">CB2</option>
      <option value="/buildingsit">LX Building</option>
      <option value="/buildingsit">SIT Building</option>
    </select>
  );
};

export default DropdownNavigation;

